import React, { use, useEffect, useState } from "react"
import axios from "axios"
export default function Users() {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                
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