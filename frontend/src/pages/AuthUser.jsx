import { useAuth0 } from '@auth0/auth0-react';

import AdminReport from '../components/AdminReport';
import UserCard from '../components/User Info/UserCard';
import DownloadButton from '../components/UI/DownloadButton';
export default function AuthUser() {
    const { isLoading } = useAuth0();
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
            {isLoading && <div>Loading...</div>}
            <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
                <div>
                    <h1>Users Report</h1>
                </div>
                <div style={{alignSelf:"flex-end"}}>
                    
                    <DownloadButton />
                </div>
                
            </div>
            <AdminReport />
        </div>
    );
}

// As a way to test the cookies one will see from an authenticated user, we rely on the
// isAuthenticated and isLoading states from the Auth0 hooks. We do allow access to the page
// if the user is not authenticated but we ask that they log in. From this we can use this as a template
// example if we want to show different content based on the authentication state.