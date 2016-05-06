var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;


router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/',function(req, res){
  console.log('inside vac js db req')
  console.log('req.body', req.body)
  db.vaccinations.find({'condition': req.body.conditionName }, function(err, vaccinations) {
    if(err){
      console.log('error');
    } else {
      res.send(vaccinations)
      console.log('vaccinations', vaccinations)
    }
  })
});






module.exports = router;