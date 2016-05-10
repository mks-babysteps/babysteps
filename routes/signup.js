var express = require('express');
var router = express.Router();
var Q = require('q');
var tokens = require('../tokens.js');
var db = require('../db');
var bcrypt = require('bcrypt');

// routes
router.post('/', function(req, res) {
  var user = req.body;

  if (!validate(user)) {
    res.json({
      success: false,
      message: 'user information invalid.'
    });

  } else {
    var newUser = new db.users();
      bcrypt.hash(user.password, 10,
        function(err, hash) {
          newUser.firstname = user.firstname;
          newUser.lastname = user.lastname;
          newUser.email = user.email;
          newUser.username = user.username;
          newUser.password = hash;
          getUserBy(newUser, res);
        });
    }
});

// helper functions
function validate(user) {
  return user.firstname && user.lastname && user.email && user.username && user.password;
}

function getUserBy(userObj, res) {
  var username = userObj.username;
  return new Q(db.users.findOne({'username': username}).exec())
  .then(function(foundUser) {
    createAccount(userObj, foundUser, res);
  });
}

function createAccount(newUser, foundUser, res) {
  var username = newUser.username;
  if (foundUser) {
    res.json({
      success: false,
      message: 'username already exists!'
    });
  } else {
      newUser.save(function(err) {
        if (err) {
          console.error(err);
        } else {
            res.json({
              success: true,
              message: '',
              token: tokens.generateToken(username),
              username: username
            });
          }
      });
  }
}

module.exports = router;
