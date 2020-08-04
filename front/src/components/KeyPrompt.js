import React from 'react'

const KeyPrompt = ({ newKey, setNewKey, setKey }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    setKey(newKey)
    setNewKey('')
  }

  return (
    <div id="key-prompt">
      <div id="key-prompt-inner">
        <h2>You found the lock, now find the key</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newKey} onChange={(event) => setNewKey(event.target.value)}/>
        </form>
      </div>
    </div>
  )
}

export default KeyPrompt