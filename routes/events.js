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

router.post('/remove', function(req, res) {
  db.users.update({username : req.headers.username},{
    $pull: { 'events' : { 'dt' :req.body.dt } } },
    function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('success');
        res.send();
      }
  });
});

router.post('/edit', function(req, res) {
  db.users.update({username : req.headers.username, 'events.dt' : req.body.oldDt},{
    $set: {
          'events.$.appointment' : req.body.appointment,
          'events.$.doctor' : req.body.doctor,
          'events.$.location' : req.body.location,
          'events.$.dt' : req.body.dt,
          'events.$.childName' : req.body.childName,
          'events.$.notes' : req.body.notes
           } },
    function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('success');
        res.send();
      }
  });
});

module.exports = router;