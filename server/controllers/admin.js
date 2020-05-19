var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

var {
  validateadmin,
  admin
} = require("../models/admin");
var {
  validateuser,
  user
} = require("../models/user");

var {web,validateweb}=require("../models/web")
var {android,validateandroid}=require("../models/Applicationdevelopment")
var {post}=require("../models/post")
var {testing,validatetesting}=require("../models/Miscellaneousfields")
var {opensource,validateopensource}=require("../models/opensource")
var {competitive,validatecompetitive}=require("../models/competitive")
var {machine,validatemachine}=require("../models/machinelearning")
var {data,validatedata}=require("../models/datascience")







  /**
 * @swagger
 * /xlarge/admin/delete/user/:id:
 *  delete:
 *    description: Use to delete user
 *    responses:
 *      '200':
 *        description: user is deleted successfully
 * 
 */



router.delete("/delete/user/:id", function (req, resp) {

  mongoose.model("user").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("user deleted")
})


  /**
 * @swagger
 * /xlarge/admin/delete/post/:id:
 *  delete:
 *    description: Use to delete post
 *    responses:
 *      '200':
 *        description: post is deleted successfully
 * 
 */


router.delete("/delete/post/:id", function (req, resp) {

  mongoose.model("post").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("post deleted")
})

  /**
 * @swagger
 * /xlarge/admin/add/admin:
 *  post:
 *    description: Use to Add new Admin
 *    parameters:
 *    -  in: body
 *       name: body
 *       description: "Add new Admin"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/admin"
 *    responses:
 *      '200':
 *        description: A successful request with the data of this new Admin send in json format
 * 
 */


