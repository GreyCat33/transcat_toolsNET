import { useAuth0 } from '@auth0/auth0-react';

export default function Logout() {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    return (
        <button 
            style={{
                margin:"0 10px", 
                background: "rgb(63, 81, 181)",
                color:"#fff"
            }} 
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}