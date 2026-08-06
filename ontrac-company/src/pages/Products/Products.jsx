import "./Products.css";
import productsBg from "../../assets/ourproducts/ourproducts_bg.png";
import productsImg from "../../assets/ourproducts/products.jpeg";
import logo from "../../assets/logo/logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaCubes,
  FaShieldAlt,
  FaLayerGroup,
  FaWater,
  FaThLarge,
  FaPaintRoller,
} from "react-icons/fa";

export default function Products() {
  return (
    <main className="products-page" style={{ backgroundImage: `url(${productsBg})` }}>
      <div className="products-overlay">
        <div className="home-topbar">
          <div className="home-topbar-item">
            <FaEnvelope />
            ontrac.company2023@gmail.com
          </div>
          <div className="home-topbar-item home-topbar-center">
            <FaPhone />
            CALL US ON: +(212)6 63 51 26 21
          </div>
          <div className="home-topbar-item home-topbar-right">
            <a
              href="https://linkedin.com/in/ontrac-company"
              target="_blank"
              rel="noopener noreferrer"
              className="home-topbar-link"
            >
              <FaLinkedin />
              linkedin.com/in/ontrac-company
            </a>
          </div>
        </div>

        <section className="home-contact-panel">
          <a className="home-brand" href="#">
            <img className="home-logo" src={logo} alt="Ontrac Company" />
          </a>
          <div className="home-contact-cards">
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="home-contact-label">OUR LOCATION</p>
                <p className="home-contact-value">Settat, Casablanca</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaPhone />
              </div>
              <div>
                <p className="home-contact-label">PHONE NUMBER</p>
                <p className="home-contact-value">+(212)6 63 51 26 21</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaClock />
              </div>
              <div>
                <p className="home-contact-label">BUSINESS HOURS</p>
                <p className="home-contact-value">Mo - Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <nav className="home-nav">
          <a className="home-nav-link" href="/">HOME</a>
          <a className="home-nav-link" href="/about">ABOUT US</a>
          <a className="home-nav-link active" href="/products">OUR PRODUCTS</a>
          <div className="home-nav-item">
            <a className="home-nav-link nav-link-dropdown" href="#solutions">
              OUR STRUCTURED SOLUTIONS
            </a>
            <div className="nav-dropdown">
              <a href="#structural-work">Structural work</a>
              <a href="#protection-insulation">Protection & Insulation</a>
              <a href="#walls-surfaces">Walls & Surfaces</a>
              <a href="#tiles-flooring">Tiles & Flooring</a>
              <a href="#final-details">Finishing</a>
            </div>
          </div>
          <a className="home-nav-link" href="/contact">CONTACT US</a>
        </nav>

        <section className="products-layout">
          <div className="products-left">
            <img src={productsImg} alt="Our products" />
          </div>
          <div className="products-right">
            <div className="products-hero-copy">
              <h1>
                OUR <span>PRODUCTS</span>
              </h1>
              <div className="products-underline" />
              <p>
                Discover a carefully selected product range for structure, finishing,
                protection, and project efficiency.
              </p>
            </div>

            <div className="products-grid">
              <article className="product-card">
                <div className="product-card-header">
                  <div className="product-icon">
                    <FaCubes />
                  </div>
                  <h3>STRUCTURE</h3>
                </div>
                <ul className="product-features">
                  <li>Concrete</li>
                  <li>Steel</li>
                  <li>Reinforcement</li>
                  <li>Structural materials</li>
                </ul>
              </article>
              <article className="product-card">
                <div className="product-card-header">
                  <div className="product-icon">
                    <FaShieldAlt />
                  </div>
                  <h3>PROTECTION & INSULATION</h3>
                </div>
                <ul className="product-features">
                  <li>Thermal insulation</li>
                  <li>Waterproofing</li>
                  <li>Building protection</li>
                </ul>
              </article>
              <article className="product-card">
                <div className="product-card-header">
                  <div className="product-icon">
                    <FaLayerGroup />
                  </div>
                  <h3>WALLS & SURFACES</h3>
                </div>
                <ul className="product-features">
                  <li>Mortars</li>
                  <li>Plasters</li>
                  <li>Surface preparation</li>
                </ul>
              </article>
              <article className="product-card">
                <div className="product-card-header">
                  <div className="product-icon">
                    <FaThLarge />
                  </div>
                  <h3>TILES & FLOORING</h3>
                </div>
                <ul className="product-features">
                  <li>Tile adhesives</li>
                  <li>Grouts</li>
                  <li>Flooring solutions</li>
                  <li>Ceramic products</li>
                </ul>
              </article>
              <article className="product-card">
                <div className="product-card-header">
                  <div className="product-icon">
                    <FaPaintRoller />
                  </div>
                  <h3>FINISHING</h3>
                </div>
                <ul className="product-features">
                  <li>Coatings</li>
                  <li>Decorative finishes</li>
                  <li>Final details</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
