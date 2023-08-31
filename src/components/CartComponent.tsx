import { Button, Card, TextInput } from "flowbite-react"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import useImage from "../hooks/useImage"
import { IItem, ICart, ICartContext, IComicBook } from "../interfaces/interfaces"
import comicBooks from "../comicBooks"

const CartComponent = () => {
    const context = useContext<ICartContext>(CartContext);
    const { cart, update, remove } = context;
    const [cartState, setCartState] = useState<ICart>(cart)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [productList, setProductList] = useState<React.ReactNode[]>();

    const updateQuantity = (itemNumber: number, newQuantity: number) => {
        setCartState(prev => {
            const cartCopy = { ...prev };
            if (cartCopy.products && cartCopy.products[itemNumber]) {
                cartCopy.products[itemNumber] = newQuantity;
            }
            return cartCopy;
        })
    }

    const removeItem = (itemNumber: number, quantity: number) => {
        setCartState(prev => {
            const cartCopy = { ...prev };
            if (cartCopy.products && cartCopy.products[itemNumber]) {
                cartCopy.total -= quantity;
                delete cartCopy.products[itemNumber]
            }
            return cartCopy;
        })
    }

    const updateSubtotal = (amount: number) => {
        console.log('STATE ', cartState)
        console.log('CONTEXT ', cart)
        setTotalPrice(prev => prev + amount)
    }

    const updateCart = (subtotal: number, quantity?: number) => {
        console.log('UPDATE CART ', quantity)
        if (quantity) {
            setCartState(prev => {
                prev.total += quantity;
                return prev;
            })
        }
        setTotalPrice(prev => prev + subtotal)
    }

    useEffect(() => {
        setCartState(cart)
        let accTotal = 0;
        for (const productID in cart.products) {
            const productQuantity = cart.products[productID];
            const comicBookPrice = comicBooks[productID].price;
            accTotal = accTotal + productQuantity * comicBookPrice;
        }
        setTotalPrice(accTotal);
    }, [])

    useEffect(() => {
        update(cartState);
    }, [cartState])


    useEffect(() => {
        const holder: React.ReactNode[] = [];
        if (cartState.products) {
            for (const id in cartState.products) {
                const comicBookData: IComicBook = comicBooks[id];
                const quantity = cartState.products[id];

                holder.push(
                    <CartItem
                        key={`${id}-${comicBookData.title}`}
                        img={comicBookData.imgSrc}
                        title={comicBookData.title}
                        price={comicBookData.price}
                        quantity={quantity}
                        index={Number(id)}
                        updateQuantity={updateQuantity}
                        remove={removeItem}
                        updateCart={updateCart} />)
            }
        }

        setProductList(holder)

    }, [cartState])

    return (
        <>
            <div className="flex flex-row justify-center">
                <Card className="w-3/5">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cart
                    </h5>
                    {cartState.total && cartState.total > 0 ?
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {productList}
                                <li className="py-3 sm:py-4">
                                    <div className="flex justify-end">
                                        <Card className="text-center w-1/3">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Subtotal
                                            </h5>
                                            <hr />
                                            <p className="font-semibold text-gray-900 dark:text-white"> ${totalPrice.toFixed(2)}</p>
                                            <Button>
                                                <p> Proceed to Checkout</p>
                                            </Button>
                                        </Card>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        :
                        <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-500 text-center">
                            Your cart is empty!
                        </h6>
                    }
                </Card>
            </div>
        </>
    )
}

export default CartComponent;


const CartItem = ({ img, title, quantity, price, index, updateQuantity, remove, updateCart }:
    { img: string, title: string, quantity: number, price: number, index: number, updateQuantity: (itemNumber: number, newQuantity: number) => void, remove: (itemNumber: number, quantity: number) => void, updateCart: (subtotal: number, quantity?: number) => void }) => {
    const [quantityState, setQuantityState] = useState(quantity);
    const imgSrc = useImage(img)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        const newQuantity = Number(ev.target.value);
        const dQuantity = newQuantity - quantity
        if (newQuantity === 0) remove(index, quantity);
        else updateQuantity(index, newQuantity);
        updateCart(dQuantity * price, dQuantity);
        setQuantityState(newQuantity)

    }

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
        remove(index, quantity);
        updateCart((quantity * price * -1))
    }

    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="w-1/6">
                    <img
                        className=""
                        src={imgSrc}
                        alt=" "
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                        {title}
                    </p>
                    <p className="truncate text-lg text-gray-500 dark:text-gray-400">
                        ${price}
                    </p>
                </div>
                <div>
                    <TextInput type="text" value={quantityState} className="w-1/2" onChange={handleChange} />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${(price * quantity).toFixed(2)}
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-transparent px-5 py-2.5 text-center  focus:outline-none">
                        <svg className="text-blue-400 hover:text-white" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={40}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}