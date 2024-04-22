var express = require('express');
var app = express();
var port = 5050;
var dotenv = require('dotenv').config()

app.listen(port, () => {
    console.log("Hello World")
  });

app.get("/json", (req, res) => {
  var response = process.env.MESSAGE_STYLE

if (response === 'uppercase'){
  return res.json('HELLO JSON')
} else {
  return res.json('Hello json')
} 
})
































 module.exports = app;
