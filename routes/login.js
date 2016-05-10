var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Q = require('q');
var User = require('../db.js').users;
var getToken = require('../tokens.js').generateToken;

// routes
router.get('/', function(req, res) {
  var username = req.headers.username;
  var password = req.headers.password;
  getUserBy(username, password, res);
});

// helper functions
function getUserBy(username, password, res) {
  return new Q(User.findOne({'username': username}).exec())
  .then(function(foundUser) {
    bcrypt.compare(password, foundUser.password ,function(err, result) {
      if (err) {
        console.log('error: ', err);
        res.json({success: false, message: 'username or password invalid!'})
      } else {
          if (foundUser && result) {
            res.json({success: true, token: getToken(username)});
          } else {
            success(res, false, 'username or password invalid!');
          }
      }
    });
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
