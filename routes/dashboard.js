var express = require('express');
var router = express.Router();
// var tokens = require('../tokens.js');
var db = require('../db.js');

// routes
router.get('/', function(req, res) {
   db.users.find({username : req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      res.send(users);
    }
  });
});

router.post('/addChild', function(req,res) {
  var childInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    condition: req.body.condition
  };

  db.users.find({username: req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      if (users[0].children.length === 0) {
        users[0].children.addToSet(childInfo);
        } else {
          for(var i = 0; i < users[0].children.length; i++) {
            var childName = users[0].children[i].firstName;
            if (childName !== req.body.firstName) {
              users[0].children.addToSet(childInfo);
            } else {
              console.error('Child already exists!');
            }
          }
        }
        users[0].save(function() {
          res.send(users);
        });
    }
  });
});

router.post('/', function(req,res) {
  db.users.find({username : req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      var spliced = [];
      for(var i = 0; i < users[0].children.length; i++) {
        if (users[0].children[i].firstName !== req.body.firstName) {
          spliced.push(users[0].children[i]);
        }
      }
      users[0].children = spliced;
      users[0].save(function(err) {
        if (err) {
          console.error(err);
        } else {
          res.send(users);
        }
      });
    }
  });
});

module.exports = router;
