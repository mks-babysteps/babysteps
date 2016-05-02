var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res) {
  var username = req.headers.username;
  var password = req.headers.password;


})

module.exports = router;
