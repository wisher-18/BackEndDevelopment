const express = require('express');

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</>");
});

app.listen(3000, function() {
  console.log("Server is started on port number 3000.");
});
