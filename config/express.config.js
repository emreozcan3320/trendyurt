"use strict";

let bodyparser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    cors = require('cors');

module.exports = (app) => {

    app.use(bodyparser.json());
    app.use(cors());

    //[*]Routes Configuration
    let main = require('../conponents/main/main');
    app.use('/', main);

    let students = require('../conponents/student/student.js');
    app.use('/students', students);

    let superAdmins = require('../conponents/superAdmin/superAdmin.js');
    app.use('/superAdmins', superAdmins);

};
