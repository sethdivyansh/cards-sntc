import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CopsCard from './components/cops'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CopsCard />
    </>
  )
}

export default App
