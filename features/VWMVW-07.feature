Feature: [VWMVW-07] - Verify that User dashboard has the expected behavior

  Scenario: Login
    Given Log in the VW account
    Then The user should be logged in

  Scenario: Open the user dashboard and from the "car on order" section select "Track my car"  and observe the result
    Given user has dashboard open
    When user selects "Track my car" from "car on order" section
    Then the Track my car page should load

  Scenario: From the "car on order" section select "Contact my retailer" and observe the result
    Given user has dashboard open
    When user selects "Contact my retailer" from "car on order" section
    Then the Retailer Lookup page should load

  Scenario: From the "car owned" section select "View my car" and observe the result
    Given user has dashboard open
    When user selects "car owned" from "View my car" section
    Then the View my car page should load
    
  Scenario: From the "car owned" section select "Book a service" and observe the result
    Given user has car owned section open.
    When  user selects "Book a service"
    Then Book a service page should load