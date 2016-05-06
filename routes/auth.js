var express = require('express');
var router = express.Router();
var verify = require('../tokens.js').verifyUser;

router.post('/', function(req, res) {
  verify(req.body.token, res);
});

module.exports = router;
