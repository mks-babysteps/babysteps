var express = require('express');
var router = express.Router();
var Q = require('q');
var verify = require('../tokens.js').verifyToken;
var Condition = require('../db.js').mConditions;
var User = require('../db.js').users;

// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

// routes
router.get('/', function(req, res) {
  var condition = req.headers.condition;
  findCondition(condition, res);
});

var findCondition = function(condition, res) {
  return new Q(Condition.findOne({'name': condition}).exec())
    .then(function(condition) {
      res.json({
        success: true,
        condition: condition
      });
    });
};

module.exports = router;
