
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: location.pathname } });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, location]);

  if (isLoading || !isAuthenticated) {
    return <div>Loading…</div>;
  }

  return children;
}

// The RequireAuth component checks if the user is authenticated. If not we are prompted to log in.
// This will then return the app component and load the page. This was created to run when the index page is loaded, this component
// will render first. 