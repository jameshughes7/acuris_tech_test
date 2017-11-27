require('handlebars')

const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient

app.get('/open/:id', (req, res) => {
  res.send('anyone can see me')
})

app.get('/secret/resource', (req, res) => {
  res.send('should not see me if you are not logged in')
})

module.exports = app
