"use strict";

let mongoose = require('mongoose');


module.exports = (config) => {
    var dbURI = config.dev.db;

    mongoose.connect(dbURI);

    mongoose.Promise = global.Promise;

    // On Connection
    mongoose.connection.on('connected', function() {
        console.log('Connected to database ');
    });
    // On Error
    mongoose.connection.on('error', function(err) {
        console.log('Database error: ' + err);
    });

    //disconnected
    mongoose.connection.on('disconnected', function(err) {
        console.log('Database disconnected');
    });
    //mongoose promises
    mongoose.Promise = global.Promise;
    //bring in your schemas $ models
    //require('./users');

};
