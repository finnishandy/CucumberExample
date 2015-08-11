var aTest = function () {
	this.World = require("../support/world.js").World;



	this.Given(/^Log in the VW account$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^The user should be logged in$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^Open the user dashboard$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^There should be a greeting message\. The dashboard should contain the tab: "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^The dashboard should contain the tab: "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^The following sections should be displayed: The car on order, The car owned, The car configured, Add a car,$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});



	this.Given(/^User has ordered a car$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^user comes to section "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the user can select the buttons: "([^"]*)", "([^"]*)"$/, function (arg1, arg2, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^User owns a car$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});


	this.Given(/^User has configured a car$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});


	this.When(/^the car is configured$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});



};

module.exports = aTest;

