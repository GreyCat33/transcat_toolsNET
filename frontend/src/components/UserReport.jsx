import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import "./adminreport.css"
export default function AdminReport() {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState([]);
  const [tableNumber, setTableNumber] = useState(0)
  
  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      const res = await axios.get('/api/webhooks', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setData(res.data);

    })();
  }, [getAccessTokenSilently]);
 

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, indx) => (
            <tr key={user.id} className='highlight-row'>
              <td>{indx + 1}</td>
              <td>{user.oktaUserId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}