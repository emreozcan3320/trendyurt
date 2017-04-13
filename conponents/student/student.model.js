var mongoose = require('mongoose');

var schoolInfo = mongoose.Schema(
  {
      university: {
          type: String,
          required: true
      },
      faculty: {
          type: String,
          required: true
      },
      department: {
          type: String,
          required: true
      },
      grade: {
          type: String,
          required: true
      }
  }
);

var parentsInfo = mongoose.Schema({
    motherName: String,
    motherPhoneNumber:Number,
    fatherName: String,
    fatherPhoneNumber:Number
});

var documents = mongoose.Schema({
    nCuzdani: Boolean,
    ikametgah: Boolean,
    fotograf: Boolean,
    saglikRaporu: Boolean,
    ogrenciBelgesi: Boolean,
    adliSicilKaydi: Boolean,
    sozlesme: Boolean,
    senet: Boolean,
    zimmetFormu: Boolean
});

var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    surname: {
        type: String,
        required: true
    },
    tcNo: {
        type: Number,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    birtPlace: {
        type: String,
        required: true
    },
    address: {
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
    },
    stuation: Boolean,
    schoolInfo: [schoolInfo],
    parentsInfo: [parentsInfo],
    documents: [documents]

});

var student = module.exports = mongoose.model("student", studentSchema);
