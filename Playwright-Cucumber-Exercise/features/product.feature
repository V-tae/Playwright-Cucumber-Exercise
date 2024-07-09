Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'

  Scenario Outline: Validate product sort by price <sort>
    When I sort items by <sort>
    Then I validate all items are sorted correctly by <sort>
  Examples:
    | sort            |
    | Price (low to high) |
    | Price (high to low) |