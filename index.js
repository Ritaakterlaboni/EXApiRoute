const express = require('express')
const mongoose = require('mongoose')
const route = require('./route')
// const userSchema = require('./model/userSchema')
const dbConnection = require('./Database/dbConnection')

const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()

//api banate alada dbconnection file connect ar code rakte hobe

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// app.post('/user', (req, res) => {
//     const {name, email, password} = req.body
//     const ExApi = new userSchema ({
//         name: name,
//         email: email,
//         password: password,
//     })
    
//   res.send('Done!')
//   ExApi.save()
// });
dbConnection();
app.use( route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
