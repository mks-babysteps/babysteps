var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

//routes
var signup = require('./routes/signup');
var login = require('./routes/login');
var milestone = require('./routes/milestone');
var dashboard = require('./routes/dashboard.js');
var edit = require('./routes/editChild.js');
var vaccinations = require('./routes/vaccinations.js');
var events = require('./routes/events.js');

app.use(express.static(__dirname + '/client/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/signup', signup);
app.use('/login', login);
app.use('/edit', edit);
app.use('/milestone', milestone);
app.use('/dashboard', dashboard);
app.use('/vaccinations', vaccinations);
app.use('/events', events);

var port = process.env.PORT || 8080;

app.listen(port, console.log('Magic happens on port', port));
