import Header from "../components/Header";
import BookingForm from "../components/BookingForm";

function Reservations() {
  return (
    <>
      <Header />
      <main>
        <h2>Reserve a Table</h2>
        <BookingForm />
      </main>
    </>
  );
}

export default Reservations;