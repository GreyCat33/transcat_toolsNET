import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Logout() {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
}