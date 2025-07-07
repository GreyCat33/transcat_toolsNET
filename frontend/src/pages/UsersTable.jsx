// src/UsersPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersTable() {
    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    // Fetch users on mount
    useEffect(() => {
        axios.get('/api/users')
            .then(res => setUsers(res.data))
            .catch(console.error);
    }, []);

    // Start editing a row
    const handleEdit = user => {
        setEditingId(user.id);
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber
        });
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingId(null);
        setFormData({ firstName: '', lastName: '', phoneNumber: '' });
    };

    // Track form changes
    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // Save updated row
    const handleSave = async id => {
        try {
            await axios.put(`/api/users/${id}`, { id, ...formData });
            setUsers(users.map(u =>
                u.id === id ? { ...u, ...formData } : u
            ));
            handleCancel();
        } catch (err) {
            console.error(err);
            alert('Failed to update user.');
        }
    };

    // Delete a row
    const handleDelete = async id => {
        if (!window.confirm('Delete this user?')) return;
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter(u => u.id !== id));
        } catch (err) {
            console.error(err);
            alert('Failed to delete user.');
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Users</h2>
            <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>

                            {/* If this row is being edited, show inputs */}
                            {editingId === user.id ? (
                                <>
                                    <td>
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleSave(user.id)}>Save</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user)}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
