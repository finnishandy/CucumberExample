var aTest = function () {
	this.World = require("../support/world.js").World;

	this.givenNumber = 0;

	
	this.Given(/^user has opened a page$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^the page has been loaded$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^first step of "([^"]*)" should contain (\d+) sections: "([^"]*)", "([^"]*)" \(optional\), "([^"]*)" button$/, function (arg1, arg2, arg3, arg4, arg5, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});


};

module.exports = aTest;

