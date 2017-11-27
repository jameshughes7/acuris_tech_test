require('handlebars')

const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

var MongoClient = require('mongodb').MongoClient;

app.get('/open/:id', (req, res) => {
  MongoClient.connect('mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment', function(err, db) {
    if(err) throw err
    db.collection('company', function(err, collection) {
      collection.find().toArray(function(err, items) {
          if(err) throw err
          console.log(items)
      });
    })
  })
  res.render('main');
});

app.get('/secret/resource', (req, res) => {
  res.send('should not see me if you are not logged in')
})

module.exports = app
