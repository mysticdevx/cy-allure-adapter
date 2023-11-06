@any-tag-feature-level
@parentSuite("common-parent-suite") @suite("regular-suite") @subSuite("sub-suite")
Feature: Regular feature file

  @issue("ABC-123456")
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

  @issue("ABC-1235")
  @fail-before
  Scenario: Regular failing scenario in before hook
    Given visit base url
    Then I should see "https://www.demoblaze.com/" in the browser url

  @issue("ABC-1235")
  @fail-after
  Scenario: Regular failing scenario in after hook
    Given visit base url
    Then I should see "https://www.demoblaze.com/" in the browser url
