var aTest = function () {
	this.World = require("../support/world.js").World;

	this.givenNumber = 0;

	
	this.When(/^user selects the "([^"]*)" menu$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^The page containing "([^"]*)" and "([^"]*)" should load$/, function (arg1, arg2, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^fields are marked with "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^ensure that the fields are required$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^user tries to save changes$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^data is not filled correctly$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^user should be not able to save$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^user selects service tab$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^retailer lookup should behave as expected$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^user selects sales tab$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});


};

module.exports = aTest;

