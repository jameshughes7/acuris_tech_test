const app = require('./app')
const port = process.env.PORT || 9090

process.on('SIGTERM', function () {
  console.log("Closing")
  app.close()
})

app.listen(port, () => {
  console.log(`Started app on port ${port}.`)
})
