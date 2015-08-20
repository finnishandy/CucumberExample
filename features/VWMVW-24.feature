@medium
Feature: [VWMVW-24] - Verify that the EVC full report has the expected contents and behavior

  Scenario: Load a full EVC report
    Given The user should have a car in service
    Then The page with the EVC report should load

  Scenario: Observe the contents of the EVC report page
    Given user has selected full EVC report
    Then page hero should contain No of Urgent, No of Advisory, No of Healthy, Total, Review & respond issues

  Scenario: Observe the contents of the Cost breakdown section
    Given when navigating to cost breakdown section
    When EVC report contains issues to be resolved
    Then these issues should be separated by priority Urgent or Advisory work
    And each issue should contain desciption, the cost, a Why is this important link and Approve & Defer buttons
    And at the bottom of the section there should be a Submit button

  Scenario: Observe the contents of the "Full report" section
    Given foo
    Then The full report should contain details about: <Area that has been checked> Status Price Details
    And The status can be: Urgent Advisory Healthy Not checked
    And The "Details" column can be empty or contain: "+", "-"

  Scenario: Select "Why is this important" link from each issue and observe the result
    Given foo
    Then An overlay with more information should load containing details about the check

  Scenario: Close the overlay from the previous step.  Select to approve some issues and to defer other issues. Press on "Submit" button and observe the result
    Given foo
    Then An overlay with the conclusions should load.
    And In the overlay scrolling is restricted to overlay height. Clicking back simply closes the overlay so that the user can make their changes.
    And Contains buttons: "Back" and "Confirm & submit"

  Scenario: Select "Back" button and observe the results
    Given foo
    Then The overlay should close and the EVC report page should load

  @foo
  Scenario: Press "Submit" then from the overlay press "Confirm & submit" and observe the result
    Given foo
    Then The submitted report should load and a conclusion with the "Works you approved" with the summary and total cost should be displayed