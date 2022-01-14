import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Flex } from "../styles/globalStyles";
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavProjects,
  NavFooter,
} from "../styles/navigationStyles";
import { FooterContent, FooterSocial } from "../styles/footerStyles";
import {
  Instagram,
  LinkedIn,
  Github,
  Dribble,
} from "../assets/svg/social-icons";
import { FlexNav } from "../styles/headerStyles";
// Images
import Ignite from "../assets/ignite-game-search.png";
import Music from "../assets/Music App.jpg";
import Movie from "../assets/Homepage.png";
import Capture from "../assets/Capture Portfolio.jpg";
import Todo from "../assets/Todo App.jpg";
import Landing from "../assets/Landing Page.jpg";

// All project routes
const reactProjects = [
  {
    id: 0,
    title: "Ignite Search",
    path: "https://ignite-search.netlify.app/",
    image: Ignite,
  },
  {
    id: 1,
    title: "Music App",
    path: "https://wave-music-satya.netlify.app/",
    image: Music,
  },
  {
    id: 2,
    title: "Capture Portfolio",
    path: "https://capture-satya.netlify.app/",
    image: Capture,
  },
  {
    id: 3,
    title: "Movieflicks",
    path: "https://movieflicks-search-anything.netlify.app/",
    image: Movie,
  },
  {
    id: 4,
    title: "Todo App",
    path: "https://som-todo-app.netlify.app/",
    image: Todo,
  },
  {
    id: 5,
    title: "Landing Page",
    path: "https://bookmark-landing-som.netlify.app/",
    image: Landing,
  },
];

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealImage, setRevealImage] = useState({
    show: false,
    image: Ignite,
    key: "0",
  });
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%", transition: { duration: 0.8 } }}
            animate={{ x: toggleMenu ? "0%" : "-100%" }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}>
            <Container>
              <NavHeader>
                <FlexNav spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav>
                    <button
                      onClick={() => setToggleMenu(!toggleMenu)}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                    </button>
                  </CloseNav>
                </FlexNav>
              </NavHeader>
              <NavList>
                <ul>
                  {reactProjects.map((project) => (
                    <li
                      key={project.id}
                      // onMouseEnter={() => onCursor("pointer")}
                      // onMouseLeave={onCursor}
                    >
                      <a
                        onMouseEnter={() => onCursor("pointer")}
                        onMouseLeave={onCursor}
                        href={`${project.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.3,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          onHoverStart={() =>
                            setRevealImage({
                              show: true,
                              image: project.image,
                              key: project.id,
                            })
                          }
                          onHoverEnd={() =>
                            setRevealImage({
                              show: false,
                              image: project.image,
                              key: project.id,
                            })
                          }
                          className="link">
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57">
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"></path>
                            </svg>
                            {project.title}
                          </span>
                        </motion.div>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavList>
              <NavProjects>
                <motion.div
                  animate={{ width: revealImage.show ? "0%" : "100%" }}
                  className="reveal"></motion.div>
                <div className="image">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.img
                      key={revealImage.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                      src={revealImage.image}
                      alt={revealImage.image}
                    />
                  </AnimatePresence>
                </div>
              </NavProjects>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>swaroopsatya36@gmail.com</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>Talcher,Odisha,India</p>
                  </FooterContent>
                  <FooterSocial
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}>
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
              </NavFooter>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
