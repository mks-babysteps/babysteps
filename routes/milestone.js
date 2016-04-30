var express = require('express');
var router = express.Router();
// var db = require('../db.js');

router.post('/', function(req, res) {
  res.send('This is from Milestone Route on server side');
});

module.exports = router;