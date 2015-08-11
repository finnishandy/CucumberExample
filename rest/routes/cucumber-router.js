/**
 * Created by sakariruoho on 7/31/15.
 */
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/*
router.get('/:id',function(req,res){
    exec('cucumber-js --format=json',
        function (error, stdout, stderr) {
            res.json(JSON.parse(stdout));
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        }
    );
});
*/

/*Handling routes.*/
router.get('/', function(req, res){
    exec('cucumber-js --format=json',
        function (error, stdout, stderr) {
            var cucumber = JSON.parse(stdout);
            var pending = 0;
            var skipped = 0;
            var steps = 0;
            cucumber.forEach(function(feature) {
                feature.elements.forEach(function(element) {
                    element.steps.forEach(function(step) {
                        steps++;
                        switch (step.result.status) {
                            case "skipped":
                                skipped++;
                                break;
                            case "pending":
                                pending++;
                                break;
                            default:
                                "foo";
                        }

                    });
                })
            });
            //console.log(JSON.stringify(cucumber, null, '\t'));
            //console.log("skipped: " + skipped);

            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                res.render('index', {foo: cucumber, summary: {skipped: skipped, pending: pending, steps: steps} });
            }
        }
    );
});

module.exports = router;
