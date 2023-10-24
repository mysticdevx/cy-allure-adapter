module.exports = {
    stepDefinitions: ["cypress/e2e/steps/**/*.steps.ts"],
    filterSpecs: true,
    omitFiltered: true,
    messages: {
        enabled: true,
        output: `cypress/cucumber-json/output.ndjson`,
    },
    pretty: {
        enabled: true
    },
    json: {
        enabled: true,
        output: `cypress/cucumber-json/output.cucumber.json`,
    },
};
