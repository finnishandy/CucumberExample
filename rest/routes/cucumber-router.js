/**
 * Created by sakariruoho on 7/31/15.
 */
var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var CukeParser = require('../../src/cuke-parser.js');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/* Handling routes. */
router.get('/', function(req, res){
    var parser = new CukeParser();
    exec(parser.commandResolver(req),
        function (error, stdout, stderr) {
            parser.setCuke(JSON.parse(stdout));
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                parser.parseCukeJson();
                res.render('index', {cuke: parser.getCuke(), summary: parser.getSummary()});
                //console.log(JSON.stringify(parser.getCuke(), null, '\t'));
            }
        }
    );
});

module.exports = router;
