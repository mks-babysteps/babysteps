var express = require('express');
var router = express.Router();
var db = require('../db.js');

<<<<<<< HEAD
User.find( {firstName:'Daniel'} , function(err, user){
  if(err){
    console.log('error');
  }else{
    console.log('not an error', 'user :', user);
  }
});
=======

router.get('/', function(req, res){
   db.users.find( {'firstName': 'Daniel'}, function(err, users){
    if(err){
      console.log('error');
    }else{
      res.send(users);
    }
  });
})

module.exports = router
// User.find( {firstName:'Daniel'} , function(err, user){
  // if(err){
  //   console.log('error');
  // }else{
  //   console.log("not an error, the user :", user);
  //   console.log("user id: ",  user[0]._id)
  //   console.log("children array: ", user[0].children)
  //   console.log("children array length: ", user[0].children.length)
  //   user[0].lastName = "Chen"
  //   // user[0].children.push({firstName: "Goku", lastName: "Kakarot", condition: "Down Syndrome"})
  //   console.log(user)
  //   user[0].save();
  // }
  // })
>>>>>>> dashboard
