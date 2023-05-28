import React from "react"
import { Navbar } from "flowbite-react"
import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"
import useImage from "../hooks/useImage"

const NavbarComponent = () => {
const context = useContext(CartContext);
const { cart } = context;
const imgSrc = useImage("Artboard2_cropped.png");

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
                    <Navbar.Link href="/" active={true} >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/comics" >
                        Comics
                    </Navbar.Link>
                    <Navbar.Link href="/about" >
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/contact">
                        Contact
                    </Navbar.Link>
                    <Navbar.Link href="/cart">
                        Cart
                        { cart.length > 0 && <span>{` (${cart.length})`}</span> }
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;