var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var joi = require("joi")
var config = require("config")

const nodemailer = require('nodemailer');

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var {

  user
} = require("../models/user");

var { admin } = require("../models/admin")

/**
 * @swagger
 * /xlarge/login:
 *  post:
 *    description: Use to login to our website
 *    parameters:
 *    -  name: "email"
 *       in: query
 *       description: "user email for login"
 *       required: true
 *       type: "string" 
 *    -  name: "password"
 *       in: query
 *       description: "user password for login"
 *       required: true
 *       type: "string"
 *    responses:
 *      '400':
 *        description: email or password is invalid
 *      '200':
 *        description: A successful request with the jwt containing the kind of user(user,admin) + ID
 *        headers: 
 *          x_auth_token_ + "user" || "admin":
 *             description: contain the token + type of user
 */
router.post('/', parseUrlencoded, async (req, res) => {

  var {
    error
  } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let users = await user.findOne({
    email: req.body.email
  });
  if (!users) {

    let admins = await admin.findOne({
      email: req.body.email
    });
    if (admins) {
      var validepassword = await bcrypt.compare(req.body.password, admins.password);
      if (!validepassword) {
        return res.status(400).send("invalid email or password.");

      }
      else {

        var token = jwt.sign({
          _id: admins._id
        }, config.get('jwtprivatekey'))
        res.cookie('jwt', token, {
          httpOnly: true
        })
        res.header("x_auth_token_admin", token).status(200).json({
          "token": token,
          "id": admins._id,
          "role": "admin"
        });
      }


    }
  else{
    res.json("invalid email or password")
  }

  }


  else {

    validepassword = await bcrypt.compare(req.body.password, users.password);
    if (!validepassword) {
      return res.status(400).send("invalid email or password.");

    }
    else {
      var token = jwt.sign({
        _id: users._id
      }, config.get('jwtprivatekey'))
      res.cookie('jwt', token, {
        httpOnly: true
      })
      res.header("x_auth_token_user", token).status(200).json({
        "token": token,
        "id": users._id,
        "role": "user"
      });
    }


  }







})



function validate(req) {
  var schema = {
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(255).required()
  };
  return joi.validate(req, schema)
}


/**
 * @swagger
 * /xlarge/login/forget/password:
 *  post:
 *    description: Use when the user forget his/her password
 *    parameters:
 *    -  name: email
 *       in: query
 *       description: "user email to check if he own account or not "
 *       required: true
 *       type: "string" 
 *    responses:
 *      '400':
 *        description: email is invalid
 *      '200':
 *        description: we will send message to his e.mail address
 */

router.post("/forget/password", parseUrlencoded, async (req, res) => {

  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
        user: "savethemiti@gmail.com",
        pass: "2020 mona@@"
    },
    tls: {
      rejectUnauthorized: false
   }
});



  let users = await user.findOne({
    email: req.body.email
  });

  if (!users) {
    let admins = await admin.findOne({
      email: req.body.email
    });
    if (admins) {
      var token = jwt.sign({
        _id: admins._id
      }, config.get('jwtprivatekey'))
      mailOptions = {
        from:"savethemiti@gmail.com" ,
        to: req.body.email,
        subject: 'This email is from x large website',
        html: `
            <h1 style="text-align:center;margin-bottom:20px">Reset your password?</h1>
            <h4 style="text-align:center;margin-bottom:20px">If you requested a password reset for ${req.body.email}, click the button below. </br>
            If you didn't make this request, ignore this email.</h4>
            <button style="background-color:#3B6D8C;margin-left:50%;border-style:none;padding:5px"><a style="text-decoration:none;background-color:#3B6D8C;color:white" href="http://localhost:4200/reset-password/${admins._id}">Reset Password</a></button>
          <p style="text-align:center">This email was meant for ${req.body.email}</p>
          
            `
      }
      smtpTransport.sendMail(mailOptions, function (error) {
        if (error) {
          res.json(error);
        }
        else {
          res.json(token);
        }

      })

    } else {
      return res.status(400).send("invalid email or password.");

    }


  } else {
    token = jwt.sign({
      _id: users._id
    }, config.get('jwtprivatekey'))
    mailOptions = {
      from:"savethemiti@gmail.com",
      to: req.body.email ,
      subject: 'This email is from x large website',
      html: `
        <h1 style="text-align:center;margin-bottom:20px">Reset your password?</h1>
        <h4 style="text-align:center;margin-bottom:20px">If you requested a password reset for ${req.body.email}, click the button below. </br>
        If you didn't make this request, ignore this email.</h4>
        <button style="background-color:#3B6D8C;margin-left:50%;border-style:none;padding:5px"><a style="text-decoration:none;background-color:#3B6D8C;color:white" href="http://localhost:4200/reset-password/${users._id}">Reset Password</a></button>
      <p style="text-align:center">This email was meant for ${req.body.email}</p>
      
        `
    }

    smtpTransport.sendMail(mailOptions, function (error) {
      if (error) {


        res.json(error);
      }
      else {
        res.json(token);
      }

    })
  }




});


/**
 * @swagger
 * /xlarge/login/reset/password:
 *  post:
 *    description: Use to reset his password after redirect him from his e.mail
 *    parameters:
 *    -  name: email
 *       in: query
 *       description: "user email for reset"
 *       required: true
 *       type: "string"
 *    -  name: password
 *       in: query
 *       description: "new password for reset"
 *       required: true
 *       type: "string"
 *    responses:
 *      '400':
 *        description: something went wrong
 *      '200':
 *        description: A successful request with the data of this user send in json format
 */

router.post("/reset/password", parseUrlencoded, async (req, res) => {


  let users = await user.findOne({
    _id: req.body.id
  });

  if (!users) {
      let admins = await admin.findOne({
        _id: req.body.id
      });
      if (admins) {
        var salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        admin.update({ _id: req.body.id }, { password: req.body.password }, function (err, data) {
          if (err) {
            res.status(400).send("something went wrong")

          }
          res.send(data)
        })

      }
    

  } else {

    var salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user.update({ _id: req.body.id }, { password: req.body.password }, function (err, data) {
      if (err) {
        res.status(400).send("something went wrong")

      }
      res.send(data)
    })
  }

})









module.exports = router;
