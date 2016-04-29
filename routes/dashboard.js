var express = require('express');
var router = express.Router();
var User = require('../db.js');
var db = require('../db.js');


User.find( {firstName:'Daniel'} , function(err, user){
  if(err){
    console.log('error')
  }else{
    console.log("not an error, the user :", user);
    console.log("user id: ",  user[0]._id)
    console.log("children array: ", user[0].children)
    console.log("children array length: ", user[0].children.length)
    user[0].lastName = "Chen"
    // user[0].children.push({firstName: "Goku", lastName: "Kakarot", condition: "Down Syndrome"})
    console.log(user)
    user[0].save();
  } 
})

// User.findById("5722a0a4dfa14cef5619bce7", function(err, user){
//   if(err){
//     console.log("error!!")
//   }else{
//     console.log("i found him", user);
//     user.lastName = "Monica";

//     console.log("user last name ", user.lastName)
//     console.log("user", user)
//     user.save()    
//   }
// })
