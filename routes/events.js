var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;

// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/', function(req, res) {
    db.users.find({username: req.headers.username}, function(err, users) {
    var events = req.body;
    if (err) {
      console.error(err);
    } else {
        users[0].events.addToSet(events);
      users[0].save(function() {
        res.send(users);
      });
    }
    });
});

router.get('/', function(req, res) {
  db.users.find({username : req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      res.send(users[0]);
    }
  });
});

module.exports = router;