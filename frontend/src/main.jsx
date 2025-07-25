import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route, Routes } from 'react-router-dom';

//For stage release 1.0 we wont need okta
// const domain = import.meta.env.VITE_Okta_Domain
// const clientId = import.meta.env.VITE_Okta_Client_Id;
// const audience = import.meta.env.VITE_AUTH0_AUDIENCE

//We wrap our main path of the app page to require authentication,
// After the user logs in, they will be redirected to the main page
createRoot(document.getElementById('root')).render(
  
    //Uncomment all this upon release of Okta details
    // <Auth0Provider
    //     domain= {domain}
    //     clientId= {clientId}
    //     authorizationParams={{
    //     redirect_uri: window.location.origin,
    //     audience: audience
    //   }}
    // >
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          
            <StrictMode>
                <App />
              </StrictMode>
          
          } />
      </Routes>
      
        
      </BrowserRouter>
      // </Auth0Provider>
  );