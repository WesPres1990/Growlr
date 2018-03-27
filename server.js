var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");



var Survey_ds = require("./models")["Survey_ds"];
Survey_ds.sync();
var Survey_hs = require("./models")["Survey_hs"];
Survey_hs.sync();
var Input_ds = require("./models")["Input_ds"];
Input_ds.sync();
var Input_hs = require("./models")["Input_hs"];
Input_hs.sync();

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false 
}));

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.get('/', function(req, res) {
    res.render("index");

});

app.get('/new-input-d', function(req, res) {
    res.render("new_input_d");

});

app.post('/new-input-d', function(req, res) {
    var body = req.body;
    console.log(body);

});

app.get('/new-input-h', function(req, res) {
    res.render("new_input_h");
});

    app.post('/new-input-h', function(req, res) {
        var body = req.body;
        console.log(body);

});

app.get('/new-survey-d', function(req, res) {
    res.render("new_survey_d");

});

app.post('/new-survey-d', function(req, res) {
    var body = req.body;
    console.log(body);

});

app.get('/new-survey-h', function(req, res) {
    res.render("new_survey_h");

});

app.post('/new-survey-h', function(req, res) {
    var body = req.body;
    console.log(body);
});



  

var port  = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("connected to", port);
});
           