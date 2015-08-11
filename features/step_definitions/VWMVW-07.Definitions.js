var aTest = function () {
	this.World = require("../support/world.js").World;

	this.Given(/^user has dashboard open$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^user selects "([^"]*)" from "([^"]*)" section$/, function (arg1, arg2, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the Track my car page should load$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the Retailer Lookup page should load$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the View my car page should load$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Given(/^user has car owned section open\.$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^user selects "([^"]*)"$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^Book a service page should load$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});


};

module.exports = aTest;

