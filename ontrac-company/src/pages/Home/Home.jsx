import "./Home.css";
import homeBg from "../../assets/home/home_bg.png";
import logo from "../../assets/logo/logo.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowRight, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="home-page" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-overlay">
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
          <a className="home-nav-link active" href="#">
            HOME
          </a>
          <a className="home-nav-link" href="#about">
            ABOUT US
          </a>
          <a className="home-nav-link" href="#solutions">
            OUR STRUCTURED SOLUTIONS
          </a>
          <a className="home-nav-link" href="#products">
            OUR PRODUCTS
          </a>
          <a className="home-nav-link" href="#contact">
            CONTACT US
          </a>
        </nav>

        <section className="home-hero">
          <div className="home-hero-copy">
            <h1>
              BUILDING <span>YOUR VISIONS.</span>
              <br />
              CONSTRUCTING <span>REALITY.</span>
            </h1>
            <div className="home-divider" />
            <p className="home-tagline">"From Structure to Finish"</p>
            <p className="home-description">
              We provide construction materials and solutions from structure to finishing — including insulation, flooring, tiles, adhesives and final project details.
            </p>
            <a className="home-cta" href="#products">
              EXPLORE OUR PRODUCTS <FaArrowRight className="home-cta-icon" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
