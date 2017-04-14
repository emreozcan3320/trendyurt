const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require('mongoose');
const superAdmins = require( '../superAdmin/superAdmin.model.js');


router.post("/login",(req,res)=>{

  let username = req.body.username;
  let password = req.body.password;

  superAdmins.find({ userName: username }, function(err, user) {
  if (err){
    res.status(500).send(err);
  }
  // if(!user){
  //   res.status(500).send("username or password wrong");
  // }
  else{
    if(user.length<1){
      res.status(404).send("username or password wrong");
    }else
     if(username==user[0].userName && password == user[0].password){
      res.status(200).send("you are loged in :D");
    }

  }

});


});

module.exports = router;
