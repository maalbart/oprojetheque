import React, { useEffect, useState } from "react"
import photo from 'src/assets/arrow.png'
import './style.scss';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrolltop">
      {isVisible && 
        <div onClick={scrollTop}>
          <img src={photo} alt='Go to top' className='scrolltop-img'/>
        </div>}
    </div>
  );
}
