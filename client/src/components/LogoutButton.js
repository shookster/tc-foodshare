import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button type="button" className="btn btn-primary btn-md" onClick={() =>logout()} >
            Logout 

        </button>
    )
}

export default LogoutButton