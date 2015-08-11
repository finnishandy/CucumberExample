/*Define dependencies.*/

var express=require("express");
var cukeRouter = require('./rest/routes/cucumber-router');
var Handlebars = require('handlebars');
var expressHbs = require('express-handlebars');
var app=express();
global.appRoot = __dirname;

var hbs = expressHbs.create({
    // Specify helpers which are only registered on this instance.
    defaultLayout: 'main',
    helpers: {
        jiraLinking: function (message, options) {
            var firstIdx = message.indexOf('[');
            if (firstIdx != -1) {
                var secondIdx = message.indexOf(']');
                var id = message.substring(firstIdx + 1, secondIdx);
                var link = "https://jira.tribalddb.co.uk/browse/" + id;
                message = new Handlebars.SafeString("<a href=\"" + link + "\">[" + id + "]" + message.substring(secondIdx + 1, message.length) + "</a>");
            }
            return message;
        },
        bar: function () { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/cuke', cukeRouter);


/*Run the server.*/
app.listen(8000,function(){
    console.log("Working on port 1337");
});