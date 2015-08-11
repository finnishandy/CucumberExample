/**
 * Created by sakariruoho on 7/31/15.
 */
var exec = require('child_process').exec,
    child;

child = exec('cucumber-js --format=json',
    function (error, stdout, stderr) {
        var cukeJson = stdout;
        console.log('cuke: ' + cukeJson);
        //console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
);