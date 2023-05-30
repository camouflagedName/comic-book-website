import React, { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ICartItem } from "../interfaces/interfaces";


const CartWrapper = ({ children }) => {
    const [cart, setCart] = useState<ICartItem[]>([]);
    const [isUpdated, setIsUpdated] = useState(false);

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
        setIsUpdated(true);
    }

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.removeItem('cart')
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const storedCartData = JSON.parse(storedCart);
            setCart(storedCartData)
        }
    }, [])

    useEffect(() => {
        if (isUpdated) {
            localStorage.removeItem('cart')
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [isUpdated])


    return (
        <CartContext.Provider value={{ cart, add, remove, update }}>{children}</CartContext.Provider>
    )
}

export default CartWrapper;