var express = require('express');
var router = express.Router();
var db = require('../db.js');


router.get('/', function(req, res){
   db.users.find( {'firstName': 'Daniel'}, function(err, users){
    if(err){
      console.log('error');
    }else{
      res.send(users);
    }
  });
});

module.exports = router;