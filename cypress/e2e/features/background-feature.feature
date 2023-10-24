@any-feature-tag
@parentSuite("common-parent-suite") @suite("regular-suite") @subSuite("sub-suite-background")
Feature: Scenario with background

  Background:
    Given visit base url

  @issue("ABC-1266")
  Scenario: background passing scenario
    Then I should see "https://www.demoblaze.com/" in the browser url

  @issue("ABC-1267")
  Scenario: background failing scenario
    Then I should see "https://www.google.com/" in the browser url
