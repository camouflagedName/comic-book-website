/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/global.css"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import MainComponent from "../components/MainComponent"

const Layout = ({ children, size }: { children: JSX.Element, size?: string }) => (
  <>{children}</>
)

export default Layout
