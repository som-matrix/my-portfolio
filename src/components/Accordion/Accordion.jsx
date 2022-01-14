import React, { useState } from "react";
import { useGlobalStateContext } from "../../context/globalContext";
import {
  AccordionBox,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles";
import { motion } from "framer-motion";

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

export default Accordion;
