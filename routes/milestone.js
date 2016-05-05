var express = require('express');
var router = express.Router();
// var tokens = require('../tokens.js');
var db = require('../db.js');

// routes
router.post('/', function(req, res) {
  db.conditions.find({'name': req.body.conditionName}, function(err, condition) {
    if(err) {
      console.log('error');
    } else {
      res.send(condition);
    }
  });
});

module.exports = router;
