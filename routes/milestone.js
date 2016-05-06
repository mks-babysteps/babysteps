var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../token');


// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

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
