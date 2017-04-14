var mongoose = require('mongoose');


var superAdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    surname: {
        type: String,
        required: true
    },
    userName:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:Number
    },
    phoneNumber: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    recordDate: {
        type: Date,
        default: Date.now
    }

});

var superAdmin = module.exports = mongoose.model("superAdmin", superAdminSchema);
