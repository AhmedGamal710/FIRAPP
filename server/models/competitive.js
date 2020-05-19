var mongoose = require('mongoose');

var joi = require("joi");
var competitive = mongoose.model("competitive", new mongoose.Schema({

    name:{
        type:String,
    } ,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }   ]
    



}))
function validatecompetitive(developers) {
    var Schema = {
   
       
        name: joi.string().min(2).max(15).required(),
        
   
   
   
    };
    return joi.validate(developers, Schema)
  }
  exports.validatecompetitive =  validatecompetitive;
  
exports.competitive=competitive;