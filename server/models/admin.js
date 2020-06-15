var mongoose = require('mongoose');

var joi = require("joi");

var admin = mongoose.model("admin", new mongoose.Schema({
    name: {
    type: String,
    required: true,
    max: 25

  },
  email: {
    type: String,
    required: true,
    unique: true



  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
  ,
  img: {
    type: String,
    default:"https://res.cloudinary.com/ddo2kzwbh/image/upload/v1589435461/default_byzopq.jpg"
  },
  owner:{
    type:Boolean,
    default:false
  }
}));


function validateadmin(admin) {
  var Schema = {
    name: joi.string().min(5).max(25).required(),
    password: joi.string().min(6).required(),
    email: joi.string().max(255).email().required(),


  };
  return joi.validate(admin, Schema)
}

exports.validateadmin = validateadmin;
exports.admin = admin;
var mongoose = require('mongoose');

var joi = require("joi");

var admin = mongoose.model("admin", new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true



  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
}));


function validateadmin(admin) {
  var Schema = {
    password: joi.string().min(6).required(),
    email: joi.string().max(255).email().required(),


  };
  return joi.validate(admin, Schema)
}

exports.validateadmin = validateadmin;
exports.admin = admin;
