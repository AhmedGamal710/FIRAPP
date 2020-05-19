const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
var config = require("config");
var helmet = require("helmet");
var xss = require("xss-clean");
var mongosanatize = require("express-mongo-sanitize");

var hpp = require("hpp");
var ratelimit = require("express-rate-limit");
require("express-async-errors");
const app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var jwt = require('jsonwebtoken');
app.use(express.static("upload"));
var winston = require("winston");

app.use(cors());
app.use(bodyParser.json());
var files_arr = fs.readdirSync(__dirname + "/models");
files_arr.forEach(function (file) {
  require(__dirname + "/models/" + file);
});
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Xlarge API",
      description: "API for Xlarge Magazine project ",
      contact: {
        name: "Go Team"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["./controllers/*.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var user=require("./controllers/user");
var admin=require("./controllers/admin");
var login = require("./controllers/login")
var post = require("./controllers/posting")
var search = require("./controllers/search")
app.use("/xlarge/admin",admin)
app.use("/xlarge/user",user)
app.use("/xlarge/login",login)
app.use("/xlarge/post",post)
app.use("/xlarge/search",search)
// var limiter = ratelimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this ip,Please try again in an hour !"
// });

// limit number of requests from the same ip address
// app.use("/xlarge", limiter);
// http security headers
app.use(helmet());
// data sanitization against nosql query injection
app.use(mongosanatize());
// data sanitization against xss
app.use(xss());
// prevent parameter pollution
app.use(hpp());
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.header(
    "Access-Control-Allow-Methods",
    "DELETE, HEAD, GET, OPTIONS, POST, PUT"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


  var mongosanatize = require("express-mongo-sanitize");
  

  if (!config.get("jwtprivatekey")) {
    console.error("jwtprivatekey undefined");
    process.exit(1);
  }

mongoose.Promise = global.Promise;
mongoose.connect(
 "mongodb+srv://mona:123456aa@cluster0-vo6eq.mongodb.net/test?retryWrites=true&w=majority" 
 );
  mongoose.connection.on("error", err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  });
  app.listen(3000, function () {
});
