var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
// var db = require('./db.js');

// var dashboard = require('./routes/dashboard.js');

app.use(cors());
app.use(express.static('client/'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.listen(8080, function() {
  console.log('Listening to localhost:8080');
});
