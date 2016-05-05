var express = require('express');
var router = express.Router();
var Q = require('q');
var User = require('../db.js').users;
var getToken = require('../tokens.js').generateToken;

// Routes
router.get('/', function(req, res) {
  var username = req.headers.username;
  var password = req.headers.password;
  getUserBy(username, password, res);
});

// Helper Functions
function getUserBy(username, password, res) {
  return new Q(User.findOne({'username': username}).exec())
  .then(function(foundUser) {
    if (foundUser && foundUser.password === password) {
      console.log('pass!');
      console.log(getToken);
      var token = getToken(username);
      console.log('my token: ', token);
      res.json({success: true, token: token});
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
