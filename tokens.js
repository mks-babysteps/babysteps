// For JWT TOKENS notesee

// var jwt = require('jsonwebtoken')
// var dotenv = require('dotenv').config()

// var auth = {}

// // creates a token string
// auth.generateToken = function (username) {
//   return jwt.sign({ username: username}, process.env.NTS_SECRET, "12h")
// }

// // checks to see if token is valid
// auth.verifyToken = function (token, successCb, errorCb) {
//   return jwt.verify(token, process.env.NTS_SECRET, function (err, decoded) {
//     if (err) {
//       errorCb()
//     } else {
//       successCb()
//     }
//   })
// }

// module.exports = auth


// OR legacy


// var jwt = require('jsonwebtoken');

// var tokenSecret = 'CouchBase35';
// var decode = module.exports.decode = function(token) {
//   return jwt.decode(token);
// };

// var genToken = module.exports.genToken = function(userObj) {
//   return jwt.sign({ID: userObj.ID, username: userObj.username}, tokenSecret, {
//     expiresIn: 47700
//   });
// };

// // middleware function for checking auth
// var ifAuthorized = module.exports.ifAuthorized = function(req, res, next) {
//   var token = req.headers['x-access-token'];
//   var verify;

//   if (token) {
//     jwt.verify(token, tokenSecret, function(err, decoded) {
//       if (err) {
//         unauthorized(res);
//       } else {
//         next();
//       }
//     })
//   } else {
//     unauthorized(res);
//   }

//   function unauthorized(res) {
//     res.json({
//       success: false,
//       message: 'Your account is unauthorized (token missing or invalid.)'
//     })
//   }
// }
