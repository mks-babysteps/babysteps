var express = require('express');
var router = express.Router();
// var verify = require('../tokens.js').verifyToken;
var db = require('../db.js');

// authentication
// router.use(function(req, res, next) {
//   verify(req.headers.token, res, next);
// });

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
    condition: req.body.condition,
    childImageUrl: req.body.image
  };


  db.dose.find( {condition: req.body.condition}, function(err , dose) {
    // console.log("dose[0].doses", dose[0].doses);
    childInfo.doses = dose[0].doses;
    // console.log("childInfo", childInfo)
  });


  db.users.find({username: req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {

      if (users[0].children.length === 0) {
        users[0].children.addToSet(childInfo);
      } else {
        var flag = false;

        for(var i = 0; i < users[0].children.length; i++) {
          var childName = users[0].children[i].firstName;
          if(childName === req.body.firstName){
            flag = true;
          }
        }

        if(flag){
          res.json({success: false, message: 'Child already exits'});
        }else{
          users[0].children.addToSet(childInfo);
        }
      }
      users[0].save(function() {
        //res.send(users);
      });
    }
  }
  );
});

router.post('/', function(req,res) {
  db.users.find({username : req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      // console.log("this is the req.body", req.body)
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

router.post('/image', function(req, res) {
  //console.log("inside image post", req.body);
  //console.log("headers", req.headers);
  db.users.find({username: req.headers.username}, function(err, users) {
    if (err) {
      console.error(err);
    } else {
      users[0].imageUrl = req.body.url;
      res.send(req.body.url);
    }
  users[0].save();
  });
});

router.post('/childImage', function(req, res) {
  db.users.find({username: req.headers.username}, function(err, users) {
    if(err) {
      console.error(err);
    }else{
      for(var i = 0; i < users[0].children.length; i++){
        var child = users[0].children[i];
        if(child.firstName === req.body.firstName){
          child.childImageUrl = req.body.url;
          users[0].markModified('children');
        }
      }
      users[0].save(function(err){
        if(err){
          console.log(err);
        }else{
          res.send(req.body.url);
        }
      });
    }

  });
});

module.exports = router;
