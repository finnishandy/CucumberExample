Feature: [VWMVW-08] - Verify that adding an owned car behaves as expected

  Scenario: Login and open the add a car page (either directly or by executing a previous test)
    Given Log in the VW account
    When user opens the add a car page
    Then The page should load