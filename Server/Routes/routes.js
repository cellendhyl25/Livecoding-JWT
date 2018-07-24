const express = require('express')
const router = express.Router()
const db = require('mysql2-promise')()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('joi')

const jwtSecret = 'MAKEITUNUVERSAL'

const pendingConnection = db.configure({user: 'root', host: 'localhost', database: 'mydb', password: 'password'})


const schema = Joi
    .object()
    .keys({
        username: Joi
            .string()
            .alphanum()
            .min(4)
            .max(30)
            .required(),
        password: Joi
            .string()
            .alphanum()
            .min(4)
            .max(30)
            .required()
    })

router.get('/', (req, res) => {
    res.json('A SUCCESFUL FETCH on /')
})

router.post('/login', async(req, res, next) => {

    const valid = Joi.validate({
        username: `${req.body.user.username}`,
        password: `${req.body.user.password}`
    }, schema)

    value = req.body.user.username

    if (valid.error === null) {
      console.log('validation success')
      
        db
            .execute('SELECT Password FROM table1 WHERE Username = ?', [value])
            .spread(async function (users) {
                // const convert = JSON.parse(JSON.stringify(users))
                const isEqual = await bcrypt.compare(req.body.user.password, users[0].Password)
                if (isEqual === true) {
                    const token = jwt.sign({
                        id: 1, // users[0].Id
                        username: value,
                    }, jwtSecret)
                    res.json({token})
                } else {
                    return next(console.log('error'))
                }

            })
    } else {
        next(console.log(' validation error'))
    }
})


router.post('/register', (req, res) => {

    const username = req.body.user.username
    const password = req.body.user.password

    bcrypt
        .hash(password, 16)
        .then(hash => {

            let sql = `INSERT INTO table1 (Username, Password) VALUES (?,?)`
            const values = [username, hash]
            connection.query(sql, values, (err, result) => {
                if (err) 
                    throw err
                console.log('database updated')
                res.send(result)
            })
        })
})

module.exports = router
