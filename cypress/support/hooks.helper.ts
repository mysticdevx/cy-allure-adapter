declare global {
  interface Window {
    testState: {
      gherkinDocument: {
        uri: string;
        feature: {
          name: string;
        };
      };
      pickle: {
        name: string;
        steps: { text: string; id: string }[];
        tags: { name: string }[];
      };
      pickleStep: { text: string; id: string };
    };
  }
}

export class HooksHelper {
  static allureReportHelper() {
    // override default allure test name, because it duplicates the scenario in the title
    Cypress.Allure.fullName(window.testState.pickle.name);
    // override default feature name, because it does not match the cucumber feature name
    Cypress.Allure.feature(window.testState.gherkinDocument.feature.name);
    Cypress.Allure.addDescriptionHtml(this.createHtmlDescription());

    const today = new Date();
    const currentHour = today.getHours();
    const browserName =
      Cypress.browser.name +
      ', version: ' +
      Cypress.browser.majorVersion +
      ', headless: ' +
      Cypress.browser.isHeadless;


    // related data can be obtained from CI or environment variables
    Cypress.Allure.writeExecutorInfo({
      name: 'Gitlab CI -->',
      type: 'gitlab',
      buildOrder: currentHour,
      buildName: 'can be anything, and will be used as a link to the build',
      buildUrl: 'https://example.com/...',
    });

    Cypress.Allure.writeEnvironmentInfo({
      // if the e2e fw resides in the same repo with the app, then the app version can be derived from package.json
      version: '1.0.0',
      environment_url: Cypress.config('baseUrl') as string,
      tested_tags: Cypress.env('TAGS'),
      browser: browserName,
      platform: Cypress.platform,
    });

    // to filter out specific failure under categories report
    // @ts-ignore
    Cypress.Allure.writeCategoriesDefinitions([
      {
        name: 'detached element',
        description: 'detached element',
        messageRegex: '.*detached from the DOM.*',
        matchedStatuses: ['failed'],
        flaky: true,
      },
      {
        name: 'hook errors',
        description: 'hook error',
        messageRegex: '.*(hook).*',
        matchedStatuses: ['failed'],
      },
    ]);
  }


  // a basic html description for the report, that includes the file, feature and scenario names
  // all can be copied on click for easy navigation in case of failure
  private static createHtmlDescription() {
    return `
<html>
  <body>
    <div>
      <p>
        <strong> * File:</strong>
        <span>${ window.testState.gherkinDocument.uri.split('/').pop() }</span>
      </p>
      <p>
        <strong> * Feature:</strong>
        <span>${ window.testState.gherkinDocument.feature.name }</span>
      </p>
      <p>
        <strong> * Scenario:</strong>
        <span>${ window.testState.pickle.name }</span>
      </p>
    </div>
  </body>
</html>
`;
  }
}
