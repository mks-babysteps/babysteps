var express = require('express');
var router = express.Router();
// var tokens = require('../tokens.js');
var db = require('../db.js');


router.get('/', function(req, res){
  // console.log('req.headers.username', req.headers.username);
  // console.log('this is the req.body', req.body);

   db.users.find( { username : req.headers.username}, function(err, users){

    if(err){
      console.log(err);
    }else{
      // console.log('this is the res.body', res.body);
      res.send(users);
    }
  });
});

// Add child to db post
router.post('/addChild', function(req,res) {
  //console.log("inside post request dashboard js", req );
  var childInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    condition: req.body.condition
  };


  db.users.find({username: req.headers.username}, function(err, users){
    if(err){
      console.log(err);
    }else{
      // console.log('Dans method', users[0].children);
      //var childArray = users[0].children;
        if(users[0].children.length === 0){
          users[0].children.addToSet(childInfo);
        }else{
          for(var i = 0; i < users[0].children.length; i++){
            var childName = users[0].children[i].firstName;
            if(childName !== req.body.firstName){
              users[0].children.addToSet(childInfo);

            }else{
              console.log('Inside add child, db.users, line 34, child already exits');
            }
        }
      }
      users[0].save(function(){
       res.send(users);
     });
    }
  });
});

router.post('/', function(req,res){
  // console.log('this is req.body.firstName ', req.body.firstName);
  // console.log('this is req.body.userName ', req.body.userName);
  db.users.find( {username : req.headers.username}, function(err, users){
    if(err){
      console.log(err);
    }else{
      // console.log(users, 'users here');
      var spliced = [];
      for(var i=0; i<users[0].children.length; i++){
        if(users[0].children[i].firstName!==req.body.firstName){
          spliced.push(users[0].children[i]);
          // console.log(spliced, 'array!'); 
        }
      }
      users[0].children = spliced;
      users[0].save(function(err){
        if(err){
          console.log('error!');
        }else{
        res.send(users);
      }
     }
    );
    }
  });
});
  
module.exports = router;
