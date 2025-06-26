
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import NotFoundPage from './pages/NotFoundPage'
import Nav from './components/Nav'
import './App.css'
import AuthUser from './pages/AuthUser'


function App() {
  return (
    <>
    
    <Nav />

      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path='/authuser' element={<AuthUser />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
