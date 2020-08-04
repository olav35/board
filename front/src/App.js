import React, { useState, useEffect } from 'react'
import './App.css'
import KeyPrompt from './components/KeyPrompt'
import Threads from './components/Threads'
import threadService from './services/threads'

const App = () => {
  const [newKey, setNewKey] = useState('')
  const [threads, setThreads] = useState(null)
  const [key, setKey] = useState(null)

  useEffect(() => {
    if(key === null){
      return
    }
    const fetchThreads = async () => {
      const threads = await threadService.getAll(key)
      setThreads(threads)
    }
    fetchThreads()
  }, [key])

  return (
    threads
      ? <Threads threads={threads} />
      : <KeyPrompt newKey={newKey} setNewKey={setNewKey} setKey={setKey} />
  )
}

export default App;
