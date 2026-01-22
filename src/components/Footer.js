function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LOGO */}
        <div className="footer-column">
          <h3>Little Lemon</h3>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Chicago, IL</li>
            <li>(312) 555-0123</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
