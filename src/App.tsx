import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button/>
    </div>
  )
}

export default App
