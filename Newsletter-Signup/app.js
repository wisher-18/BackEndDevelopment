const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function (req,res) {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;

  var data = {
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/5ea1603db0"
  https.request(url, options, function (response) {
    
  })

});

app.listen(3000, function(){
  console.log("Server is running on port: 3000");
});


// api key
// 518a0297ba5e16ad51faf173371e1609-us21
// List Id
// 5ea1603db0