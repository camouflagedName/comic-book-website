import React, { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ICartItem } from "../interfaces/interfaces";

let storedCartData;
const storedCart = localStorage.getItem('cart');
if (storedCart) {
    storedCartData = JSON.parse(storedCart);
}
const CartWrapper = ({ children }) => {
    const [cart, setCart] = useState<ICartItem[]>(storedCartData ?? []);

    const add = (newItem: ICartItem) => {
        setCart(prev => [...prev, newItem])
    }

    const remove = () => {
        setCart(prev => {
            const cartCopy = [...prev];
            cartCopy.pop()
            return cartCopy;
        })

    }

    const update = (updatedCart: ICartItem[]) => {
        setCart(updatedCart);
    }

    useEffect(() => {
        console.log(cart)
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return (
        <CartContext.Provider value={{ cart, add, remove, update }}>{children}</CartContext.Provider>
    )
}

export default CartWrapper;