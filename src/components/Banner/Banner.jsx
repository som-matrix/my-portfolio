import React from "react";
import { motion } from "framer-motion";
import { Banner, Intro, BannerTitle, Headline } from "../../styles/homeStyles";

const BannerSection = ({ onCursor }) => {
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
  };
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
  };

  return (
    <Banner onMouseEnter={onCursor}>
      <Intro>
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "anticipate" },
          }}>
          <h2>
            I am <span>SATYA</span> learning Front End Devlopement
          </h2>
        </motion.div>
      </Intro>

      <BannerTitle variants={parent} initial="hidden" animate="show">
        <Headline variants={child}>THINK</Headline>
        <Headline variants={child}>BIG</Headline>
      </BannerTitle>
    </Banner>
  );
};

export default BannerSection;
