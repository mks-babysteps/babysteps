var express = require('express');
var router = express.Router();
var Q = require('q');
var User = require('../db.js').users;

// Routes
router.post('/', function(req, res) {
  var username = req.headers.username;
  var firstName = req.body.child.firstName;
  var lastName = req.body.child.lastName;
  var birthdate = req.body.child.birthdate;
  var newCondition = req.body.child.condition;
  updateChild(res, username, firstName, lastName, birthdate, newCondition);
});

// helper functions
function updateChild(res, username, firstName, lastName, birthdate, newCondition) {
  return new Q(User.findOne({username: username}).exec())
    .then(function(foundUser) {
      var childrenArray = foundUser.children;
      update(childrenArray, firstName, lastName, birthdate, newCondition);
      foundUser.update({children: foundUser.children}, function(err) {
        if(err) {
          console.log('ERROR IN updateChild');
        } else {
          res.json({success: true});
        }
      });
    });
}

function update(children, firstName, lastName, birthdate, newCondition) {
  for(var i = 0; i < children.length; i++) {
    if(children[i].firstName === firstName && children[i].lastName === lastName) {
      children[i].birthday = birthdate;
      children[i].condition = newCondition;
    }
  }
}
module.exports = router;
