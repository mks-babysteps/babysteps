var express = require('express');
var router = express.Router();
var User = require('../db.js');
var db = require('../db.js');


router.get('/', function(req, res){
   
  var grabUser = function(){
    User.find({}, function(err, user){
      if(err){
        res.send("error!")
      }else{
        res.status(200).send(user)
      }
    })
  }

  grabUser()

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