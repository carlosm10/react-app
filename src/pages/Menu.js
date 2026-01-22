import Header from "../components/Header";
import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import dessert from "../assets/lemon.jpg";

function Menu() {
  return (
    <>
      <Header />
      <main>
        <h2>Menu</h2>
        <p>Our seasonal menu.</p>
        <div className="specials-cards">
          {/* CARD 1 */}
          <article className="card">
          <img src={salad} alt="Greek Salad" />
          <div className="card-body">
              <div className="card-title">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
              </div>
              <p>
              The famous greek salad of crispy lettuce, peppers, olives and
              our Chicago style feta cheese.
              </p>
              <span className="delivery">Order a delivery 🚚</span>
          </div>
          </article>

          {/* CARD 2 */}
          <article className="card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-body">
              <div className="card-title">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
              </div>
              <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
              </p>
              <span className="delivery">Order a delivery 🚚</span>
          </div>
          </article>

          {/* CARD 3 */}
          <article className="card">
          <img src={dessert} alt="Lemon Dessert" />
          <div className="card-body">
              <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
              </div>
              <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is authentic.
              </p>
              <span className="delivery">Order a delivery 🚚</span>
          </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default Menu;