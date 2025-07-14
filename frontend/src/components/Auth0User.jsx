import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
export default function Auth0User() {
  const { user, getIdTokenClaims } = useAuth0();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getIdTokenClaims().then(claims => {
      setRoles(claims['http://localhost:5173/claims/roles'] || []);
    });
  }, [getIdTokenClaims]);

  return (
    <div>
      <h4>Welcome, {user.name}</h4>
      <h3>Your Roles:</h3>
      <ul>{roles.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}
