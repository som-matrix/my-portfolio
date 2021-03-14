import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Global Context
import {
  useGlobalDispatch,
  useGlobalStateContext,
} from "../context/globalContext"
// Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeature from "../components/homePage/HomeFeature"
import HomeAbout from "../components/homePage/HomeAbout"
const IndexPage = () => {
  const  {cursorStyles}  = useGlobalStateContext()
  const dispatch = useGlobalDispatch()
  // const [cursorTypeApplied,setCursorTypeApplied] = useState(false)
  // const cursorStyles = [ "hovered","pointer"]
  const onCursor = (cursorType) => {
   cursorType = (cursorStyles.includes(cursorType) && cursorType)
   dispatch({type:"CURSOR_TYPE",cursorType:cursorType})
  }
  // Togling menu
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <Layout onCursor={onCursor}>
      <SEO title="Home" />
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <HomeAbout />
    </Layout>
  )
}

export default IndexPage
