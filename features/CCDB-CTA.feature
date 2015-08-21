Feature: Current Car Dashboard - Call To Action

  Scenario: User is browsing Current Car Dashboard
    Given Log in the VW account
    Then The user should be logged in

  Scenario: Open the user dashboard and observe its contents. Verify that it is the one expected.
    Given Open the user dashboard
    Then There should be a greeting message. The dashboard should contain the tab: "My cars"
    And The dashboard should contain the tab: "My cars"
    And The dashboard should contain the tab: "Account"
    And The following sections should be displayed: The car on order, The car owned, The car configured, Add a car,

  Scenario: Observe the actions that are allowed in each section
    Given User has ordered a car
    When user comes to section "The car on order"
    Then the user can select the buttons: "Track my car", "Contact my retailer"

  Scenario: Observe the actions that are allowed in each section
    Given User owns a car
    When user comes to section "The car owned"
    Then the user can select the buttons: "View my car", "Book a service"

  Scenario: Observe the actions that are allowed in each section
    Given User has configured a car
    When the car is configured
    Then the user can select the buttons: "View brochure", "Edit configuration"