var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Coba} = require('./models/coba');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/AplikasiBaru', (req, res) => {
  var coba = new Coba({
    text: req.body.text
  });

  coba.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Sudah masuk ke port 3000');
});
