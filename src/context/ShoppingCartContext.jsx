import React, { createContext, useContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext( {} )

function ShoppingCartContextProvider( { children } ) {

    const [ cart, setCart ] = useState( [] )

    function addToCart(item) {
        setCart([
            ...cart,
            item
        ] )
    }

    const contextData = {
        cart,
        addToCart
    }

    return (
        <ShoppingCartContext.Provider value={ contextData }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartContextProvider;