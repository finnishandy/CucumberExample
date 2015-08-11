var aTest = function () {
	this.World = require("../support/world.js").World;

	this.givenNumber = 0;

	this.Given(/^a variable set to (\d+)$/, function(number, next) {
		this.givenNumber = parseInt(number);
		next.pending();
	});

	this.When(/^I increment the variable by (\d+)$/, function (number, next) {
		this.givenNumber = this.givenNumber + parseInt(number);
		next();
	});

	this.Then(/^the variable should contain (\d+)$/, function (number, next) {
		if (this.givenNumber != number)
			throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
		next();
	});
	
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

