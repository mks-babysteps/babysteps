var express = require('express');
var router = express.Router();
var Q = require('q');
var User = require('../db.js').users;
var verify = require('../tokens.js').verifyToken;

// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

// routes
router.post('/', function(req, res) {
  var username = req.headers.username;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var birthdate = req.body.birthday;
  var newCondition = req.body.condition;
  var newFirstName = req.body.newFirstName;
  var newLastName = req.body.newLastName;
  updateChild(
    res,
    username,
    firstName,
    lastName,
    birthdate,
    newCondition,
    newFirstName,
    newLastName);
});

// helper functions
function updateChild(res,
  username,
  firstName,
  lastName,
  birthdate,
  newCondition,
  newFirstName,
  newLastName) {
  return new Q(User.findOneAndUpdate({username: username}, {new: true}).exec())
    .then(function(foundUser) {
      var childrenArray = foundUser.children;
      update(childrenArray,
        firstName,
        lastName,
        birthdate,
        newCondition,
        newFirstName,
        newLastName);
      foundUser.update({children: foundUser.children}, function(err) {
        if(err) {
          console.error(err);
          res.json({success: false});
        } else {
          res.json({success: true, userData: foundUser});
        }
      });
    });
}

function update(children, firstName, lastName, birthdate, newCondition, newFirstName, newLastName) {
  for(var i = 0; i < children.length; i++) {
    if(children[i].firstName === firstName && children[i].lastName === lastName) {
      children[i].firstName = newFirstName || children[i].firstName;
      children[i].lastName = newLastName || children[i].lastName;
      children[i].birthday = birthdate || children[i].birthday;
      children[i].condition = newCondition || children[i].condition;
    }
  }
}
module.exports = router;
