import React, { use, useEffect, useState } from "react"
import axios from "axios"

// to use the auth token
import { useAuth0 } from "@auth0/auth0-react"
export default function Users() {
    const[users, setUsers] = useState([]);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchUsers = async () => {
            const token = await getAccessTokenSilently();
            try {
                const response = await axios.get('/api/users',{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setUsers(response.data);
                console.log("Users fetched successfully:", response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }

        };
        fetchUsers();
    }, []);

    return (
        <div className="Users">
            <div className="Users__header">
                <h1>Users</h1>
            </div>
            <div className="Users__content">
                <p>This is the Users page.</p>
                <p>Here you can manage users.</p>
                
                    { users.length > 0 ? (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.firstName} - {user.phoneNumber} 
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No users found.</p>
                )}
                
                
            </div>
        </div>
    )
}