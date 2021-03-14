import React,{useEffect} from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Global Styles
import { Container, Flex } from "../styles/globalStyles"
// Footer Styles
import {
  FooterSection,
  FooterContent,
  FooterSocial,
} from "../styles/footerStyles"
// Social Icons
import {
  Instagram,
  LinkedIn,
  Github,
  Dribble,
} from "../assets/svg/social-icons"
const Footer = ({ onCursor }) => {
  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-200px",
  })
  useEffect(()=>{
      if(inView){
          animation.start("visible")
      }
  },[animation,inView]);
  return (
    <FooterSection
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        hidden: { y: 70, opacity: 0 },
      }}
    >
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>907.809.1375</p>
            <p>swaroopsatya36@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>Talcher,Odisha</p>
            <p>India</p>
          </FooterContent>
          <FooterSocial
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <a href="https://www.instagram.com/satya9931/">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/satya-mohapatra-5b1839193/">
              <LinkedIn />
            </a>
            <a href="https://github.com/som-matrix">
              <Github />
            </a>
            <a href="https://dribbble.com/satTsom">
              <Dribble />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterSection>
  )
}

export default Footer