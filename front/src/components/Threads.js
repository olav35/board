import React from 'react'
import Header from './Header'

const dummyImageUrl = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic4.wikia.nocookie.net%2F__cb20130713163131%2Fk-on%2Fimages%2F4%2F4b%2FYui_Hirasawa_new_mugshot.png&f=1&nofb=1'

const Thread = ({thread}) => (
  <div class="thread">
    <div class="image-container">
      <img alt="dummy" src={dummyImageUrl} />
    </div>
    <div>
      <b>08/05/20(Wed)00:04:14 No.77082617</b>
      <pre>{thread.body}</pre>
    </div>
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