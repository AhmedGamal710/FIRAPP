var jwt = require("jsonwebtoken")
var config = require("config")
var {

    user
  } = require("../models/user");
  
function auth(req, resp, next) {
  var token = req.header('x_auth_token_user');
  if (!token) {
    resp.status(401).send("you are not logged in .")
  }
  else{

    try {
        var decoded = jwt.verify(token, config.get('jwtprivatekey'));
        req.user = decoded;
        //verfied if user deleted or not
        var freshuser = user.findById(decoded._id);
        if (!freshuser) {
          resp.status(401).send("token is no longer exsist.")
    
        }
        next();
    
      } catch (err) {
        resp.status(400).send('invalid token')
      }


  }

}
module.exports = auth;