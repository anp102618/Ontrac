import "./About.css";
import aboutBg from "../../assets/AboutUs/aboutus.png";
import logo from "../../assets/logo/logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaLinkedin,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="about-page" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-overlay">
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
          <a className="home-nav-link active" href="/about">ABOUT US</a>
          <a className="home-nav-link" href="#solutions">OUR STRUCTURED SOLUTIONS</a>
          <a className="home-nav-link" href="#products">OUR PRODUCTS</a>
          <a className="home-nav-link" href="#contact">CONTACT US</a>
        </nav>

        <section className="about-content">
          <div className="about-left">
            <h1>
              ABOUT <span>US</span>
            </h1>
            <div className="about-underline" />
            <p>
              Ontrac Company is an experienced construction materials supplier
              based in Casablanca-Settat, Morocco, dedicated to providing reliable,
              high-quality, and efficient solutions for the construction industry.
            </p>

            <p>
              With a customer-focused approach, we offer a comprehensive range of
              building materials, including steel and iron, cement, concrete
              solutions, tiles, sanitaryware, construction chemicals, and
              insulation products. Our goal is to simplify procurement by
              delivering trusted products, competitive solutions, and dependable
              service tailored to each project's needs.
            </p>

            <p>
              Driven by innovation, quality, and commitment, Ontrac Company aims to
              become a trusted partner for contractors, developers, and
              construction professionals by ensuring timely delivery, professional
              support, and exceptional customer satisfaction.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon"><FaAward /></div>
              <h4>QUALITY</h4>
              <p>Providing products that meet high standards of performance and durability.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h4>CUSTOMER SATISFACTION</h4>
              <p>Understanding client needs and exceeding expectations through dedicated service.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h4>RELIABILITY</h4>
              <p>Ensuring consistent supply, timely delivery, and trusted support.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaLightbulb /></div>
              <h4>INNOVATION</h4>
              <p>Continuously improving our solutions to meet the evolving needs of the construction sector.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaHandshake /></div>
              <h4>PARTNERSHIP</h4>
              <p>Building strong relationships based on trust and shared success.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
