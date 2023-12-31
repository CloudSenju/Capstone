import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import image from '../Assets/restaurant chef B cropped.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
      <>
        <div id="footer-container">
          <div id="footer-items">
          <div class="image">
              <img src={image} id="footerimg" alt="footer-img"></img>
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
                Address:
              </li>
              <li>
                15 Jason str
              </li>
              <li>
                Chicago
              </li>
              <li>
                IL
              </li>
            </ui>
          </div>
          <div id="footer-list">
            <ui id="footer-socials">
              <li>
                <h3>Socials</h3>
              </li>
              <li>
                <FacebookIcon/>
              </li>
              <li>
                <InstagramIcon/>
              </li>
              <li>
                <TwitterIcon/>
              </li>
            </ui>
          </div>
          </div>
        </div>
      </>
    );
  };
  export default Footer;