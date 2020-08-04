const express = require('express')
const app = express()
const key = process.env.KEY
const port = process.env.PORT

app.use(express.json())

const invalidKeyHandler = (request, response, next) => {
  if(request.headers.key === key){
    next()
  } else {
    response.status(403)
    response.json({
      error: 'Invalid key'
    })
  }
}
app.use(invalidKeyHandler)

const threadsRouter = require('./controllers/threads')
app.use('/api/threads', threadsRouter)

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})