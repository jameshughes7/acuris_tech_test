const express = require('express')
const app = express()

app.get('/open/resource', (req, res) => {
  res.send('anyone can see me')
})

app.get('/secret/resource', (req, res) => {
  res.send('should not see me if you are not logged in')
})

module.exports = app
