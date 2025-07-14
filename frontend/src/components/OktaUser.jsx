import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthUser() {
  const { getAccessTokenSilently } = useAuth0();
  const [profile, setProfile]     = useState(null);

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      const res   = await axios.get('/api/okta', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(res.data);
    })();
  }, [getAccessTokenSilently]);

  if (!profile) return <div>Loading…</div>;

  return (
    <div>
      <h2>Welcome, {profile.name}</h2>
      <p>Email: {profile.email}</p>
      <h3>Your Roles</h3>
      <ul>{profile.roles.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}
