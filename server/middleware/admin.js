var jwt = require("jsonwebtoken")
var config = require("config")
var {
    
    admin
  } = require("../models/admin");
  
function adminauth(req, resp, next) {
  var token = req.header('x_auth_token_admin');
  if (!token) {
    resp.status(401).send("you are not logged in .")
  }
  else{

    try {
        var decoded = jwt.verify(token, config.get('jwtprivatekey'));
        req.admin = decoded;
        //verfied if user deleted or not
        var freshuser = admin.findById(decoded._id);
        if (!freshuser) {
          resp.status(401).send("token is no longer exsist.")
    
        }
        next();
    
      } catch (err) {
        resp.status(400).send('invalid token')
      }


  }

}
module.exports = adminauth;