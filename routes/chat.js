var express = require('express');
var router = express.Router();
var verify = require('../tokens.js').verifyUser;

// authentication
router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

module.exports = router;