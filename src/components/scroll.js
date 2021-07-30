import React, {useState} from 'react'
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () =>{
    const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 600) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return(
    <FaArrowUp
    className="scrollTop"
    onClick={scrollTop}
    style={{
      height: 40,
      display: showScroll ? "flex" : "none",
      backgroundColor: "blueviolet",
      borderRadius: "5px",
      color: "white",
      padding: "5px",
    }}
  />
  )
}

export default ScrollButton