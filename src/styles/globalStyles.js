import styled,{css} from 'styled-components'

export const Container = styled.div`
  height:100%;
  width:auto;
  margin: 0 auto;
  padding: 0 32px;
  position:relative;
  flex-grow:1;

  /* Special Media Queries */
  @media (min-width:1024px){
      max-width:960px;
  }
  @media (min-width:1216px){
      max-width:1152px;
  }
  @media (min-width:1400px){
      max-width:1244px;
  }
  ${props=>props.fluid && css`
     margin:0;
     padding:0;
     max-width:100%;
  `}
`
export const Flex = styled.div`
  
  display:flex;
  align-items:center;
  position:relative;
  ${props=>props.spaceBetween && css`
     justify-content:space-between;
  `}
  ${props=>props.alignTop && css`
     align-items:flex-start;
  `}
  ${props=>props.flexEnd && css`
     justify-content:flex-end;
  `}
  ${props=>props.noHeight && css`
     height:0;
  `}
  @media  (max-width:950px){
     flex-direction:column;
     align-items:center;
     margin:2px 0;
  }
`
export const Cursor = styled.div`
 position:absolute;
 top:0;
 left:0;
 background: ${props=>props.theme.red};
 height:32px;
 width:32px;
 border-radius:100%;
 transform:translate(-50%,-50%);
 transition: all 0.1s ease-in-out;
 transition-property: height,width,border;
 will-change:height,width,border,transform;
 pointer-events:none;
 z-index:999;
 &.pointer{
    border: 4px solid ${props=>props.theme.text} !important;
 }
 &.hovered{
    height:56px;
    width:56px;
    border:4px solid ${props=>props.theme.red};
    background:transparent !important;
 }
 &.nav-open{
    background: ${props=>props.theme.background};
 }
 &.locked{
    height:56px;
    width:56px;
    border:4px solid ${props=>props.theme.red};
    background:transparent !important;
    position:absolute;
    top: ${props=>props.theme.top} !important;
    left: ${props=>props.theme.left} !important;
 }

`
