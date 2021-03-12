import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// styled-components
import { FlexNav, HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container } from "../styles/globalStyles"
//  Global Context
import {
  useGlobalStateContext,
  useGlobalDispatch,
} from "../context/globalContext"
const Header = ({ siteTitle, toggleMenu, setToggleMenu, onCursor }) => {
  const dispatch = useGlobalDispatch()
  const { currentTheme } = useGlobalStateContext()
  const toggleThemeHandler = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }
  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])
  const [textHovered, setTextHovered] = useState(false)
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      onHoverStart={() => setTextHovered(!textHovered)}
      onHoverEnd={() => setTextHovered(!textHovered)}
    >
      <Container>
        <FlexNav spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">S</Link>
            <span
              aria-hidden="true"
              onClick={toggleThemeHandler}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">M</Link>
          </Logo>
          <Menu>
            <motion.h2
              animate={{ opacity: textHovered ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Projects
            </motion.h2>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <span></span>
              <span></span>
            </button>
          </Menu>
        </FlexNav>
      </Container>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Gatsby-Portfolio`,
}

export default Header
