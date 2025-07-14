// AdminReport.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function AdminReport() {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      const res   = await axios.get('/api/webhooks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setData(res.data);
      
    })();
  }, [getAccessTokenSilently]);
  console.log("report data:", data);
  return (
    <table>
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Roles</th></tr>
      </thead>
      <tbody>
        {data.map(u => (
          <tr key={u.id}>
            <td>{u.oktaUserId}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.roles}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default withAuthenticationRequired(AdminReport, {
  onRedirecting: () => <div>Loading…</div>
});
