import { animateScroll as scroll } from 'react-scroll';
import React from 'react';

// Configuration options (you can customize these as needed)
const scrollOptions = {
  duration: 800,  // Animation duration in milliseconds
  smooth: 'easeInOutQuart',  // Easing function for smooth animation
};

const Navigation = () => {
    const handleNavItemClick = (elementId) => {
      scroll.scrollTo(`#${elementId}`, scrollOptions);
    };
  
    return (
      <ul>
        <li onClick={() => handleNavItemClick('section1')}>Section 1</li>
        <li onClick={() => handleNavItemClick('section2')}>Section 2</li>
        {/* Add more navigation items and their respective section IDs */}
      </ul>
    );
  };
  
  export default Navigation;