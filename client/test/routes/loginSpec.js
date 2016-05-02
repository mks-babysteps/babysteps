var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('supertest');

describe('Login Routes', function() {

  it('should retrieve username and password', function() {
    var username = req.headers.username;
    var password = req.headers.password;
    router.get('/', function (req, res) {

    })
  });

  describe('Comparing user information', function() {

    it('should check if given username exists in database', function() {

    });

    it('should check if given password matches if username exists', function() {

    });

  });

  it('should return a failed response if username does not exist', function() {

  });

  it('should return failed response if username exists but password does not match', function() {

  });

  it('should return successful response if username and password matches', function() {

  });

});
