var mongoose = require('mongoose');

var joi = require("joi");
var categories = mongoose.model("categories", new mongoose.Schema({

    name:{
        type:String,
    } ,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
      }   ]
    



}))
function validatecategory(categoriess) {
    var Schema = {
   
       
        name: joi.string().min(2).max(15).required(),
        
   
   
   
    };
    return joi.validate(categoriess, Schema)
  }
  exports.validatecategory =  validatecategory;
  
exports.categories=categories;