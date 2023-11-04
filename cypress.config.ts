import { defineConfig } from 'cypress';

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {createEsbuildPlugin} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const {configureAllureAdapterPlugins} = require('@mmisty/cypress-allure-adapter/plugins');
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';


export default defineConfig({
  env: {
    issuePrefix: 'http://jira.com/browse/',
    tmsPrefix: 'http://jira.com/tms/',
    allure: true,
    allureResults: 'allure-results',
    allureAttachRequests: true,
    allureShowTagsInTitle: false,
    allureAddNonSpecialTags: true,
    cucumber: true,
    omitFiltered: true,
    filterSpecs: true,
  },
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    specPattern: ['cypress/e2e/**/*.feature'],
    excludeSpecPattern: '*.ts',
    supportFile: 'cypress/support/e2e.ts',
    async setupNodeEvents(cypressOn, config) {
      const on = require('cypress-on-fix')(cypressOn);
      await addCucumberPreprocessorPlugin(on, config);

      const bundler = createBundler({
        define: {global: 'window'},
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);

      configureAllureAdapterPlugins(on, config);

      return config;
    },
  }
});
