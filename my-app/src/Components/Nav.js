import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

function Nav() {
    return (
      <>
      <div>
        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <ScrollLink to="about-section" smooth={true} duration={800} className="nav-item">About Little Lemon</ScrollLink>
          <Link to="../Reservations" className="nav-item">Reservations</Link>
          <ScrollLink to="contact-section" smooth={true} duration={800} className="nav-item">Contact Us</ScrollLink>
        </nav>
      </div>
      </>
    );
  }
  
  export default Nav;