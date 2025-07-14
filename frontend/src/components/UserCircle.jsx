
import { useAuth0 } from '@auth0/auth0-react';

export default function UserCircle() {
    const { user } = useAuth0();

    return (
        <div style={{ display: 'flex', alignItems: 'center', padding:"10px 0", margin: "0 10px" }}>
            <img src={user.picture} width={"50px"} alt={user.name} className="user-avatar" />
            
        </div>
    );
}