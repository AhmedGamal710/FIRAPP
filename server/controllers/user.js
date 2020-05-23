var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var config = require("config");
var bcrypt = require("bcryptjs");
const path = require('path');
var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'ddo2kzwbh', 
  api_key: '431946565525743', 
  api_secret: '8gmOkgnY8RHDLRuAMf52CufXAOc' 
});
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '/upload/'));
  },
  filename: function(req, file, cb) {
    cb(null,  file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
var {
    validateuser,
    user
  } = require("../models/user");
 var{post}=require("../models/post")

  /**
 * @swagger
 * /xlarge/user/signup:
 *  post:
 *    description: Use to sign up the users
 *    parameters:
 *    -  in: body
 *       name: body
 *       description: "create new user"
 *       schema:
 *         $ref: "#/definitions/user"
 *    responses:
 *      '400':
 *        description: something went wrong || user already registered
 *      '200':
 *        description: A successful request with the data of this new user send in json format
 * 
 */

  router.post("/signup",  upload.single('img'), async (req, res, next) => {
    var {
      error
    } = validateuser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    let userr = await user.findOne({
      email: req.body.email
    });
    if (userr) {
      return res.status(400).send("user already registered.");
    }
    if(req.file){


      const result = await cloudinary.v2.uploader.upload(req.file.path)

      userr = new user({
          name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        Age: req.body.Age,
        phone: req.body.phone,
        country: req.body.country,
        img: result.secure_url,
        About:req.body.About
      });
    
      var salt = await bcrypt.genSalt(10);
      userr.password = await bcrypt.hash(userr.password, salt);
      await userr.save();
    
      
      res.status(200).json({
          userr
      });



    }
    else{


      userr = new user({
          name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        Age: req.body.Age,
        phone: req.body.phone,
        country: req.body.country,
        About:req.body.About
      });
    
      var salt = await bcrypt.genSalt(10);
      userr.password = await bcrypt.hash(userr.password, salt);
      await userr.save();
    
      
      res.status(200).json({
          userr
      });

      
    }

  });

/**
 * @swagger
 * /xlarge/user/account/:id:
 *  get:
 *    description: Use to find an user account with his ID (using after login)
 *    parameters:
 *    -  name: user id sent in the url
 *       in: path
 *       description: "user id send in the url"
 *       required: true
 *       type: "integer"
 *       format: "int64"
 *    responses:
 *      '200':
 *        description: A successful request with the data of user send in json format
 */
  router.get("/account/:id", async (req, res) => {

    let user_account = await user.findOne({
      _id: req.params.id
    });
  
    res.json(user_account)
  });
  



  /**
 * @swagger
 * /xlarge/user/update/:id:
 *  post:
 *    description: Use to update user details
 *    parameters:
 *      - name: name
 *        description: updated name of user
 *        schema:
 *          type: string
 *          format: string
 *      - name: Age
 *        description: updated user age
 *        schema:
 *          type: string
 *          format: string
 *      - name: About
 *        description: updated user about summary
 *        schema:
 *          type: string
 *          format: string
 *      - name: country
 *        description: update user country
 *        schema:
 *          type: string
 *          format: string
 *      - name: phone
 *        description: update user phone
 *        schema:
 *          type: string
 *          format: string
 *      - name: img
 *        description: update user img
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this updated post send in json format
 * 
 */

router.post("/update/:id", upload.single('img'), async (req, res) => {

  const {  name, phone, country,img,Age,About } = req.body
  if(req.file){

    const resultt = await cloudinary.v2.uploader.upload(req.file.path)

    let result = await user.findOneAndUpdate({ _id: req.params.id }, {  name:  name, phone: phone, country: country,img:resultt.secure_url ,Age:Age,About:About})
    res.json("done")
  }

else{

  let result = await user.findOneAndUpdate({ _id: req.params.id }, {  name:  name, phone: phone, country: country,Age:Age,About:About})
  res.json("done")


}
})


  /**
 * @swagger
 * /xlarge/user/comment/delete/:id:
 *  delete:
 *    description: Used to make user delete his comment, the id for the comment in url
 *    parameters:
 *      - name: postid
 *        description: id for the post
 *        required: true
 *      - name: userid
 *        description: id for the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */

router.delete("/comment/delete/:id",parseUrlencoded,async(req,res)=>{
 
  post.findByIdAndUpdate(
    req.body.postid, { $pull: { "comments": {commentator: req.body.userid,_id:req.params.id } } }, { safe: true, upsert: true },
    function(err, data) {
        if (err) { console.log(err) }
        return res.status(200).json("done");
    });

 
});



  /**
 * @swagger
* /xlarge/user/comment/update/:id:
 *  post:
 *    description: Use to update  a specific comment in post , putting the id of the comment in the url
 *    parameters:
 *      - name: comment
 *        description: the new comment
 *        required: true
 *    responses:
 *      '200':
 *        description: comment is updated successfully 
 */




router.post("/comment/update/:id",parseUrlencoded,async(req,res)=>{


  post.update(
    { "comments._id": req.params.id },
    {'$set': {'comments.$.comment':req.body.comment }}
    ,
    function(err,data) {
      if(err){
        console.log(err)
      }
res.json("done")
    }
);
})

  /**
 * @swagger
 * /xlarge/user/list/posts/:id:
 *  get:
 *    description: Used to retrieve the posts for the user 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the posts send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/posts/:id",function(req,res){

  post.find({createdby:req.params.id, isapproved:true},function(err,data){
    if(err){
      res.json(err)
    }
    else{
      res.json(data)
    }
  }).populate({
    path:"likedBy , comments.commentator",
    model:"user"
  

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })
  
  
  })


/**   
* @swagger
*definitions:
*  user:
*    type: "object"
*    required:
*    - "name"
*    - "email"
*    - "password"
*    - "phone"
*    - "country"
*    - "Age"
*    properties:
*      name:
*        type: "string"
*      email:
*        type: "string"
*      password:
*        type: "string"
*      img:
*        type: "string"
*      phone:
*        type: "string"
*      country:
*        type: "string"
*      Age:
*        type: "string"
*      About:
*        type: "string"
*    xml:
*      name: "user"
*  admin:
*    type: "object"
*    required:
*    - "email"
*    - "password"
*    properties:
*      email:
*        type: "string"
*      password:
*        type: "string"
*    xml:
*      name: "admin"
*  post:
*    type: "object"
*    required:
*    - "content"
*    - "category"
*    - "title"
*    - "img"
*    properties:
*      title:
*        type: "string"
*      createdat:
*        type: "Date"
*      content:
*        type: "string"
*      category:
*        type: "string"
*      createdby:
*        type: "object"
*      img:
*        type: "string"
*      likes:
*        type: "number"
*      likedBy:
*        type: "array"
*      comments:
*        type: "array"
*    xml:
*      name: "post"
*  categories:
*    type: "object"
*    required:
*    - "name"
*    - "posts"
*    properties:
*      name:
*        type: "string"
*      post:
*        type: "array"
*    xml:
*      name: "categories"
*/







  module.exports = router;
