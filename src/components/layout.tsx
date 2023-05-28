/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/global.css"
import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"
import MainComponent from "./MainComponent"
import { CartContext } from "../context/CartContext"
import { ICartItem } from "../interfaces/interfaces"

const Layout = ({ children, size }: {children: JSX.Element, size?: string}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className="h-screen flex flex-col bg-black">

        <NavbarComponent />
        <MainComponent size={size}>
          {children}
        </MainComponent>
        <FooterComponent />

    </div>
  )
}

export default Layout
