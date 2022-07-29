const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const routes = require('./routes')

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})