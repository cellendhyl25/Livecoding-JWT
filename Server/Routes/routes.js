const express = require('express')
const router = express.Router()
const db = require('../database.js')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  })

connection.connect(function(err) {
    console.log("connection to DB sucessful")
  if (err) throw err
  
});


router.get('/', (req, res) => {
    res.json('A SUCCESFUL FETCH on /')
})

router.post('/reg', (req, res) => {

        const email = req.body.user.email
        const password = req.body.user.password
        console.log(email)
        console.log(password)
        let sql = `INSERT INTO table1 (Username, Password) VALUES ('${email}', '${password}')`

        connection.query(sql, function (err, result) {
            if (err) 
                throw err;
            console.log("1 record inserted");
            res.send(JSON.stringify(result));
        });

    })

module.exports = router