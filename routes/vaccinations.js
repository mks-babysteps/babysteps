var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;


router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/', function(req, res) {
  console.log('inside vaccination resbdy: ', req.body.condition);
  db.vaccinations.find({'condition': req.body.condition }, function(err, vaccinations) {
    if(err){
      console.log('error');
    } else {
      console.log('vaccinations', vaccinations);
      res.send(vaccinations);
    }
  });
});






module.exports = router;