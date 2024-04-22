var express = require('express');
var app = express();
var port = 5050;
var dotenv = require('dotenv').config()

app.listen(port, () => {
    console.log("Hello World")
  });

app.get("/json", (req, res) => {

if (process.env.MESSAGE_STYLE === 'uppercase'){
  res.json({"message":"HELLO JSON"})
} else {
  res.json({"message":"hello json"})
} })
































 module.exports = app;
