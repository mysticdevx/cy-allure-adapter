@any-tag-feature-level
@parentSuite("common-parent-suite") @suite("regular-suite") @subSuite("regular-with-issues")
Feature: Regular feature file

  @issue("ABC-123456")
  Scenario: Regular passing scenario with session
    Given visit base url with session
    Then I should see "https://www.demoblaze.com/" in the browser url

  @issue("ABC-123456")
  Scenario: Regular passing scenario cy root command
    Given visit base url
    And use cy root command after cy command
    Then verify items
