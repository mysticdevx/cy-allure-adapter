import { attach, DataTable, Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^visit base url$/, () => {
  cy.visit('/');
});

Then(/^I should see "(.*)" in the browser url$/, (url: string) => {
  cy.url().should('include', url);
});

Then(/^I log below datatable$/, (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    cy.log(JSON.stringify(element));
  });
});

Given(/^make an api request$/, () => {
  cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    cy.log(response.body.title);
  });
});
