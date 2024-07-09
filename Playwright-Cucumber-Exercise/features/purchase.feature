Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page
    And I will login as 'standard_user'

  Scenario: Validate successful purchase text
    Then I will add the backpack to the cart
    When I select the cart
    And I select Checkout
    And I fill in the First Name, Last Name, and Zip/Postal Code
    And I select Continue
    And I select Finish
    Then I validate the text 'Thank you for your order!'
