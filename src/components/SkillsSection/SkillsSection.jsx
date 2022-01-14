import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Global Sttyled Components
import { Container, Flex } from "../../styles/globalStyles";
import { HomeAboutSection, About, Services } from "../../styles/homeStyles";
import Accordion from "../Accordion/Accordion";

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

const SkillsSection = () => {
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

export default SkillsSection;
