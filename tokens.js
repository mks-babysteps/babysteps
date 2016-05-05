var jwt = require('jsonwebtoken');
var my = require('./config.js');
// var dotenv = require('dotenv').config();

var tokens = {};

tokens.generateToken = function (username) {
  return jwt.sign({username: username}, my.secret, {expiresIn: 1440});
};

tokens.verifyToken = function (token, successCb, errorCb) {
  return jwt.verify(token, function (err) {
    if (err) {
      errorCb();
    } else {
      successCb();
    }
  });
};

module.exports = tokens;
