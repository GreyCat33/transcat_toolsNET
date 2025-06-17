import { useState } from 'react'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotFoundPage />
    </>
  )
}

export default App
