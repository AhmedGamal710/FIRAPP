var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require('mongoose')
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

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});

var {user} = require('../models/user')
var {
  post
} = require("../models/post");

var {categories}=require("../models/category")
var {web,validateweb}=require("../models/web")
var {android,validateandroid}=require("../models/Applicationdevelopment")
var auth=require("../middleware/auth")
var {testing,validatetesting}=require("../models/Miscellaneousfields")
var {opensource,validateopensource}=require("../models/opensource")
var {competitive,validatecompetitive}=require("../models/competitive")
var {machine,validatemachine}=require("../models/machinelearning")
var {data,validatedata}=require("../models/datascience");
const { func } = require("joi");
  /**
 * @swagger
 * /xlarge/post/create/web:
 *  post:
 *    description: Use to create new post in web category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/web", auth,upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await web.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await web.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})



  /**
 * @swagger
 * /xlarge/post/create/Competitiveprogramming:
 *  post:
 *    description: Use to create new post in Competitive programming category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Competitiveprogramming", auth,upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await competitive.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await competitive.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})




  /**
 * @swagger
 * /xlarge/post/create/Opensource:
 *  post:
 *    description: Use to create new post in Open source category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Opensource", auth,upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await opensource.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await opensource.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})



  /**
 * @swagger
 * /xlarge/post/create/Applicationdevelopment:
 *  post:
 *    description: Use to create new post in Application development category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Applicationdevelopment", auth,upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await android.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await android.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})




  /**
 * @swagger
 * /xlarge/post/create/Machinelearning:
 *  post:
 *    description: Use to create new post in Machine learning category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Machinelearning",auth, upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await machine.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await machine.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})







  /**
 * @swagger
 * /xlarge/post/create/Datascience:
 *  post:
 *    description: Use to create new post in Data science category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Datascience",auth, upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await data.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await data.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})






  /**
 * @swagger
 * /xlarge/post/create/Miscellaneousfields:
 *  post:
 *    description: Use to create new post in Miscellaneous fields category
 *    parameters:
 *    -  name: "title"
 *       in: query
 *       description: "post title"
 *       required: true
 *       type: "string" 
 *    -  name: "content"
 *       in: query
 *       description: "post body"
 *       required: true
 *       type: "string"
 *    -  name: "category"
 *       in: query
 *       description: "id of sub category"
 *       required: true
 *       type: "string" 
 *    -  name: "createdby"
 *       in: query
 *       description: "user id "
 *       required: true
 *       type: "string"
 *    -  name: "img"
 *       in: query
 *       description: "post img"
 *       type: "string"
 *       schema:
 *         $ref: "#/definitions/post"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new post send in json format
 * 
 */

router.post("/create/Miscellaneousfields",auth, upload.single('img'), async (req, res) => {
  const { title, content, category, createdby } = req.body
  if(req.file){

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      img:result.secure_url
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await testing.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });

  }
  else{



    const newPost = new post({
      _id: mongoose.Types.ObjectId(),
      title: title,
      content: content,
      category: category,
      createdby: createdby,
      
    })
  
    resultt = await newPost.save()
    let user1 = await user.findOne({ _id: createdby })
    user1.post.push(newPost._id)
   let postid=await testing.findOne({_id:category});
   postid.post.push(newPost._id)
    await postid.save((err,data)=>{
  console.log("saved")
    })
    fresult = await user1.save((err, data) => {
      res.json({ resultt})
    });



  }
  
})













  /**
 * @swagger
 * /xlarge/post/delete/:id:
 *  delete:
 *    description: Use to make user delete his post
 *    parameters:
 *       name: userid
 *       description: "user id "
 *    responses:
 *      '200':
 *        description: post is deleted successfully
 * 
 */

router.delete("/delete/:id",auth,parseUrlencoded, function (req, res) {

  user.findByIdAndUpdate(
    req.body.userid, { $pull: { "post": req.params.id } }, { safe: true, upsert: true },
    function(err, data) {
        if (err) { console.log(err) }
       post.findByIdAndDelete(req.params.id, (err, user) => {
        })
      
        return res.status(200).json("done");
    });
})






  /**
 * @swagger
 * /xlarge/post/update/:id:
 *  post:
 *    description: Use to update post
 *    parameters:
 *      - name: title
 *        description: updated Title of post
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: content
 *        description: updated content of post
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: category
 *        description: updated category of this post 
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: post_id
 *        description: post id which will update
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this updated post send in json format
 * 
 */

