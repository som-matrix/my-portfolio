import styled from "styled-components"
import { motion } from "framer-motion"
export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  background: ${props => props.theme.red};
  display: block;
  color: #000;
`

export const NavHeader = styled.div`
  position: relative;
  top: 72px;
  h2 {
    color: ${props => props.theme.background};
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    background: none;
    outline: none;
    border: none;
    padding: 20px;
    span {
      display: block;
      width: 35px;
      height: 8px;
      background: ${props => props.theme.background};
      margin: 8px;
    }
    .line1 {
      transform: rotate(-45deg) translate(-0.5px, 13px);
    }
    .line2 {
      transform: rotate(45deg) translate(-0.5px, -13px);
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      text-transform: uppercase;
      font-size: 3.5rem;
      font-weight: bolder;
      list-style: none;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        display: flex;
        align-items: center;
        position: relative;
        .arrow {
          font-size: 2.5rem;
          padding: 15px 0;
          @media (max-width: 950px) {
            font-size: 1.3rem;
            padding: 8px 0;
          }
          svg {
            width: 100px;
            height: 45px;
            margin-right: 8px;
            @media (max-width: 950px) {
              height: 30px;
            }
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`

export const NavProjects = styled.div`
  position: absolute;
  top: 0;
  left: 28%;
  bottom: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.text};
  margin-right: 2rem;
  @media (max-width: 950px) {
      left:25%;
      margin-right:3.5rem;
  }
  .reveal {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.red};
  }
  .image {
    position: absolute;
    top: 15%;
    left: 10%;
    z-index: -1;
    @media (max-width: 950px) {
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      padding:0;
    }
    img {
      height: 90%;
      max-width: 90%;
      border: 4px solid ${props => props.theme.background};
    }
  }
`
export const NavFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 56px 0;
  @media (max-width: 950px) {
      font-size:1.5rem;
  }
  p {
    text-align: center;
    color: ${props => props.theme.background} !important;
  }
  svg path {
    fill: ${props => props.theme.background} !important;
  }
`
