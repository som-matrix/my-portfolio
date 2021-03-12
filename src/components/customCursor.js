import React,{useState,useEffect} from 'react'
import {Cursor} from '../styles/globalStyles'
import {useGlobalStateContext} from '../context/globalContext'
const CustomCursor = ({toggleMenu}) => {
    const {cursorType} = useGlobalStateContext()
    const [mousePosition,setMousePosition] = useState({
        x:400, //just when page renders it should be 400px from top and left
        y:400,
    })
    const onMouseMove = (event) =>{
        // Destructuring the pageX and pageY from document element
        const {pageX:x,pageY:y} = event
        setMousePosition({x,y})
    }
    // when the cursor mounts
    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMove)
        return ()=>{
            document.removeEventListener('mousemove',onMouseMove);
        }
    })
    return (
        <div>
            <Cursor className={`${!!cursorType? "hovered" : " "} ${cursorType} ${toggleMenu? "nav-open":" "}`} style={{left:`${mousePosition.x}px`,top:`${mousePosition.y}px`}}/>
        </div>
    )
}

export default CustomCursor