const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
})

connection.connect((err)=>{
  if (err) throw err
  console.log("connection to DB sucessful")}
)

router.get('/', (req, res) => {
    res.json('A SUCCESFUL FETCH on /')
})

router.post('/register', (req, res) => {

  const username = req.body.user.username
  const password = req.body.user.password


bcrypt.hash(password, 16).then(hash => {
        
      let sql = `INSERT INTO table1 (Username, Password) VALUES (?,?)`
        const values = [
          username, hash
        ]
        connection.query(sql, values, (err, result) => 
      {
        if (err) throw err;
        console.log('database updated')
        res.send(result)
      })
    });
});


module.exports = router
