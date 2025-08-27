import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KgButton from './KgButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello React you are best</h1>
      <KgButton></KgButton>
    </div>
  )
}

export default App
