import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [mousePosition, setMousePosition] = useState(getSize);
  useEffect(() => {
    // Resize handler
    function handleResize() {
      setMousePosition(getSize());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return mousePosition;
}
