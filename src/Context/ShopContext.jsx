import React, { createContext, useState } from 'react';
import all_product from "../Components/content_files/all_product.js"

export const ShopContext = createContext(null)
     
const getDefaultCart = () => {
    let cart = {}                                                               //key is product's id and value is number products in cart.
    for (let index = 0; index < all_product.length + 1; index++) {
            cart[index] = 0            
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    // console.log(cartItems)

    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
    console.log(cartItems)
            return totalAmount;
        }
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount}

    console.log(getTotalCartAmount())
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;