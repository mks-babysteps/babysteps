// var express = require('express');
// var router = express.Router();
var User = require('../db.js');
// var db = require('../db.js');

User.find( {firstName:'Daniel'} , function(err, user){
  if(err){
    console.log('error');
  }else{
    console.log('not an error', 'user :', user);
  }
});
