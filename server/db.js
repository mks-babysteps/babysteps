var mongoose = require('mongoose');
var dbconfig = require('./config.js');

var models = {};

var options = {
  server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000}}
};

var mongodbUri = 'mongodb://'+ dbconfig.username + ':'+ dbconfig.password +
'@ds021701.mlab.com:21701/babystepsdb';

mongoose.connect(mongodbUri, options);

mongoose.connection.on('error', console.error.bind(console,'connection error: '));

mongoose.connection.once('open', function() {
  console.log('MongoDB is Connected!');
});

var usersSchema = new mongoose.Schema ({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  children: [],
  streetAddress: String,
  city: String,
  state: String
});

var conditionSchema = new mongoose.Schema ({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  content: String
});

var User = mongoose.model('users', usersSchema);
var Condition = mongoose.model('Conditions', conditionSchema);

models.user = User;
models.condition = Condition;

module.exports = models;
