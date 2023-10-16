import "../App.css"
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import ReservationsHero from "../Components/Booking Components/ReservationsHero";
import DateTime from "../Components/Booking Components/DateTime";

function BookingPage() {
  return (
    <>
      <body>
        <Nav/>
        <ReservationsHero/>
        <DateTime/>
      </body>
      <footer>
        <Footer/>
      </footer>

    </>
  );
}

export default BookingPage;