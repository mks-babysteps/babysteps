var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
<<<<<<< HEAD
=======
var db = require('./db.js');


>>>>>>> dashboard

//Routes

// var dashboard = require('./routes/dashboard');
var signup = require('./routes/signup');
// var login = require('./routes/login');
var milestone = require('./routes/milestone');
<<<<<<< HEAD
=======
var dashboard = require('./routes/dashboard.js');

>>>>>>> dashboard

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

// app.use('/dashboard', dashboard);
app.use('/signup', signup);
// app.use('/login', login);
// app.use('/milestone', milestone);


app.use('/milestone', milestone);
app.use('/dashboard', dashboard)



app.listen(8080, function() {
  console.log('Listening to localhost:8080');
});