router.post("/add/admin", parseUrlencoded, async (req, res) => {
  var {
    error
  } = validateadmin(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_admin = new admin({
    password: req.body.password,
    email: req.body.email,

  });
  var salt = await bcrypt.genSalt(5);
  new_admin.password = await bcrypt.hash(new_admin.password, salt);
  await new_admin.save();
  res.json(new_admin);
});

  /**
 * @swagger
 * /xlarge/admin/account/:id:
 *  get:
 *    description: Use to find Admin Account 
 *    responses:
 *      '200':
 *        description: A successful request with the data of  Admin send in json format
 * 
 */

router.get("/account/:id", async (req, res) => {

  let adminspec = await admin.findOne({
    _id: req.params.id
  });

  res.json(adminspec)
});




  /**
 * @swagger
 * /xlarge/admin/user/list:
 *  get:
 *    description: Use to retrieve All Users  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all users send in json format
 * 
 */


router.get("/user/list", async (req, res) => {
  let result = await user.find({});
  res.json(result)





});


  /**
 * @swagger
 * /xlarge/admin/add/category/web:
 *  post:
 *    description: Use to add category in web development
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/web", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validateweb(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new web({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})

  /**
 * @swagger
 * /xlarge/admin/add/category/Applicationdevelopment:
 *  post:
 *    description: Use to add category in Application development development
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Applicationdevelopment", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validateandroid(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new android({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})


  /**
 * @swagger
 * /xlarge/admin/add/category/Miscellaneousfields:
 *  post:
 *    description: Use to add category in Miscellaneous fields development
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Miscellaneousfields", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validatetesting(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new testing({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})



  /**
 * @swagger
 * /xlarge/admin/add/category/Competitiveprogramming:
 *  post:
 *    description: Use to add category in Competitive programming development
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Competitiveprogramming", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validatecompetitive(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new competitive({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})



  /**
 * @swagger
 * /xlarge/admin/add/category/Datascience:
 *  post:
 *    description: Use to add category in Data science
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Datascience", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validatedata(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new data({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})


  /**
 * @swagger
 * /xlarge/admin/add/category/Machinelearning:
 *  post:
 *    description: Use to add category in Machine learning
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Machinelearning", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validatemachine(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new machine({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})





  /**
 * @swagger
 * /xlarge/admin/add/category/Opensource:
 *  post:
 *    description: Use to add category in Open source
 *    parameters:
 *      - name: name
 *        description: name of category
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful request with the data of this category send in json format
 * 
 */

router.post("/add/category/Opensource", parseUrlencoded,async(req,res)=>{

  var {
    error
  } = validateopensource(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let new_category = new opensource({

    name: req.body.name,

  });

  await new_category.save();
  res.json(new_category);
})











 /**
 * @swagger
 * /xlarge/admin/categories/web:
 *  get:
 *    description: Use to retrieve All web categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/web",async(req,res)=>{
  let result = await web.find({});
  res.json(result)


});


 /**
 * @swagger
 * /xlarge/admin/categories/Applicationdevelopment:
 *  get:
 *    description: Use to retrieve All Application development categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Applicationdevelopment",async(req,res)=>{
  let result = await android.find({});
  res.json(result)


});



 /**
 * @swagger
 * /xlarge/admin/categories/Miscellaneousfields:
 *  get:
 *    description: Use to retrieve All Miscellaneous fields categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Miscellaneousfields",async(req,res)=>{
  let result = await testing.find({});
  res.json(result)


});


 /**
 * @swagger
 * /xlarge/admin/categories/Competitiveprogramming:
 *  get:
 *    description: Use to retrieve All Competitive programming categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Competitiveprogramming",async(req,res)=>{
  let result = await competitive.find({});
  res.json(result)


});




 /**
 * @swagger
 * /xlarge/admin/categories/Datascience:
 *  get:
 *    description: Use to retrieve All Data science categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Datascience",async(req,res)=>{
  let result = await data.find({});
  res.json(result)


});



 /**
 * @swagger
 * /xlarge/admin/categories/Machinelearning:
 *  get:
 *    description: Use to retrieve All Machine learning categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Machinelearning",async(req,res)=>{
  let result = await machine.find({});
  res.json(result)


});


 /**
 * @swagger
 * /xlarge/admin/categories/Opensource:
 *  get:
 *    description: Use to retrieve All Open source categories  
 *    responses:
 *      '200':
 *        description: A successful request with the data of all categories send in json format
 * 
 */

router.get("/categories/Opensource",async(req,res)=>{
  let result = await opensource.find({});
  res.json(result)


});













  /**
 * @swagger
 * /xlarge/admin/delete/category/web/:id:
 *  delete:
 *    description: Use to delete web category
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/web/:id", function (req, resp) {

  mongoose.model("web").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("web category deleted")
})



  /**
 * @swagger
 * /xlarge/admin/delete/category/Applicationdevelopment/:id:
 *  delete:
 *    description: Use to delete Application development category
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Applicationdevelopment/:id", function (req, resp) {

  mongoose.model("android").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("android category deleted")
})


  /**
 * @swagger
 * /xlarge/admin/delete/category/Miscellaneousfields/:id:
 *  delete:
 *    description: Use to delete Miscellaneous fields category
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Miscellaneousfields/:id", function (req, resp) {

  mongoose.model("testing").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("Miscellaneous fields category deleted")
})


  /**
 * @swagger
 * /xlarge/admin/delete/category/Competitiveprogramming/:id:
 *  delete:
 *    description: Use to delete Competitive programming category
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Competitiveprogramming/:id", function (req, resp) {

  mongoose.model("competitive").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("Competitive programming category deleted")
})



  /**
 * @swagger
 * /xlarge/admin/delete/category/Datascience/:id:
 *  delete:
 *    description: Use to delete  Data science
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Datascience/:id", function (req, resp) {

  mongoose.model("data").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("Data  Data science deleted")
})


  /**
 * @swagger
 * /xlarge/admin/delete/category/Machinelearning/:id:
 *  delete:
 *    description: Use to delete  Machine learning
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Machinelearning/:id", function (req, resp) {

  mongoose.model("machine").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("Data Machine learning deleted")
})



  /**
 * @swagger
 * /xlarge/admin/delete/category/Opensource/:id:
 *  delete:
 *    description: Use to delete  Open source
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */


router.delete("/delete/category/Opensource/:id", function (req, resp) {

  mongoose.model("opensource").findOneAndRemove({
    _id: req.params.id
  },
    function (err, data) {
      if (!err) {
      }
    })

  resp.json("Data Open source sourcedeleted")
})

















  /**
 * @swagger
 * /xlarge/admin/update/category/web/:id:
 *  post:
 *    description: Use to update web category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/web/:id",parseUrlencoded,function(req,res){


  web.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})


  /**
 * @swagger
 * /xlarge/admin/update/category/Applicationdevelopment/:id:
 *  post:
 *    description: Use to update Application development category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Applicationdevelopment/:id",parseUrlencoded,function(req,res){


  android.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})

  /**
 * @swagger
 * /xlarge/admin/update/category/Miscellaneousfields/:id:
 *  post:
 *    description: Use to update Miscellaneous fields category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Miscellaneousfields/:id",parseUrlencoded,function(req,res){


  testing.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})



  /**
 * @swagger
 * /xlarge/admin/update/category/Competitiveprogramming/:id:
 *  post:
 *    description: Use to update Competitive programmingcategory name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Competitiveprogramming/:id",parseUrlencoded,function(req,res){


  competitive.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})



  /**
 * @swagger
 * /xlarge/admin/update/category/Datascience/:id:
 *  post:
 *    description: Use to update  Data science category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Datascience/:id",parseUrlencoded,function(req,res){


  data.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})




  /**
 * @swagger
 * /xlarge/admin/update/category/Machinelearning/:id:
 *  post:
 *    description: Use to update Machine learning category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Machinelearning/:id",parseUrlencoded,function(req,res){


  machine.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})


  /**
 * @swagger
 * /xlarge/admin/update/category/Opensource/:id:
 *  post:
 *    description: Use to update Open source category name
 *    responses:
 *      '200':
 *        description: category is updated successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/update/category/Opensource/:id",parseUrlencoded,function(req,res){


  opensource.update({_id:req.params.id},req.body,function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})


})



  /**
 * @swagger
 * /xlarge/admin/comment/delete/:id:
 *  delete:
 *    description: Use to delete  any comment
 *    parameters:
 *      - name: id
 *        description: id for the post
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: category is deleted successfully
 * 
 */




router.delete("/comment/delete/:id",parseUrlencoded,function(req,res){
 
  post.findByIdAndUpdate(
    req.body.id, { $pull: { "comments": { _id: req.params.id } } }, { safe: true, upsert: true },
    function(err, data) {
        if (err) { console.log(err) }
        return res.status(200).json("done");
    });


 
});

  /**
 * @swagger
 * /xlarge/admin/approve/post/:id:
 *  post:
 *    description: Use to approve post
 *    responses:
 *      '200':
 *        description: data of the approved successfully
 *      '400':
 *        description: error
 * 
 */


router.post("/approve/post/:id",async(req,res)=>{

  post.update({_id:req.params.id},{isapproved:true},function(err,data){
    if(err){
      res.status(400).json(err)
    }
    res.status(200).send(data)
})



})

 /**
 * @swagger
 * /xlarge/admin/list/notapproved:
 *  get:
 *    description: Use to retrieve All not approved posts 
 *    responses:
 *      '200':
 *        description: A successful request with the data of all not approved posts 
 * 
 */
router.get("/list/notapproved",function(req,res){
  post.find({isapproved:false},function(err,data){
    res.json(data)
  })
})
module.exports = router;
