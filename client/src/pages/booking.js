import Book from '../components/Book';
import { MainContainer } from '../components/Book/bookingElements';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <>
      {/* <Navbar /> */}
      <MainContainer>
        <Book />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Booking;
