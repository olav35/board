const express = require('express')
const router = express.Router()

router.get('/', (_request, response) => {
  const thread1 = {
    title: 'This board is epic',
    body: 'I really love this board'
  }
  const thread2 = {
    title: 'This board sucks',
    body: 'I really hate this board'
  }
  const dummyThreads = [thread1, thread2]
  response.json(dummyThreads)
})

module.exports = router