const router = require('express').Router();
const config = require('../../config/config');
const mongoose = require('mongoose');
const students = require('./student.model');

router.get('/',(req,res)=>{
  students.find()
        .then(function(student) {
            res.json(student);
        })
        .catch(function(err) {
            console.log(err);
        });
});

 router.post('/',(req,res)=>{


  newStudent = new students({
        name: req.body.name,
        surname: req.body.surname,
        tcNo: req.body.tcNo,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        birthday: req.body.birthday,
        birtPlace: req.body.birtPlace,
        address: req.body.address,
        photo: req.body.photo,
        recordDate: req.body.recordDate,
        stuation: req.body.stuation,
        schoolInfo:[{
          university: req.body.schoolInfo.university,
          faculty: req.body.schoolInfo.faculty,
          department: req.body.schoolInfo.department,
          grade: req.body.schoolInfo.grade,
        }],
        parentsInfo:[{
          motherName:req.body.parentsInfo.motherName,
          motherPhoneNumber:req.body.parentsInfo.motherPhoneNumber,
          fatherName:req.body.parentsInfo.fatherName,
          fatherPhoneNumber:req.body.parentsInfo.fatherPhoneNumber
        }],
        documents:[{
          nCuzdani:Boolean,
          ikametgah:Boolean,
          fotograf:Boolean,
          saglikRaporu:Boolean,
          ogrenciBelgesi:Boolean,
          adliSicilKaydi:Boolean,
          sozlesme:Boolean,
          senet:Boolean,
          zimmetFormu:Boolean
        }]
    });
   //res.json(newStudent);
    students.create(newStudent)
        .then(function(student) {
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
  students.findById(req.params.id, function(err, student) {
        if (err) {
            res.status(500).send(err);
        } else {
            student.name = req.body.name || student.name;
            student.surname = req.body.surname || student.surname;
            student.tcNo = req.body.tcNo || student.tcNo;
            student.phoneNumber = req.body.phoneNumber || student.phoneNumber;
            student.gender = req.body.gender || student.gender;
            student.birthday = req.body.birthday || student.birthday;
            student.birtPlace = req.body.birtPlace || student.birtPlace;
            student.address = req.body.address || student.address;
            student.photo = req.body.photo || student.photo;
            student.recordDate = req.body.recordDate || student.recordDate;
            student.stuation = req.body.stuation || student.stuation;
            student.schoolInfo = req.body.schoolInfo || student.schoolInfo;
              student.schoolInfo.university = req.body.schoolInfo.university || student.schoolInfo.university;
              student.schoolInfo.faculty = req.body.schoolInfo.faculty || student.schoolInfo.faculty;
              student.schoolInfo.department = req.body.schoolInfo.department || student.schoolInfo.department;
              student.schoolInfo.grade = req.body.schoolInfo.grade || student.schoolInfo.grade;
            student.parentsInfo = req.body.parentsInfo || student.parentsInfo;
              student.parentsInfo.motherName = req.body.parentsInfo.motherName || student.parentsInfo.motherName;
              student.parentsInfo.motherPhoneNumber = req.body.parentsInfo.motherPhoneNumber || student.parentsInfo.motherPhoneNumber;
              student.parentsInfo.fatherName = req.body.parentsInfo.fatherName || student.parentsInfo.fatherName;
              student.parentsInfo.fatherPhoneNumber = req.body.parentsInfo.fatherPhoneNumber || student.parentsInfo.fatherPhoneNumber;
            student.documents = req.body.documents || student.documents;
              student.documents.nCuzdani = req.body.documents.nCuzdani || student.documents.nCuzdani;
              student.documents.ikametgah = req.body.documents.ikametgah || student.documents.ikametgah;
              student.documents.fotograf = req.body.documents.fotograf || student.documents.fotograf;
              student.documents.saglikRaporu = req.body.documents.saglikRaporu || student.documents.saglikRaporu;
              student.documents.ogrenciBelgesi = req.body.documents.ogrenciBelgesi || student.documents.ogrenciBelgesi;
              student.documents.adliSicilKaydi = req.body.documents.adliSicilKaydi || student.documents.adliSicilKaydi;
              student.documents.sozlesme = req.body.documents.sozlesme || student.documents.sozlesme;
              student.documents.senet = req.body.documents.senet || student.documents.senet;
              student.documents.zimmetFormu = req.body.documents.zimmetFormu || student.documents.zimmetFormu;


            student.save(function(err, student) {
                if (err) {
                    res.status(500).send(err);
                }
                res.send(student);
            });
        }
    });
});

router.delete('/:id',(req,res)=>{
  students.findByIdAndRemove(req.params.id, function(err, student) {
        if (err) {
            res.status(500).send(err);
        } else {
            var response = {
                message: "öğrenci successfully deleted",
                id: student._id
            };
            res.send(response);

        }
    });
});

module.exports = router;
