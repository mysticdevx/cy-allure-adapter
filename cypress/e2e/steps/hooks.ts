import { After, Before } from '@badeball/cypress-cucumber-preprocessor';
import { HooksHelper } from '../../support/hooks.helper';

Before(() => {
  HooksHelper.allureReportHelper();
});

After({tags: '@fail-after'}, () => {
  expect(true, 'failed in after hook').to.be.false;
});

Before({tags: '@fail-before'}, () => {
  expect(true, 'failed in before hook').to.be.false;
});
