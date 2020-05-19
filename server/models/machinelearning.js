var mongoose = require('mongoose');

var joi = require("joi");
var machine = mongoose.model("machine", new mongoose.Schema({

    name:{
        type:String,
    } ,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }   ]
    



}))
function validatemachine(developers) {
    var Schema = {
   
       
        name: joi.string().min(2).max(15).required(),
        
   
   
   
    };
    return joi.validate(developers, Schema)
  }
  exports.validatemachine =  validatemachine;
  
exports.machine=machine;