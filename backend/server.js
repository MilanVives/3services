const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
app.use(express.json()) 
app.use(cors())

const port = process.env.PORT || 3000 

const foods = ["sugar","apple","banana","orange"]

app.get('/', (req, res) => {
  res.send(foods)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

