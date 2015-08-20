var aTest = function () {
	this.World = require("../support/world.js").World;


	this.Given(/^user is Logged in$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^user opens the "([^"]*)" page$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^the page should load having step (\d+) displayed$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});




};

module.exports = aTest;

