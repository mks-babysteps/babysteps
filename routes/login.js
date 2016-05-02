var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Q = require('q');
var User = require('../db.js').user;

// Routes
router.get('/', function(req, res) {
  var username = req.headers.username;
  var password = req.headers.password;
  getUserBy(username, password, res);
});

// Helper Functions
function getUserBy(username, password, res) {
  return Q(User.findOne({'username': username}).exec())
  .then(function(foundUser) {
    if (foundUser && foundUser.password === password) {
      success(res, true);
    } else {
      success(res, false, 'Username and password invalid!');
    }
  });
}

function success(res, bool, msg) {
  if (bool) {
    res.json({success: bool});
  } else {
    res.json({
      success: bool,
      message: msg
    });
  }
}

module.exports = router;
