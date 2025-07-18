import { useAuth0 } from '@auth0/auth0-react';
export default function UserAuthJson () {
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {isLoading && <div>Loading...</div>}
                {isAuthenticated && user && (
                    <div>
                        <h2>User Information</h2>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                    </div>
                )}
                {!isAuthenticated && <div>Please log in to see your information.</div>}
    
                <UserCard AuthUserdata={user} />
                <AdminReport />
            </div>
        );
}