import React from "react"
// import { ThemeProvider } from "styled-components"
import {
  Banner,
  Intro,
  // Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"
// import { darkTheme, lightTheme } from "../layout"
// Custom hook
// import useWindowSize from "../../hooks/useWindowSize"
const HomeBanner = ({ onCursor }) => {
  // const [theme,setTheme] = useState('light')
  // Animation for Banner Text
  const parent = {
    hidden: {
      opacity: 0,
      y: 800,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    hidden: {
      opacity: 0,
      y: 800,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }
  // Canvas Part
  // const canvas = useRef(null)
  // const size = useWindowSize()
  // useEffect(() => {
  //   let renderingElement = canvas.current
  //   let drawingElement = renderingElement.cloneNode()
  //   // Creating the rendering and Drawing 2d contexts
  //   let drawingContext = drawingElement.getContext("2d")
  //   let renderingContext = renderingElement.getContext("2d")
  //   // Mouse deafult positions
  //   let lastX
  //   let lastY
  //   let moving = false
  //   // setting the global composition mode
  //   renderingContext.globalCompositeOperation = "source-over"
  //   renderingContext.fillStyle = theme === 'light'?setTheme(theme === 'light' &&): setTheme('#ffffff')
  //   renderingContext.fillRect(0, 0, size.width, size.height)

  //   renderingElement.addEventListener("mouseover", e => {
  //     moving = true
  //     lastX = e.pageX - renderingElement.offsetLeft
  //     lastY = e.pageY - renderingElement.offsetTop
  //   })
  //   renderingElement.addEventListener("mouseup", e => {
  //     moving = false
  //     lastX = e.pageX - renderingElement.offsetLeft
  //     lastY = e.pageY - renderingElement.offsetTop
  //   })
  //   renderingElement.addEventListener("mousemove", e => {
  //     if (moving) {
  //       drawingContext.globalCompositeOperation = "source-over"
  //       renderingContext.globalCompositeOperation = "destination-out"
  //       let currentX = e.pageX - renderingElement.offsetLeft
  //       let currentY = e.pageY - renderingElement.offsetTop
  //       drawingContext.lineJoin = "round"
  //       drawingContext.moveTo(lastX, lastY)
  //       drawingContext.lineTo(currentX, currentY)
  //       drawingContext.closePath()
  //       drawingContext.lineWidth = 120
  //       drawingContext.stroke()
  //       lastX = currentX
  //       lastY = currentY
  //       renderingContext.drawImage(drawingElement, 0, 0)
  //     }
  //   })
  // }, [theme, size.height, size.width,setTheme])
  return (
    // <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
      <Banner onMouseEnter={onCursor}>
        <Intro>
          <div className="intro-text">
            <h2>
              I am <span>SATYA</span> learning Front End Devlopement
            </h2>
          </div>
        </Intro>
        {/* <Canvas
          height={size.height}
          width={size.width}
          key={theme}
          ref={canvas}
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        /> */}
        <BannerTitle variants={parent} initial="hidden" animate="show">
          <Headline variants={child}>THINK</Headline>
          <Headline variants={child}>BIG</Headline>
        </BannerTitle>
      </Banner>
    //  </ThemeProvider>
  )
}

export default HomeBanner
