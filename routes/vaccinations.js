var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;


router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/', function(req, res) {
  db.users.find({'username': req.headers.username }, function(err, user) {
    if (err) {
      console.log('error');
    } else {
      for (var i=0 ; i<user[0].children.length; i++) {
        if(user[0].children[i].firstName === req.body.firstName){
         res.json({
          success: true,
          vaccination: user[0].children[i].doses,
          count: user[0].children[i].count
        });
        } else {
          console.log('no child like that found');
        }
      }
    }
  });
});

router.post('/updateDose', function(req, res) {
  db.users.find({'username': req.headers.username}, function(err, users) {
    if (err) {
      console.log('error');
    } else {
      for (var j=0; j<users[0].children.length;j++) {
        if (users[0].children[j].firstName === req.body.firstName) {
          for (var k=0; k< users[0].children[j].doses.length; k++ ) {
            if (users[0].children[j].doses[k].name === req.body.vaccinationName) {
              if (users[0].children[j].doses[k][req.body.doseNumber][1]==='Incomplete') {
                users[0].children[j].doses[k][req.body.doseNumber][1] = 'Complete';
                users[0].children[j].count++;
              } else {
                users[0].children[j].doses[k][req.body.doseNumber][1] = 'Incomplete';
                users[0].children[j].count--;
              }
            }
          }
        }
      }
              users[0].markModified('children');
              users[0].save(function(err){
                if (err) {
                  console.log(err);
                } else {
                  res.send(users);
                }
              });
    }
    });

});




module.exports = router;
