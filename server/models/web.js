var mongoose = require('mongoose');

var joi = require("joi");
var web = mongoose.model("web", new mongoose.Schema({

    name:{
        type:String,
    } ,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }   ]
    



}))
function validateweb(developers) {
    var Schema = {
   
       
        name: joi.string().min(2).max(15).required(),
        
   
   
   
    };
    return joi.validate(developers, Schema)
  }
  exports.validateweb =  validateweb;
  
exports.web=web;