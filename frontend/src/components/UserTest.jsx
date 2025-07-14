

import { useEffect,useRef } from 'react';
import { useAuth0 }   from '@auth0/auth0-react';

export default function UserTest() {
  const { isAuthenticated, isLoading, getAccessTokenSilently,user } = useAuth0();
    const hasSynced = useRef(false);
  useEffect(() => {
    if (!isAuthenticated || isLoading) return;
    hasSynced.current = true;        // ← prevents StrictMode double-run

    (async () => {
        const payload = {
        OktaUserId: user.sub,
        email: user.email,
        name: user.nickname,
        roles: user["http://localhost:5173/claims/roles"][0]
    };
      try {
        // 1) get the actual token
        const token = await getAccessTokenSilently();

        // 2) POST to your sync endpoint
        const res = await fetch('/api/webhooks/sync-user', {
          method:  'POST',
          headers: {
            Authorization:  `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          // no body needed if server reads everything from the token
          // remove this if your server endpoint doesn't expect a JSON body
          body: JSON.stringify(payload) 
        });

        if (!res.ok) {
          console.error('Sync failed:', res.status, await res.text());
        } else {
          console.log('Sync successful of user:', user.sub);
        }
      } catch (err) {
        console.error('Error during user sync:', err);
      }
    })();

  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

  return null;
}
