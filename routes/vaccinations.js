var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;


router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/', function(req, res) {
  console.log("req.headers.username", req.headers.username)
  console.log('inside vaccination resbdy: ', req.body.firstName);
  db.users.find({'username': req.headers.username }, function(err, user) {
    if(err){
      console.log('error');
    } else {
      console.log("user[0].children[0].firstName", user[0].children[0].firstName)
      for(var i=0 ; i<user[0].children.length; i++){
        if(user[0].children[i].firstName === req.body.firstName.firstName){
         console.log("the good shit", user[0].children[i].doses)
         res.send(user[0].children[i].doses)
        }else{
          console.log("I couldn't find a child with that name")
        }
      }
    }
  });
});






module.exports = router;