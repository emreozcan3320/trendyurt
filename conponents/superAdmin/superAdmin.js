const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require('mongoose');
const superAdmins = require('./superAdmin.model');

router.get('/',(req,res)=>{
  superAdmins.find()
        .then(function(superAdmin) {
            res.json(superAdmin);
        })
        .catch(function(err) {
            console.log(err);
        });
});

 router.post('/',(req,res)=>{

  newsuperAdmin = new superAdmins({
        name: req.body.name,
        surname: req.body.surname,
        userName: req.body.userName,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        photo: req.body.photo,
        recordDate: req.body.recordDate
    });
   //res.json(newsuperAdmin);
    superAdmins.create(newsuperAdmin)
        .then(function(superAdmin) {
            res.json({
                success: true,
                msg: 'registered'
            });
        })
        .catch(function(err) {
            res.json({
                success: false,
                msg: 'Failed to register ',
                err: err
            });
        });
 });

router.put('/:id',(req,res)=>{
  superAdmins.findById(req.params.id, function(err, superAdmin) {
        if (err) {
            res.status(500).send(err);
        } else {
          //res.json(req.body);
            superAdmin.name = req.body.name || superAdmin.name;
            superAdmin.surname = req.body.surname || superAdmin.surname;
            superAdmin.userName = req.body.userName || superAdmin.userName;
            superAdmin.password = req.body.password || superAdmin.password;
            superAdmin.phoneNumber = req.body.phoneNumber || superAdmin.phoneNumber;
            superAdmin.photo = req.body.photo || superAdmin.photo;
            superAdmin.recordDate = req.body.recordDate || superAdmin.recordDate;



            superAdmin.save(function(err, superAdmin) {
                if (err) {
                    res.status(500).send(err);
                }
                res.send(superAdmin);
            });
        }
    });
});

router.delete('/:id',(req,res)=>{
  superAdmins.findByIdAndRemove(req.params.id, function(err, superAdmin) {
        if (err) {
            res.status(500).send(err);
        } else {
            var response = {
                message: "superAdmin successfully deleted",
                id: superAdmin._id
            };
            res.send(response);

        }
    });
});

module.exports = router;
