import React, { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IItem, ICart, Add, Remove, Update } from "../interfaces/interfaces";


const CartWrapper = ({ children }) => {
    const storedCart = localStorage.getItem('cart');
    let storedCartData = {
        products: {},
        total: 0,
    }
    if (storedCart) {
        storedCartData = JSON.parse(storedCart);
    }
    const [cart, setCart] = useState<ICart>(storedCartData);
    const [isUpdated, setIsUpdated] = useState(false);

    const add: Add = (newItem: IItem) => {
        const id = Object.keys(newItem)[0];
        setCart(prev => {
            if (prev) {
                if (prev.products[id]) prev.products[id] += newItem[id]
                else prev.products = { ...prev.products, ...newItem };
                prev.total += newItem[id];
            }
            console.log(prev)
            return prev;
        })
    }

    const remove: Remove = (newItem: IItem) => {
        const id = Object.keys(newItem)[0];
        setCart(prev => {
            if (prev) {
                prev.total -= newItem[id];
                prev.products[id] -= newItem[id];
                if (prev.products[id] === 0) delete prev.products[id];
            }
            return prev;
        })
    }

    const update: Update = (updatedCart: ICart) => {
        setCart(updatedCart);
        setIsUpdated(true);
    }

    useEffect(() => {
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(cart))

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