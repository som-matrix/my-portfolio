/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
// Components
import Header from "./header"
import CustomCursor from "./customCursor"
import Navigation from "./Navigation"
import Footer from "./footer"
import { useState } from "react"
// Global StateContexts
import {useGlobalStateContext} from '../context/globalContext'
// Global Styles
const GlobalStyles = createGlobalStyle`
 ${normalize}
 *,
 *::before,
 *::after{
     margin:0;
     padding:0;
     box-sizing:border-box;
     cursor:none; 
     text-decoration:none;
 }
 html{
     font-size:16px;
     -webkit-font-smoothing:antialiased;
 }
 body{
     background:${props => props.theme.background};
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     overflow-x:hidden;
     overscroll-behavior:none;
 }
`
const Layout = ({ children,onCursor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {currentTheme} = useGlobalStateContext()
  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea290e",
    
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea290e",
  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} onCursor={onCursor} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor} />
       <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
       />
        <main>{children}</main>
        <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
