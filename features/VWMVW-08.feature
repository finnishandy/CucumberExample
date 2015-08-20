@VWMVW-08
Feature: [VWMVW-08] - Verify that adding an owned car behaves as expected

  @medium @foo
  Scenario: Login and open the add a car page (either directly or by executing a previous test)
    Given Log in the VW account
    When user opens the add a car page
    Then The page should load

  Scenario: Observe the contents of the page
    Given user is on add a car main page
    Then the page should contain the text "I'd like to add"
    And button A car I won
    And button A car I configured
    And button A configured car

  Scenario: Select "A car I own" and observe the modifications from the page
    Given user is on add a car main page
    When user selects A car I own
    Then the text "My registration number" should be shown
    And an edit box should be shown
    And next button should be enabled