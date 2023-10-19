import Hero from './Main Components/Hero';
import Highlights from './Main Components/Highlights';
import Testimonials from './Main Components/Testimonials';
import About from './Main Components/About';
import greekSalad from '../Assets/greek salad.jpg';
import bruchetta from '../Assets/bruchetta.svg';
import lemonDessert from '../Assets/lemon dessert.jpg';

function Main() {
    return (
      <>
        <Hero/>
        <div id="highlights-container">
          <Highlights dish="Greek Salad" price="$12,99" image={greekSalad} description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch."/>
          <Highlights dish="Bruchetta" price="$10,99" image={bruchetta} description="Savor the flavors of Italy with our Classic Tomato Bruschetta. This appetizer is a delightful medley of ripe Roma tomatoes, fresh basil, and garlic, all perched atop slices of toasted baguette. Each bite is a burst of freshness and Mediterranean zest, with the perfect balance of acidity and herbaceous notes. Drizzled with extra-virgin olive oil and a hint of balsamic reduction, our Bruschetta is the ultimate palate pleaser. A simple yet exquisite taste of Italy that's perfect for starting your meal on a high note or sharing with friends. Buon appetito!"/>
          <Highlights dish="Lemon Dessert" price="$14,99" image={lemonDessert} description="Indulge your sweet tooth with our Zesty Lemon Delight, a dessert that's like a burst of sunshine on your plate. This exquisite creation features a light and luscious lemon mousse, so airy it practically melts in your mouth. The lemon mousse is perfectly complemented by a delicate lemon-infused sponge cake, providing a harmonious balance of sweet and tangy flavors."/>
        </div>
        <div id="testimonials-container">
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
        </div>
        <About/>
      </>
    );
  }
  
  export default Main;