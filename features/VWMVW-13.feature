Feature: [VWMVW-13] - Verify that the account settings section has the expected behavior

	Scenario: Log in and select "Account" menu 
		Given user is Logged in
		When user selects the "Account" menu
		Then The page containing "Account settings" and "Car settings" should load
			
	Scenario: Verify that each field marked with "*" sign is required
	  	Given the page has been loaded
	  	When fields are marked with "*"
	  	Then ensure that the fields are required


	Scenario: Save the changes and observe the contents of the page
		Given user tries to save changes
	  	When data is not filled correctly
	  	Then user should be not able to save

	Scenario: Verify that retailer lookup behaves as expected when "Service" tab is selected
	  	Given user selects service tab
	  	Then retailer lookup should behave as expected

	Scenario: Verify that retailer lookup behaves as expected when "Sales" tab is selected
		Given user selects sales tab
		Then retailer lookup should behave as expected