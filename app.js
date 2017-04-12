var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require ('cors');

var app = express();

mongoose.connect('mongodb://localhost/haberon1');

mongoose.Promise = global.Promise;

// On Connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database ');
});

// On Error
mongoose.connection.on('error', function(err) {
    console.log('Database error: ' + err);
});
//mongoose promises
mongoose.Promise = global.Promise;

app.use(cors());

app.use(bodyParser.json());


app.listen(3000,function(){
  console.log("connected port 3000");
});
