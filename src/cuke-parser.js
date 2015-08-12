/**
 * Created by sakariruoho on 8/12/15.
 */

var CukeParser = function(cuke) {
    this.cuke = cuke;
    this.pending = 0;
    this.skipped = 0;
    this.steps = 0;
    this.tags = [];
};

CukeParser.prototype.parseCukeJson = function() {
    var that = this;
    that.cuke.forEach(function(feature) {
        feature.elements.forEach(function(element) {
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

CukeParser.prototype.getSummary = function() {
    return {pending: this.pending, skipped: this.skipped, steps: this.steps, tags: this.tags};
};

CukeParser.prototype.getCuke = function() {
    return this.cuke;
}

module.exports = CukeParser;
