var express = require('express');
var router = express.Router();
// var auth = require('../tokens.js');

var User = require('../db.js');

router.post('/', function(req, res) {
  var user = req.body;

  if (!validate(user)) {
    res.json({
      success: false,
      message: 'User information validation failed.'
    });

  // if data validation passes, insert user object into database
  // for later: if username already exists;
  } else {
    var newUser = new User();

      newUser.firstname = user.firstname;
      newUser.lastname = user.lastname;
      newUser.email = user.email;
      newUser.username = user.username;
      newUser.password = user.password;

      res.json({
        success: true,
        message: 'User inserted into database.',
        // token: auth.genToken(user)
      });

    newUser.save(function(err) {
      if(err) {
        console.error(err);
        // res.json({
        //   success: false,
        //   message: // 'username already exists!'
        // });
      } else {
          console.log('saved');
        }
    });
  }
});

// helper function
function validate(user) {
  console.log(user);
  return user.firstname && user.lastname && user.email && user.username && user.password;
}

module.exports = router;
