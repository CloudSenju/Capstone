import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
    return (
      <>
        <div id="footer-container">
          <div id="footer-items">
          <div class="image">
              <img src="https://i.pinimg.com/originals/6e/ad/f2/6eadf29c90b10fbfd99badc474d61660.jpg"  id="footerimg" alt="footer-img"></img>
          </div>
          <div class="footer-links">
            <ui id="footer-list">
              <li>
                <h3>Navigation</h3>
              </li>
              <li>
                <Link to="/" className="nav-item">Home</Link>
              </li>
              <li>
                <ScrollLink to="about-section" smooth={true} duration={800} className="nav-item">About Little Lemon</ScrollLink>
              </li>
              <li>
                <Link to="../Reservations" className="nav-item">Reservations</Link>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={800} className="nav-item">Contact Us</ScrollLink>
              </li>
            </ui>
          </div>
          <div id="footer-list">
            <ui id="footer-contacts" name="contact-section">
              <li>
                <h3>Contact us</h3>
              </li>
              <li>
                Email address: willem@littlelemon.com
              </li>
              <li>
                Contact Number: +1 800 299 665 452
              </li>
              <li>
                <p>Address:
                  <br/>
                  15 Jason str
                  <br/>
                  Chicago
                  <br/>
                  IL
                  <br/>
                  60657
                  <br/>
                  USA
                </p>
              </li>
            </ui>
          </div>
          <div id="footer-list">
            <ui id="footer-socials">
              <li>
                <h3>Socials</h3>
              </li>
              <li>
                <a  href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Reservation</a>
              </li>
              <li>
                <a href="">Order Online</a>
              </li>
            </ui>
          </div>
          </div>
        </div>
      </>
    );
  };
  export default Footer;