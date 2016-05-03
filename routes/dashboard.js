// var express = require('express');
// var router = express.Router();
var db = require('../db.js');

db.users.find({
  firstName:'Daniel'
}, function(err, user) {
  if (err) {
    console.log('error');
  } else {
    console.log('not an error', 'user :', user);
  }
});