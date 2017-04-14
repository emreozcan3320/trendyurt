'use strict';

const app = require('express')(),
    config = require('./config/config');

// const superAdmins = require('./conponents/superAdmin/superAdmin.model');

//EXpress config
require('./config/express.config')(app);

//Mongoose config
require('./config/mongoose.config')(config);



app.listen(config.dev.port, () => {
    console.log("listening...");
});
