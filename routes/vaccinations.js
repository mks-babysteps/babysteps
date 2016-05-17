var express = require('express');
var router = express.Router();
var db = require('../db.js');
var verify = require('../tokens.js').verifyToken;


router.use(function(req, res, next) {
  verify(req.headers.token, res, next);
});

router.post('/', function(req, res) {
  // console.log("req.headers.username", req.headers.username)
  // console.log('inside vaccination resbdy: ', req.body.firstName);
  db.users.find({'username': req.headers.username }, function(err, user) {
    if(err){
      console.log('error');
    } else {
      // console.log("user[0].children[0].firstName", user[0].children[0].firstName)
      for(var i=0 ; i<user[0].children.length; i++){
        if(user[0].children[i].firstName === req.body.firstName.firstName){
         // console.log("the good shit", user[0].children[i].doses)
         res.send(user[0].children[i].doses);
        }else{
          console.log('no child like that found');
        }
      }
    }
  });
});

router.post('/updateDose', function(req, res){
  // console.log('this is the req.body', req.body)
  // console.log('this is the req.headers.username', req.headers.username)

  db.users.find({'username': req.headers.username}, function(err, users){
    if(err){
      console.log('error');
    } else {
      // console.log("I'm in update dose!")
      for(var j=0; j<users[0].children.length;j++){
        if(users[0].children[j].firstName === req.body.firstName.firstName){
          for(var k=0; k< users[0].children[j].doses.length; k++ ){
            if(users[0].children[j].doses[k].name === req.body.vaccinationName){
              // console.log("its working", users[0].children[j].doses[k][req.body.doseNumber][1])
              if(users[0].children[j].doses[k][req.body.doseNumber][1]==='Incomplete'){
                users[0].children[j].doses[k][req.body.doseNumber][1] = 'Complete';
                users[0].children[j].count++;
    // console.log("was it changed?",users[0].children[j].doses[k][req.body.doseNumber][1] )


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
                if(err){
                  console.log(err);
                } else{
                  // console.log('users', users)
                  // console.log('users[0].children',users[0].children)
                  res.send(users);
                }
              });

    }
    });

});




module.exports = router;
