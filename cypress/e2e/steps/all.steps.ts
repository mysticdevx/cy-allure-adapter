import { DataTable, Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^visit base url$/, () => {
  cy.visit('/');
});


Given(/^visit base url with session$/, () => {
  cy.session("sessionName", () => {
    cy.visit('https://www.demoblaze.com/')
    cy.log('visit-successful')
  })
});

Given(/^use cy root command after cy command$/, () => {
  cy.url().should("include", "https://www.demoblaze.com")
  cy.root().find('.list-group').find('a').eq(1).click();
});

Given(/^use chained cypress command$/, () => {
  cy.get('.list-group').find('a').eq(1).click();
});

Given(/^verify items$/, () => {
  cy.get('.row').find('.card').should('have.length', 7);
});

Then(/^I should see "(.*)" in the browser url$/, (url: string) => {
  cy.log('i should see... step');
  cy.url().should('include', url);
});

Then(/^I log below datatable$/, (datatable: DataTable) => {
  datatable.hashes().forEach((element) => {
    cy.log(JSON.stringify(element));
  });
});

Given(/^make an api request$/, () => {
  cy.log('make an api request... step');
  cy.request('https://jsonplaceholder.typicode.com/todos/1');
});

Given(/^log anything$/, () => {
  cy.log('log anything step: command 1');
  cy.log('log anything step: command 2');
});

Given(/^use session command$/, () => {
  cy.session("sessionName", () => {
    cy.log('session is created here');
  });
});
