@any-tag-feature-level
@parentSuite("common-parent-suite") @suite("regular-suite") @subSuite("sub-suite")
Feature: Regular feature file

  @issue("ABC-1234")
  Scenario: Regular passing scenario
    Given visit base url
    Then I should see "https://www.demoblaze.com/" in the browser url

  @any-scenario-level-tag
  @issue("ABC-1235")
  Scenario: Regular failing scenario
    Given visit base url
    Then I should see "https://www.google.com/" in the browser url

  @retries(2)
  Scenario: Regular failing scenario with retries
    Given visit base url
    Then I should see "https://www.google.com/" in the browser url
