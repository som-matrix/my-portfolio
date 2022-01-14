import styled from "styled-components";
import { motion } from "framer-motion";

export const Banner = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.background};
  margin-bottom: 296px;
`;
export const Intro = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 0 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .intro-text {
    h2 {
      font-size: 6rem;
      text-align: center;
      font-weight: 900;
      color: ${(props) => props.theme.text};
      text-transform: uppercase;
      span {
        color: ${(props) => props.theme.red};
      }
      @media (max-width: 950px) {
        font-size: 3.2rem;
        padding: 0;
        margin: 0;
        text-align: center;
      }
    }
  }
`;

// export const Canvas = styled.canvas`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   display: block;
// `
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -117px;
  left: -18px;
  pointer-events: none;
  color: ${(props) => props.theme.text};
`;
export const Headline = styled(motion.span)`
  font-size: 18rem;
  font-weight: 900;
  display: block;
  line-height: 0.76;
  @media (max-width: 950px) {
    font-size: 8rem;
  }
`;
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 300px;
`;

export const Content = styled.h2`
  font-size: 2.5rem;
  width: 55%;
  color: ${(props) => props.theme.text};
  @media (max-width: 950px) {
    font-size: 1.8rem;
    width: 100%;
  }
`;
// Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  display: block;
  a {
    margin-bottom: 200px;
    display: block;
    /* position: relative; */
  }
`;

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: auto;
  box-sizing: border-box;
  color: #000;
  line-height: 1;
  padding: 56px 124px;
  h3 {
    font-size: 1.4rem;
  }
  span {
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 950px) {
    padding: 0;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
      @media (max-width: 950px) {
        padding: 10px 0;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 5.5rem;
    font-weight: 900;

    @media (max-width: 950px) {
      text-align: left;
      font-size: 3rem;
      bottom: -100px;
      margin: 0;
      width: 100%;
    }
    .arrow {
      position: relative;
      height: 80px;
      width: 120px;
      overflow: hidden;
      display: block;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

export const FeaturedPhoto = styled.div`
  position: absolute;
  height: 408px;
  width: 100%;
  top: 0;
  z-index: -1;
  overflow: hidden;
  display: block;
  img {
    height: 1200px;
    width: 100%;
    object-fit: cover;
    @media (max-width: 950px) {
      max-width: 100%;
    }
  }
`;

export const FeaturedProject = styled(motion.div)`
  margin-top: 200px;
  button {
    border: none;
    outline: none;
    background: ${(props) => props.theme.red};
    color: #fff;
    padding: 20px;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    display: block;
    text-align: left;
    @media (max-width: 950px) {
      display: none;
    }
    span {
      margin-right: 100px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 10px;
      height: 7px;
      width: 35px;
      background: #fff;
      transform: translateY(-50%);
      display: block;
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`;
/* Thoughts-About-Javascript Section */
export const HomeAboutSection = styled(motion.div)`
  color: ${(props) => props.theme.text};
`;
export const About = styled.div`
  width: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    width: 60%;
    color: ${(props) => props.theme.text};
    margin-left: 124px;
    @media (max-width: 950px) {
      font-size: 1.5rem;
      width: 100%;
      text-align: left;
      margin: 0;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    width: 440px;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
    /* max-width: 440px; */
    line-height: 1.6;
    margin-top: 10px;
    @media (max-width: 950px) {
      margin: 0;
      text-align: left;
      padding-top: 10px;
      width: 100%;
    }
  }
`;

export const Services = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
  }
`;

/* Accordion */
export const AccordionBox = styled.div``;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-weight: 1.15rem;
  font-weight: 600;
  color: ${(props) => props.theme.red};
`;

export const AccordionIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  height: 100%;
  span {
    height: 4px;
    width: 18px;
    background: ${(props) => props.theme.red};
    transition: 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  margin-left: 48px;
  span {
    display: block;
    color: ${(props) => props.theme.red};
    font-size: 1rem;
    font-weight: 400;
    margin: 8px 0;
    width: 100%;
  }
`;
