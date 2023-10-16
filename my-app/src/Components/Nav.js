import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

function Nav() {
    return (
      <>
      <div>
        <nav>
          <Link to="/" className="nav-item" aria-label="Go to homepage">Home</Link>
          <ScrollLink to="about-section" smooth={true} duration={800} className="nav-item" aria-label="Go to about us section">About Little Lemon</ScrollLink>
          <Link to="../Reservations" className="nav-item" aria-label="Book online">Reservations</Link>
          <ScrollLink to="contact-section" smooth={true} duration={800} className="nav-item" aria-label="Go to contact us section">Contact Us</ScrollLink>
        </nav>
      </div>
      </>
    );
  }
  
  export default Nav;