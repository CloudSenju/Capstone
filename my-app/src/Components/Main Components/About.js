import '../../App.css';
import { LoremIpsum } from 'react-lorem-ipsum';

function About() {
    return (
      <>
      <div id="about" name="about-section">
          <div class="text">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <div id="about-text">
              <LoremIpsum p={5} avgSentencesPerParagraph={2} />
            </div>
          </div>
          <div id="about-overlap">
            <div class="image-stack">
              <div class="image-stack__item image-stack__item--top">
                <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" id="about-img"/>
               </div>
              <div class="image-stack__item image-stack__item--bottom">
                <img src="https://cdn.sanity.io/images/pmfmd3fy/production/1890f490a2c058a1610182b8153e5cd6cc5686aa-1996x3000.jpg?w=2048&q=90&auto=format" id="about-img"/>
              </div>
            </div>
          </div>
      </div>
      </>
    );
  }
  
  export default About;