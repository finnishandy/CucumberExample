Feature: [VWMVW-11] - Verify that booking a service has the expected flow and behavior

	Scenario: Login and open the "Book a service" page
		Given user is Logged in
		When user opens the "Book a service" page
		Then the page should load having step 1 displayed
		
	Scenario: Observe the contents of the loaded page
		Given user has opened a page
		When the page has been loaded
		Then first step of "Book a service" should contain 2 sections: "My car", "More info" (optional), "Continue" button
	



