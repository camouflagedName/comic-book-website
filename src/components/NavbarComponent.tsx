import React from "react"
import { Navbar } from "flowbite-react"
import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"
import useImage from "../hooks/useImage"
import { ICart } from "../interfaces/interfaces"
import { Link } from "gatsby"

const NavbarComponent = () => {
    const context = useContext(CartContext);
    const { cart } = context as { cart: ICart }
    const imgSrc = useImage("Artboard2_cropped.png");
    const cartTotal = cart ? cart.total : 0;
    const activeCSS = "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700";
    const inactiveCSS = "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"

    /*
    if (cart && cart.length > 0) for(const item of cart) {
        cartTotal += item.quantity
    }
    */

    return (
        <div className="mb-auto">
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand to="/navbars" >
                    <img src={imgSrc} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Simon Conway
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link to="/" activeClassName={activeCSS} className={inactiveCSS}>
                        Home
                    </Link>
                    <Link to="/comics" activeClassName={activeCSS} className={inactiveCSS}>
                        Comics
                    </Link>
                    <Link to="/about" activeClassName={activeCSS} className={inactiveCSS}>
                        About
                    </Link>
                    <Link to="/contact" activeClassName={activeCSS} className={inactiveCSS}>
                        Contact
                    </Link>
                    <Link to="/cart" activeClassName={activeCSS} className={inactiveCSS}>
                        Cart
                        <span>{` (${cartTotal})`}</span>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;