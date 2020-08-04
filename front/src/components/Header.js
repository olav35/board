import React from 'react'
import banner from './banner.png'

const Header = () => (
  <div id="header">
    <img src={banner} alt="banner" />
    <div id="board-title">board.fossegr.im</div>
    <div id="thread-starter">
      [<button>Start a New Thread</button>]
    </div>
  </div>
)

export default Header