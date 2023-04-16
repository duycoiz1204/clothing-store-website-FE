import { useState } from 'react';

function useCredentials() {
    const getCredentials = () => {
        const credentialsString = localStorage.getItem('credentials');
        const credentials = JSON.parse(credentialsString);
        return credentials?.accessToken;
    };

    const [accessToken, setAccessToken] = useState(getCredentials());

    const saveCredentials = (credentials) => {
        localStorage.setItem('credentials', JSON.stringify(credentials));
        setAccessToken(credentials.accessToken);
    };

    const clearCredentials = () => {
        localStorage.removeItem('credentials');
        setAccessToken();
    };

    return { accessToken, saveCredentials, clearCredentials };
}

export default useCredentials;
