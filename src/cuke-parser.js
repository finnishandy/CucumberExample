/**
 * Created by sakariruoho on 8/12/15.
 */

var CukeParser = function(cuke) {
    this.cuke = cuke;
    this.pending = 0;
    this.skipped = 0;
    this.steps = 0;
    this.tags = {};
};

CukeParser.prototype.parseCukeJson = function(cuke) {
    var that = this;
    //that.cuke = cuke || that.cuke;
    that.cuke.forEach(function(feature) {
        that.tagParser(feature)
        feature.elements.forEach(function(element) {
            that.tagParser(element);
            element.steps.forEach(function(step) {
                that.steps++;
                switch (step.result.status) {
                    case "skipped":
                        that.skipped++;
                        break;
                    case "pending":
                        that.pending++;
                        break;
                    default:
                        "foo";
                }
            });
        })
    });
};

CukeParser.prototype.setCuke = function(cuke) {
    this.cuke = cuke;
}

CukeParser.prototype.tagParser = function(cukeElement) {
    var that = this;
    if (cukeElement.tags) {
        cukeElement.tags.forEach(function(tag) {
            var foo = that.tags[tag.name];
            that.tags[tag.name] = (foo) ? ++foo : 1;
            console.log("tag: " + JSON.stringify(tag.name));
        });
    }
};

CukeParser.prototype.commandResolver = function(req) {
    var tags = req.query.tags;
    var features = req.query.features;
    var command = 'cucumber-js --format=json';
    command += ((features) ? ' features/' + features.toUpperCase() + '.feature' : '');
    command += ((tags) ? ' --tags @' + tags : '');
    return command;
};

CukeParser.prototype.getSummary = function() {
    return {pending: this.pending, skipped: this.skipped, steps: this.steps, tags: this.tags};
};

CukeParser.prototype.getCuke = function() {
    return this.cuke;
}

module.exports = CukeParser;
