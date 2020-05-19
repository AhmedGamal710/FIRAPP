var mongoose = require('mongoose');

  // Validate Function to check comment length
  let commentLengthChecker = (comment) => {
    // Check if comment exists
    if (!comment[0]) {
      return false; // Return error
    } else {
      // Check comment length
      if (comment[0].length < 1 || comment[0].length > 250) {
        return false; // Return error if comment length requirement is not met
      } else {
        return true; // Return comment as valid
      }
    }
  };
  
  // Array of Comment validators
  const commentValidators = [
    // First comment validator
    {
      validator: commentLengthChecker,
      message: 'Comments may not exceed 200 characters.'
    }
  ];

var joi = require("joi");
var post = mongoose.model("post", new mongoose.Schema({


  title:{
      type:String,
      required:true
  } ,
  createdat: {
    type: Date,
    default:Date.now()
  },
  content: {
    type: String,
    required:true
  },
  category:{
    
    type: mongoose.Schema.Types.ObjectId,
    enum: ['web', 'android','testing' , 'competitive' , 'data' ,'machine','opensource']
    
  },
  createdby:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    } ,
    img:{
      type: String,
      default:"https://res.cloudinary.com/ddo2kzwbh/image/upload/v1589436873/posts-default_gz3w3r.jpg"

    } ,


    likes: { 
      type: Number,
       default: 0 },

    likedBy: {
       type: Array 
      },
      
    comments: [{
      comment: { type: String, validate: commentValidators },
      commentator: {  type: mongoose.Schema.Types.ObjectId,
        ref: 'user' }
    }],
    isapproved:{
       type:Boolean,
       default:false

    }
 

 
}));
function validatepost(posts) {
    var Schema = {
   
        title: joi.string().required(),
        content: joi.string().min(8).max(255).required(),
        category: joi.string().required(),

   
   
   
    };
    return joi.validate(posts, Schema)
  }


  exports.validatepost =  validatepost;
  
  exports.post = post;


