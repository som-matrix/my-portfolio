import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// Components
import SEO from "../Seo";
import Header from "../Header/Header";
import CustomCursor from "../CustomCursor";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";

// // Global StateContexts
import {
  useGlobalStateContext,
  useGlobalDispatch,
} from "../../context/globalContext";
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
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     overflow-x:hidden;
     overscroll-behavior:none;
     background: ${(props) => props.theme.background};
     height:100vh;
     width:100%;
 }
`;
export const darkTheme = {
  background: "#000",
  text: "#fff",
  red: "#ea290e",
};
export const lightTheme = {
  background: "#fff",
  text: "#000",
  red: "#ea290e",
};

const Layout = ({ children, seoTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatch();
  const onCursor = (cursorType) => {
    cursorType = cursorStyles.includes(cursorType) && cursorType;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  // const {currentTheme} = useGlobalStateContext()
  const [theme, setTheme] = useState("light");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <SEO title={seoTitle} />
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} onCursor={onCursor} />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        theme={theme}
        setTheme={setTheme}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      {children}
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
