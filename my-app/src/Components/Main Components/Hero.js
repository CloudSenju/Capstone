import '../../App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link } from "react-router-dom";

function Hero() {
    return (
      <>
        <div id="hero">
            <div class="text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div id="hero-text">
                  <LoremIpsum p={5} avgSentencesPerParagraph={2} />
                </div>
                <button  id="hero-button">
                  <Link to="../Reservations" className="nav-item">Book Online</Link>
                </button>
            </div>
            <div class="image">
                <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg" alt="Little Lemon" id="heroimg"></img>
            </div>
        </div>
      </>
    );
  }
  
  export default Hero;