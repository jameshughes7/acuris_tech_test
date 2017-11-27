require('handlebars')

const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

var MongoClient = require('mongodb').MongoClient;

app.get('/open/:id', (req, res) => {
  res.render('main');
});

app.get('/secret/resource', (req, res) => {
  res.send('should not see me if you are not logged in')
})

module.exports = app
