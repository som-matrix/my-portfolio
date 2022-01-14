import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
// import {StaticImage} from 'gatsby-plugin-image'
import { AnimatePresence } from "framer-motion";
import { Container, Flex } from "../../styles/globalStyles";
import {
  AboutComponent,
  AboutText,
  AboutImage,
} from "../../styles/aboutMeStyles";
import Satya from "../../assets/projects/satya.jpg";

const parent = {
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const child = {
  hidden: {
    y: 72,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.5, -0.01, 0.9],
    },
  },
};
const AboutMe = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <AboutComponent
        variants={parent}
        initial="hidden"
        exit="exit"
        animate="visible">
        <Container>
          <Flex spaceBetween>
            <AboutText variants={child}>
              <p>
                I am Satya Swaroop, A B-Tech graduate in electrical engineering
                , turned to become a Frontend Developer in future or if am lucky
                , in coming days. One thing that completely changed me to have a
                passion in life is learnig Web Development. I will be happy as a
                Web developer for my entire life.
              </p>
              <Link to="/">
                <button>Home</button>
              </Link>
            </AboutText>
            <AboutImage
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1.3, ease: "backOut" },
              }}>
              <img src={Satya} alt="my-profile" />
              {/* <StaticImage
                src="../../assets/projects/satya.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="my-profile"
                style={{height:'100%',
                  width:'100%',
                  maxWidth:'100%'}}
              /> */}
            </AboutImage>
          </Flex>
        </Container>
      </AboutComponent>
    </AnimatePresence>
  );
};

export default AboutMe;
