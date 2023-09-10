const express = require('express');

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello Bhushan!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: rise@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Bhushan and I love coding as well as reading.");
});

app.listen(3000, function () {
  console.log("Server started on port https://localhost:3000");
});
