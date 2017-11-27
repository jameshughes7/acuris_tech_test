require('handlebars')

const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

var MongoClient = require('mongodb').MongoClient;

var rp = require('request-promise');

app.get('/show/:tickerCode', (req, res) => {

  var options = {
      uri: 'http://mm-recruitment-stock-price-api.herokuapp.com/company/' + req.params.tickerCode,
      json: true // Automatically parses the JSON string in the response
  };

  rp(options)
      .then(function (stock) {
        res.render('company', {tickerCode: req.params.tickerCode,latestPrice: stock.latestPrice});
      })
      .catch(function (err) {
          // API call failed...
      });
});

app.get('/', (req, res) => {
  MongoClient.connect('mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment', function(err, db) {
    if(err) throw err
    db.collection('company', function(err, collection) {
      collection.find().toArray(function(err, items) {
          if(err) throw err
          console.log(items)
          res.render('main',{companies:items});
      });
    })
  })
});

module.exports = app
