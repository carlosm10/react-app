import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/restaurantfood.jpg";
import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import dessert from "../assets/lemon.jpg";
import user from "../assets/user.png"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const reserveTable = (e) => {
        e.preventDefault();
        navigate("/reservations");
    };
    const goToMenu = (e) => {
        e.preventDefault();
        navigate("/menu");
    };

    return (
        <>
        <Header />

        <section className="hero">
            <div className="hero-content">
            {/* LEFT COLUMN */}
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
                </p>
                <button onClick={reserveTable}>Reserve a Table</button>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hero-image">
                <img src={heroImage} alt="Little Lemon food" />
            </div>
            </div>
        </section>
        <section className="specials">
            <div className="specials-header">
                <h2>This week’s specials!</h2>
                <button onClick={goToMenu}>Online Menu</button>
            </div>

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
        </section>
        <section className="testimonials">
            <h2>Testimonials</h2>

            <div className="testimonials-cards">
                <article className="testimonial-card">
                <span className="rating">★★★★★</span>
                <div className="user">
                    <img src={user} alt="Jane Doe" />
                    <span>Jane</span>
                </div>
                <p>Fantastic food and wonderful atmosphere!</p>
                </article>

                <article className="testimonial-card">
                <span className="rating">★★★★★</span>
                <div className="user">
                    <img src={user} alt="Mark Smith" />
                    <span>Mark</span>
                </div>
                <p>Best Mediterranean food I’ve had in Chicago.</p>
                </article>

                <article className="testimonial-card">
                <span className="rating">★★★★★</span>
                <div className="user">
                    <img src={user} alt="Anna Lee" />
                    <span>Anna</span>
                </div>
                <p>Cozy place, friendly staff, amazing flavors.</p>
                </article>

                <article className="testimonial-card">
                <span className="rating">★★★★★</span>
                <div className="user">
                    <img src={user} alt="Paul Adams" />
                    <span>Paul</span>
                </div>
                <p>A hidden gem. Highly recommend!</p>
                </article>
            </div>
        </section>

        <Footer />

        </>
    );
}

export default Home;
