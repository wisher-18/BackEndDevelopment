const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function (req,res) {
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.email;
  console.log(fName, lName, email);
});

app.listen(3000, function(){
  console.log("Server is running on port: 3000");
});
