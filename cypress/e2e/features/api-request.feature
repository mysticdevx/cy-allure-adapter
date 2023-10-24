@api-request
@parentSuite("api-request")
Feature: Api request feature
  optionally the api request can be added to html report,

  @issue("ABC-1234")
  Scenario: Make an api request and attach the response to the report
    Given make an api request
