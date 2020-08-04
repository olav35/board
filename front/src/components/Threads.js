import React from 'react'

const Threads = ({threads}) => (
  <div>
    {
      threads.map((_, index) => <p key={index}>dummy thread</p>)
    }
  </div>
)

export default Threads