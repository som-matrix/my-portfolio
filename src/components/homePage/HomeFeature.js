import React, { useState, useEffect } from "react";
import { Link } from "gatsby-plugin-react-i18next";
// import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// Styled Components
import { Container, Flex } from "../../styles/globalStyles";
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedPhoto,
  FeaturedProject,
} from "../../styles/homeStyles";
// Image
import Satya from "../../assets/projects/satya.jpg";
const HomeFeature = ({ onCursor }) => {
  const animation = useAnimation();
  const [featuredRef, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [featuredRef, inView, animation]);
  // Hovered Animation
  const [hovered, setHovered] = useState(false);
  return (
    <HomeFeaturedSection
      ref={featuredRef}
      initial="hidden"
      animate={animation}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.6, 0.5, -0.01, 0.9],
          },
        },
        hidden: { y: 70, opacity: 0 },
      }}>
      <Container>
        <Link to="/about/">
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}>
            <Flex spaceBetween>
              <h3>Hello Everyone</h3>
              <motion.div
                animate={{
                  opacity: hovered ? 1 : 0,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="meta">
                <h4>Satya Swaroop</h4>
                <h4>@2021</h4>
              </motion.div>
            </Flex>
            <div className="featured-title">
              <h2>
                ABOUT <br /> <span>ME</span>
                <span className="arrow">
                  <motion.svg
                    animate={{
                      x: hovered ? 48 : 0,
                      transition: {
                        duration: 0.3,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      },
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57">
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#FFF"
                      fillRule="evenodd"></path>
                  </motion.svg>
                </span>
              </h2>
            </div>
          </FeaturedContent>
          <FeaturedPhoto>
            <img src={Satya} alt="my=profile" />
            {/* <StaticImage
              src="../../assets/projects/satya.jpg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="my-profile"
              style={{height:'1200px',maxWidth:'100%',objectFit:'cover',}}
            /> */}
          </FeaturedPhoto>
        </Link>
      </Container>
      <Container>
        <FeaturedProject
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}>
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProject>
      </Container>
    </HomeFeaturedSection>
  );
};

export default HomeFeature;
