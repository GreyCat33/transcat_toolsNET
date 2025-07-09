
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import NotFoundPage from './pages/NotFoundPage'
import Nav from './components/Nav'
import './App.css'
import AuthUser from './pages/AuthUser'
import UsersTable from './pages/UsersTable'
import Logout from './pages/Logout'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import PricingDBTests from './pages/PricingDBTests'


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
          <Route path="/userreport" element={<UsersTable />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pricing" element={<PricingDBTests />} />
        </Routes>
      </div>
    </>

  )
}

// We can use the Okta guard instead of the RequireAuth component 

export default withAuthenticationRequired(App, {
  onRedirecting: () => <div>Loading...</div>,
});

//export default App
