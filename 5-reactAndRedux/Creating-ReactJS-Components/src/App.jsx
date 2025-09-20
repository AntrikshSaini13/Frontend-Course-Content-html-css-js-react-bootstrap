import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import KgButton from './KgButton'
import {LikeButton} from './LikeButton'
import Hello from './Hello'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello React you are best</h1>
      <Hello></Hello>
      <KgButton></KgButton><br />
      <LikeButton></LikeButton> <br />
      <Random></Random>
      <Random></Random>
      <Random></Random>

    </div>
  )
}

export default App