router.post("/update/:id", auth,upload.single('img'), async (req, res) => {

  const {  title, content, category,img } = req.body
  if(req.file){

    const resultt = await cloudinary.v2.uploader.upload(req.file.path)

    let result = await post.findOneAndUpdate({ _id: req.params.id }, { title: title, content: content, category: category,img:resultt.secure_url})
    res.json({ result})
  }

else{

  let result = await post.findOneAndUpdate({ _id: req.params.id }, { title: title, content: content, category: category})
  res.json({ result})


}
})


  /**
 * @swagger
 * /xlarge/post/list:
 *  get:
 *    description: Use to retrieve All Posts  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all posts send in json format
 * 
 */


router.get("/list", async (req, res) => {
  let result = await post.find({isapproved:true}).populate({path:"likedBy , comments.commentator , createdby",model:"user"}
  // ,{
  //   path:"comments",
  //   populate:{
  //     path:"commentator",
  //     model:"user"
  //   }
  )

  res.json(result)


})

  /**
 * @swagger
 * /xlarge/post/list/:id:
 *  put:
 *    description: Use to retrieve a specific post with its id 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.put("/list/:id", async (req, res) => {

  
  let result = await post.findOneAndUpdate({ _id: req.params.id }, {$inc : {'views' : 1}}).populate(
    {path:"likedBy , comments.commentator , createdby",

  model:"user"

}).exec(function(err,data){

  if(err) console.log(err);

 else res.json(data)
  //this will log all of the users with each of their posts 
})
  
})




  /**
 * @swagger
 * /xlarge/post/list/web:
 *  get:
 *    description: Use to retrieve all posts in web development 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */







router.get("/list/web", async (req, res) => {
  let arr1=[];
let result = await web.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"web"

}]})
for(let i=0;i<result.length;i++){
  if(result[i].post.length != 0){

  arr1.push(result[i].post)
  }

}

res.json(arr1)
});



  /**
 * @swagger
 * /xlarge/post/list/Applicationdevelopment:
 *  get:
 *    description: Use to retrieve all posts in Application development
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Applicationdevelopment", async (req, res) => {
  let arr1=[];
let result = await android.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"android"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})


  /**
 * @swagger
 * /xlarge/post/list/Competitiveprogramming:
 *  get:
 *    description: Use to retrieve all posts in Competitive programming
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Competitiveprogramming", async (req, res) => {
  let arr1=[];
let result = await competitive.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"competitive"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})



  /**
 * @swagger
 * /xlarge/post/list/Miscellaneousfields:
 *  get:
 *    description: Use to retrieve all posts in Miscellaneous fields
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */



router.get("/list/Miscellaneousfields", async (req, res) => {
  let arr1=[];
let result = await testing.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"testing"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})

  /**
 * @swagger
 * /xlarge/post/list/Datascience:
 *  get:
 *    description: Use to retrieve all posts in Data science
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */



router.get("/list/Datascience", async (req, res) => {
  let arr1=[];
let result = await data.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"data"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})


  /**
 * @swagger
 * /xlarge/post/list/Machinelearning:
 *  get:
 *    description: Use to retrieve all posts in Machine learning
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Machinelearning", async (req, res) => {
  let arr1=[];
let result = await machine.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"machine"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})


  /**
 * @swagger
 * /xlarge/post/list/Opensource:
 *  get:
 *    description: Use to retrieve all posts in Open source
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */



router.get("/list/Opensource", async (req, res) => {
  let arr1=[];
let result = await opensource.find({}).populate({path:"post",
   populate: [{path:"likedBy , comments.commentator , createdby",

  model:"user"

},{path:"category",

model:"opensource"

}]})
for(let i=0;i<result.length;i++){
if(result[i].post.length != 0){
  arr1.push(result[i].post)


}
}
res.json(arr1)
})






  /**
 * @swagger
 * /xlarge/post/list/web/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in web development with its id , the id of category in url
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/web/:id", async (req, res) => {
  let result = await post.find({category:req.params.id,isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })
  


})



  /**
 * @swagger
 * /xlarge/post/list/Competitiveprogramming/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Competitive programming with its id , the id of category in url
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Competitiveprogramming/:id", async (req, res) => {
  let result = await post.find({category:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  
}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })


})






  /**
 * @swagger
 * /xlarge/post/list/Opensource/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Open source with its id , the id of category in url
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Opensource/:id", async (req, res) => {
  let result = await post.find({category:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
 

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })
  


})



  /**
 * @swagger
 * /xlarge/post/list/Applicationdevelopment/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Application development with its id 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Applicationdevelopment/:id", async (req, res) => {
  let result = await post.find({category:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  
}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })


})



  /**
 * @swagger
 * /xlarge/post/list/Machinelearning/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Machine learning with its id 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Machinelearning/:id", async (req, res) => {
  let result = await post.find({category:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })
  


})


  /**
 * @swagger
 * /xlarge/post/list/Datascience/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Data science with its id 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Datascience/:id", async (req, res) => {
  let result = await post.find({_id:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })


})



  /**
 * @swagger
 * /xlarge/post/list/Miscellaneousfields/:id:
 *  get:
 *    description: Use to retrieve a specific category posts in Miscellaneous fields with its id 
 *    responses:
 *      '200':
 *        description: A successful request with the data of the post send in json format
 *      '400':
 *        description: error in retrieving the post
 * 
 */

