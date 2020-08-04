import React from 'react'
import Header from './Header'

const Thread = ({thread}) => (
  <div class="thread">
    <div class="post-number">#1</div>
    <button class="responses">[ 10 replies ]</button>
    <h3>{thread.title}</h3>
    <p>{thread.body}</p>
  </div>
)

const Threads = ({threads}) => (
  <div>
    <Header/>
    <div id="thread-container">
      {
        threads.map((thread, index) => <Thread key={index} thread={thread}/>)
      }
    </div>
  </div>
)

export default Threads