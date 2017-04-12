"use strict";

let bodyparser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    cors = require('cors');

module.exports = (app) => {

    app.use(bodyparser.json());
    app.use(cors());

    //[*]Routes Configuration
     let student = require('../conponents/student/student.js');
    app.use('/student',student);

};
