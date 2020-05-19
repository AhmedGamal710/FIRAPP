var mongoose = require('mongoose');

var joi = require("joi");
var opensource = mongoose.model("opensource", new mongoose.Schema({

    name:{
        type:String,
    } ,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }   ]
    



}))
function validateopensource(developers) {
    var Schema = {
   
       
        name: joi.string().min(2).max(15).required(),
        
   
   
   
    };
    return joi.validate(developers, Schema)
  }
  exports. validateopensource =   validateopensource;
  
exports.opensource=opensource;