import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGlobalStateContext } from "../../context/globalContext";
// Global Sttyled Components
import { Container, Flex } from "../../styles/globalStyles";
import {
  HomeAboutSection,
  About,
  Services,
  AccordionBox,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles";

const accordionContents = [
  {
    id: 0,
    title: "UI-UX",
    results: ["Figma", "Framer-motion"],
  },
  {
    id: 1,
    title: "Frontend-skills",
    results: ["HTML5", "CSS3", "Javascript", "Styled-components"],
  },
  {
    id: 2,
    title: "Preprocessor-Transpiler",
    results: ["SASS", "Typescript"],
  },
  {
    id: 3,
    title: "Javascript-library",
    results: ["React"],
  },
  {
    id: 4,
    title: "Static-frameowrks",
    results: ["Gatsby", "Next"],
  },
];

const HomeAbout = () => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [aboutRef, inView, animation]);
  return (
    <HomeAboutSection
      ref={aboutRef}
      initial="hidden"
      animate={animation}
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
      }}>
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Too bad! Same old story! Once you’ve finished building your house
              you notice you’ve accidentally learned something that you really
              should have known—before you started.
            </h2>
            <p>
              I look at the many colors before me. I look at my blank canvas.
              Then, I try to apply colors like words that shape poems, like
              notes that shape music.
            </p>
          </About>
          <Services>
            <h3>Skills</h3>
            {accordionContents.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [isHovered, setIsHovered] = useState(false);
  const { currentTheme } = useGlobalStateContext();
  return (
    <AccordionBox>
      <AccordionHeader
        transition={{ duration: 0.2, ease: [0.6, 0.5, -0.01, 0.9] }}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setIsHovered(!isHovered)}
        onHoverEnd={() => setIsHovered(!isHovered)}
        whileHover={{ color: currentTheme === "dark" ? "#ffffff" : "#000000" }}>
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || isHovered ? 0 : 45, x: 3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.5, -0.01, 0.9],
            }}></motion.span>
          <motion.span
            animate={{ rotate: isOpen || isHovered ? 0 : -45, x: -3 }}
            transition={{
              duration: 0.2,
              ease: [0.6, 0.5, -0.01, 0.9],
            }}></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.5, -0.01, 0.9] }}>
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </AccordionBox>
  );
};
export default HomeAbout;
