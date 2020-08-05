import React, { useState } from 'react'
import ThreadForm from './ThreadForm'
import banner from './banner.png'

const Header = () => {
  const [showThreadForm, setShowThreadForm] = useState(false)

  return (
    <div id="header">
      <img src={banner} alt="banner" />
      <div id="board-title">board.fossegr.im</div>
      {
        showThreadForm
          ? <ThreadForm />
          : (
            <div id="thread-starter">
              [<button onClick={_ => setShowThreadForm(true)}> Start a New Thread</button>]
            </div>
          )
      }
    </div>
  )
}

export default Header