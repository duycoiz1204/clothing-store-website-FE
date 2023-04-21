import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { CustomerContext } from './CustomerContext';

import useCredentials from '~/hooks/useCredentials';

import cartService from '~/services/CartService';

function Customer() {
    const { accessToken, saveCredentials, clearCredentials } = useCredentials();
    const [cart, setCart] = useState();

    // Get lastest cart data
    useEffect(() => {
        let ignore = false;

        const fetchCart = async () => {
            const data = await cartService.getCart(accessToken);
            if (!ignore) {
                setCart(data);
            }
        };
        !cart && fetchCart();

        return () => (ignore = true);
    }, [cart, accessToken]);

    return (
        <React.StrictMode>
            <CustomerContext.Provider
                value={{
                    accessToken,
                    saveCredentials,
                    clearCredentials,
                    cart,
                    setCart,
                }}
            >
                <Outlet />
            </CustomerContext.Provider>
        </React.StrictMode>
    );
}

export default Customer;
