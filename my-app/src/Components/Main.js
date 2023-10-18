import Hero from './Main Components/Hero';
import Highlights from './Main Components/Highlights';
import Testimonials from './Main Components/Testimonials';
import About from './Main Components/About';

function Main() {
    return (
      <>
        <Hero/>
        <div id="highlights-container">
          <Highlights dish="Greek Salad" price="$12,99" image="..\Assets\greek salad.jpg" description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch."/>
          <Highlights dish="Greek Salad" price="$12,99" image="https://peasandcrayons.com/wp-content/uploads/2021/05/marinated-greek-salad-recipe-2-500x500.jpg" description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch."/>
          <Highlights dish="Greek Salad" price="$12,99" image="https://peasandcrayons.com/wp-content/uploads/2021/05/marinated-greek-salad-recipe-2-500x500.jpg" description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch."/>
          <Highlights dish="Greek Salad" price="$12,99" image="https://peasandcrayons.com/wp-content/uploads/2021/05/marinated-greek-salad-recipe-2-500x500.jpg" description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch."/>
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