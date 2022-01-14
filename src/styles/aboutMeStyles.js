import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutComponent = styled(motion.div)`
  position: relative;
  height: 95vh;
  width: 100%;
  margin-top: 200px;
`;

export const AboutText = styled(motion.div)`
  padding-right: 20px;
  display: block;
  button {
    outline: none;
    border: none;
    background: ${(props) => props.theme.red};
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 30px;
    margin: 15px 0;
    color: #fff;
  }
  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    line-height: 1.6;
    @media (max-width: 950px) {
      text-align: left;
      line-height: 1.4;
    }
  }
`;

export const AboutImage = styled(motion.div)`
  img {
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;
