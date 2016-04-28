var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(8080, function() {
  console.log('Listening to localhost:8080');
});
