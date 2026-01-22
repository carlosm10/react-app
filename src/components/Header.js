import Nav from "./Nav";
import logo from "../assets/littlelemon_logo.png"

function Header() {
  return (
    <header>
      <img className="nav-logo" src={logo} alt="Little Lemon food" />
      <Nav />
    </header>
  );
}

export default Header;