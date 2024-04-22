var express = require('express');
var app = express();
var port = 5050;
var dotenv = require('dotenv').config()

app.listen(port, () => {
    console.log("Hello World")
  });

app.get("/json", (req, res) => {

if (process.env.MESSAGE_STYLE === 'allCaps'){
  response = 'Hello json'.toUpperCase()
} else {
  response = 'Hello json'
} })
































 module.exports = app;