router.get("/list/Miscellaneousfields/:id", async (req, res) => {
  let result = await post.find({category:req.params.id, isapproved:true}, function(data,err){
 if(err){
   res.status(400).json(err)
 }
else{
  res.json(data)


}
  }).populate({
    path:"likedBy , comments.commentator , createdby",
    model:"user"
  

}).exec(function(err,data){
  
    if(err) console.log(err);
    //this will log all of the users with each of their posts 
  })


})

















  /**
 * @swagger
 * /xlarge/post/like/:id:
 *  put:
 *    description: Use to Add like with the id of the post in url
 *    parameters:
 *      - name: id
 *        description: user id 
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request 
  *      '400':
 *        description:  successful false + message
 * 
 */










router.put('/like/:id', auth,parseUrlencoded,(req, res) => {
  // Check if id was passed provided in request body
  if (!req.body.id) {
    res.json({ success: false, message: 'No id was provided.' }); // Return error message
  } else {
    // Search the database with id
    post.findOne({ _id: req.params.id }, (err, post) => {
      // Check if error was encountered
      if (err) {
        res.json({ success: false, message: 'Invalid post id' }); // Return error message
      } else {
        // Check if id matched the id of a blog post in the database
        if (!post) {
          res.json({ success: false, message: 'That post was not found.' }); // Return error message
        } else {
          // Get data from user that is signed in
          user.findOne({ _id: req.body.id }, (err, user) => {
            // Check if error was found
            if (err) {
              res.json({ success: false, message: 'Something went wrong.' }); // Return error message
            } else {
              // Check if id of user in session was found in the database
              if (!user) {
                res.json({ success: false, message: 'Could not authenticate user.' }); // Return error message
              } else {
                // Check if user who liked post is the same user that originally created the blog post
                if (user._id === post.createdby) {
                  res.json({ success: false, messagse: 'Cannot like your own post.' }); // Return error message
                } else {
                  // Check if the user who liked the post has already liked the blog post before
                  if (post.likedBy.includes(user._id)) {
                    res.json({ success: false, message: 'You already liked this post.' }); // Return error message
                  } else {
                  
                      post.likes++; // Incriment likes
                      post.likedBy.push(user._id); // Add liker's username into array of likedBy
                      // Save blog post
                      post.save((err) => {
                        if (err) {
                          res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                        } else {
                          res.json({ success: true, message: 'post liked!' }); // Return success message
                        }
                      });
                    
                  }
                }
              }
            }
          });
        }
      }
    });
  }
});





  /**
 * @swagger
 * /xlarge/post/comment/:id:
 *  post:
 *    description: Use to Add comments with the id of the post in url
 *    parameters:
 *      - name: id
 *        description: user id 
 *        required: true
  *      - name: comment
 *        description: comment
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request 
  *      '400':
 *        description:  successful false + message
 * 
 */



router.post('/comment/:id',auth, parseUrlencoded,(req, res) => {
  // Check if comment was provided in request body
  if (!req.body.comment) {
    res.json({ success: false, message: 'No comment provided' }); // Return error message
  } else {
    // Check if id was provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided' }); // Return error message
    } else {
      // Use id to search for blog post in database
      post.findOne({ _id: req.params.id }, (err, post) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid post id' }); // Return error message
        } else {
          // Check if id matched the id of any blog post in the database
          if (!post) {
            res.json({ success: false, message: 'post not found.' }); // Return error message
          } else {
            // Grab data of user that is logged in
            user.findOne({ _id: req.body.id }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: 'Something went wrong' }); // Return error message
              } else {
                // Check if user was found in the database
                if (!user) {
                  res.json({ success: false, message: 'User not found.' }); // Return error message
                } else {
                  // Add the new comment to the blog post's array
                  post.comments.push({
                    comment: req.body.comment, // Comment field
                    commentator: user._id // Person who commented
                  });
                  post.commentsnum++;
                  // Save blog post
                  post.save((err) => {
                    // Check if error was found
                    if (err) {
                      res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                    } else {
                      res.json({ success: true, message: 'Comment saved' }); // Return success message
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  }
});










module.exports = router;