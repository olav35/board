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
  const thread3 = {
    title: 'This board is alright',
    body: 'I think it is just ok'
  }
  const thread4 = {
    title: 'some more dummy data',
    body: 'dummmmmmieee\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n dolor sit amet'
  }
  const dummyThreads = [thread1, thread2, thread3, thread4]
  response.json(dummyThreads)
})

module.exports = router