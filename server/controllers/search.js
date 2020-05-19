var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();


var jwt = require("jsonwebtoken");
var config = require("config");
const multer = require("multer");
const path = require("path");
var bcrypt = require("bcryptjs");
var {
  
  post
  } = require("../models/post");
  var {
    
    user
    } = require("../models/user")
    var {categories}=require("../models/category")


// /**
//  * @swagger
//  * /xlarge/search/category/:categorey:
//  *  get:
//  *    description: Use to find a specific category posts
//  *    parameters:
//  *    -  name: name of category
//  *       in: path
//  *       description: "category name send in the url"
//  *       required: true
//  *       type: "string"
//  *    responses:
//  *      '400':
//  *        description: category not found
//  *      '200':
//  *        description: A successful request with the data of category posts send in json format
//  */


    
  router.get("/category/:categorey",async(req,resp)=>{
     
    categories.find({name:req.params.categorey},function(err,data){
      
     if(data.length!=0){
       console.log(data[0]._id)
   post.find({category:data[0]._id},(err,data)=>{
    resp.status(200).json(data);

   }
    
    ).populate("category").exec(function(err,data){
      if(err) console.log(err);
      //this will log all of the users with each of their posts 
    })
    
    
    }
     else
     resp.status(400).send("Not found");
   
    })


  });


/**
 * @swagger
 * /xlarge/search/name/:name:
 *  get:
 *    description: Use to find posts to a specific user posts
 *    parameters:
 *    -  name: name of user
 *       in: path
 *       description: "user name send in the url"
 *       required: true
 *       type: "string"
 *    responses:
 *      '400':
 *        description: user not found
 *      '200':
 *        description: A successful request with the data of posts send in json format
 */


  router.get("/name/:name",async(req,resp)=>{
    var name=req.params.name;
     
 await   user.find({"name": {"$regex": name}},function(err,data){
     if(data.length!=0){
console.log(data[0]._id)
post.find({"createdby":data[0]._id},function(err,data){



  resp.json(data);

}).populate({
  path:"likedBy , comments.commentator",
  model:"user"


}).exec(function(err,data){

  if(err) console.log(err);
  //this will log all of the users with each of their posts 
})





     }
   
     else{

      resp.send("Not found");

     }
   
    })


  })
  




  module.exports=router