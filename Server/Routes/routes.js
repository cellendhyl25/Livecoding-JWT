const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json('A SUCCESFUL FETCH on /')
  })


  module.exports = router