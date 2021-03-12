import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterSection = styled(motion.div)`
  margin-top: 296px;
  height: 300px;
  
`

export const FooterContent = styled.div`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2;
  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}
  p {
    color: ${props => props.theme.text};
    text-align:center;
  }
  @media (max-width:950px){
     font-size:1.4rem;
   }
`
export const FooterSocial   = styled.div`
 display:flex;
 position:relative;
 a{ 
     position:relative;
     display:block;
     height:48px;
     width:48px;
     padding:8px; 
     color: ${props=>props.theme.text};
     svg{
       height:100%;
       width:100%;
       path{
         fill: ${props=>props.theme.text};
       }
     }
 }
`