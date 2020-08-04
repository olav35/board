import React from 'react'

const Thread = ({thread}) => (
  <div>
    <h3>{thread.title}</h3>
    <p>{thread.body}</p>
  </div>
)

const Threads = ({threads}) => (
  <div>
    {
      threads.map((thread, index) => <Thread key={index} thread={thread}/>)
    }
  </div>
)

export default Threads