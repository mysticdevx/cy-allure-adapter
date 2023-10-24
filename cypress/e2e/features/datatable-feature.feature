@any-tag-feature-level
@parentSuite("table-parent-suite") @suite("table-suite")
Feature: Datatable feature

  @issue("ABC-1234")
  Scenario: Scenario with datatable
    Given visit base url
    Then I log below datatable
      | Table Header |
      | row 1        |
      | row 2        |
