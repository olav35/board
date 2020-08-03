const express = require('express')
const app = express()

app.get('/', (_request, response) => {
  response.send('Hello, world!')
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})