import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CustomerContext } from './CustomerContext';

import cartService from '~/services/CartService';

import { AppContext } from '~/AppContext';

function Customer() {
    const { accessToken } = useContext(AppContext);
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
