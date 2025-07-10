import { useAuth0 } from '@auth0/auth0-react';
import OktaUser from '../components/OktaUser';
import Auth0User from '../components/Auth0User';
import AdminReport from '../components/AdminReport';
export default function AuthUser() {
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


            <h3>Auth0 User Info</h3>
            <Auth0User />

            {/* <AdminReport /> */}
        </div>
    );
}

// As a way to test the cookies one will see from an authenticated user, we rely on the
// isAuthenticated and isLoading states from the Auth0 hooks. We do allow access to the page
// if the user is not authenticated but we ask that they log in. From this we can use this as a template
// example if we want to show different content based on the authentication state.