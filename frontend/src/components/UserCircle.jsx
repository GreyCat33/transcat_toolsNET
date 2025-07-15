
import { useAuth0 } from '@auth0/auth0-react';
import {useState} from 'react';
import UserMenu from './UserMenu';
export default function UserCircle() {
    const { user,logout } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () =>
        logout({returnTo: window.location.origin});

    return (
      
        <div 
            
            style={
                { 
                    display: 'inline-flex',
                    position:"relative", 
                    alignItems: 'center', 
                    padding:"10px 0", 
                    margin: "0 10px",
                    cursor:"pointer"

                   
                }
            }>
            <img src={user.picture} 
                width={"50px"} 
                alt={user.name} 
                style={{borderRadius:"50%", display:"block", cursor:"pointer"}}
                onMouseEnter={() => setIsOpen(true)}
                
            />
            {isOpen && 
                <UserMenu 
                    user={user} 
                    onLogout={handleLogout}
                    onMouseLeave={() => setIsOpen(false)}
                />
            }
        </div>
        
    );
}