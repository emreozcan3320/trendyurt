const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require('mongoose');

router.get('/',(req,res)=>{
  res.send("hello student");
});

module.exports = router;
