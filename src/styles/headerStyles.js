import styled, { css } from "styled-components";
import { motion } from "framer-motion";
export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  z-index: 99;
`;
export const FlexNav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
export const Logo = styled.div`
  a {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.text};
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${(props) => props.theme.red};
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
    margin: 0 5px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: ${(props) => props.theme.text};
  }
  button {
    outline: none;
    border: none;
    background: none;
    transform-origin: center;
    padding: 20px;

    span {
      height: 7.5px;
      width: 35px;
      display: block;
      background: ${(props) => props.theme.text};
      margin: 8px;
      border-radius: 2px;
    }
  }
`;
