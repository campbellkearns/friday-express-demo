const express = require('express')
const app = express()

const basketsRouter = require('./routes/baskets')

const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome to the application')
})

app.use('/baskets', basketsRouter)

app.listen(PORT)

module.exports = app