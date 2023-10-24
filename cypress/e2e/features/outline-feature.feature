@any-feature-tag
@parentSuite("common-parent-suite") @suite("outline-suite") @subSuite("sub-suite")
Feature: Scenario with outline

  @issue("ABC-1236")
  Scenario Outline: Outline scenario passing
    Given visit base url
    Then I should see "<url>" in the browser url
    Examples:
      | url                        |
      | https://www.demoblaze.com/ |
      | demoblaze                  |

  @issue("ABC-1237")
  Scenario Outline: Outline scenario passing and failing
    Given visit base url
    Then I should see "<url>" in the browser url
    Examples:
      | url                        |
      | https://www.demoblaze.com/ |
      | google                     |
