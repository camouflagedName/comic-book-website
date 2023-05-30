import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import CartComponent from "../components/CartComponent"

const CartPage = () => (
    <Layout>
       <CartComponent />
    </Layout>
)

export const Head = () => <Seo title="Shopping Cart" description="Your description"></Seo>

export default CartPage