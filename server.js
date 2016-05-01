var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

//Routes

// var dashboard = require('./routes/dashboard');
var signup = require('./routes/signup');
// var login = require('./routes/login');
var milestone = require('./routes/milestone');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

// app.use('/dashboard', dashboard);
app.use('/signup', signup);
// app.use('/login', login);
// app.use('/milestone', milestone);

app.use('/milestone', milestone);

app.listen(8080, function() {
  console.log('Listening to localhost:8080');
});