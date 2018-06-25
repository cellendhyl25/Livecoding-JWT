const mysql = require('mysql2')

// connection database with a promise
const pendingConnection = mysql.createConnection({

     host: 'localhost',
     user: 'root',
     password: 'password',
     database : 'mydb'

})

console.log("connection to DB sucessful")