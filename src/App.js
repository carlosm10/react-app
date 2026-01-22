import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/confirmed" element={<ConfirmedBooking/>} />
      </Routes>
    </Router>
  )
}

export default App;