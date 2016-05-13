var mongoose = require('mongoose');
var dbconfig = require('./config.js');

var dbmodels = {};

var options = {
  server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000}}
};

var mongodbUri = 'mongodb://'+ dbconfig.username + ':'+ dbconfig.password +
'@ds021701.mlab.com:21701/babystepsdb';

mongoose.connect(mongodbUri, options);

mongoose.connection.on('error', console.error.bind(console,'connection error: '));

mongoose.connection.once('open', function() {
  console.log('MongoDB is Connected!');
});

var usersSchema = new mongoose.Schema ({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  imageUrl: String,
  children: [],
  city: String,
  state: String,
  zip: String,
  events: []
});

var vaccinationsSchema = new mongoose.Schema ({
  condition: String,
  vaccinations: []
});

var referencesSchema = new mongoose.Schema ({
  references: Array
});

var doseSchema = new mongoose.Schema ({
  condition: String,
  doses: Array
});

var mConditionsSchema = new mongoose.Schema ({
  name: String,
  categories: Array,
  activity: Array,
  links: Array
});

var mconditionsSchema = new mongoose.Schema ({
  name: String,
  nodes: [],
  cell: [],
  months: []
});

dbmodels.users = mongoose.model('users', usersSchema);
dbmodels.vaccinations = mongoose.model('vaccinations', vaccinationsSchema);
dbmodels.references = mongoose.model('references', referencesSchema);
dbmodels.dose = mongoose.model('dose', doseSchema);
dbmodels.mConditions = mongoose.model('mConditions', mConditionsSchema);

module.exports = dbmodels;
