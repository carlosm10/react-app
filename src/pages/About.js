import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const reserveTable = (e) => {
      e.preventDefault();
      navigate("/reservations");
  };
  return (
    <>
      <Header />
      <main>
        <h2>About Us</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button onClick={reserveTable}>Reserve a Table</button>
      </main>
    </>
  );
}

export default About;