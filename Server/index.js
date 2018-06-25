const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
require('./database.js')


// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, {
    cookie: req.headers.cookie,
    token: req.headers.authorization
  })
  next()
})

// BodyParser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// ROUTES



app.use('/', routes)

app.listen(3030, () => console.log(`server listening on port: 3030`))