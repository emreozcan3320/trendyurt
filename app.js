'use strict';

const app = require('express')(),
    config = require('./config/config');

//EXpress config
require('./config/express.config')(app);

//Mongoose config
require('./config/mongoose.config')(config);

app.listen(config.dev.port, () => {
    console.log("listening...");
});









// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require ('cors');
//
// var app = express();
//
// mongoose.connect('mongodb://localhost/haberon1');
//
// mongoose.Promise = global.Promise;
//
// // On Connection
// mongoose.connection.on('connected', function() {
//     console.log('Connected to database ');
// });
//
// // On Error
// mongoose.connection.on('error', function(err) {
//     console.log('Database error: ' + err);
// });
// //mongoose promises
// mongoose.Promise = global.Promise;
//
// app.use(cors());
//
// app.use(bodyParser.json());
//
//
// app.listen(3000,function(){
//   console.log("connected port 3000");
// });
