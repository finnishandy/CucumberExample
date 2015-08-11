var aTest = function () {
	this.World = require("../support/world.js").World;


	this.When(/^user opens the add a car page$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^The page should load$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});


};

module.exports = aTest;

