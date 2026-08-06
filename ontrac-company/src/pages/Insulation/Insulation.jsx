import "../Home/Home.css";
import "./Insulation.css";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";
import logo from "../../assets/logo/logo.png";

import thermal1 from "../../assets/Insulation/insulation1.jpg";
import thermal2 from "../../assets/Insulation/insulation2.jpg";
import waterproof1 from "../../assets/Insulation/waterproofing1.jpg";
import waterproof2 from "../../assets/Insulation/waterproofing2.jpg";
import protection1 from "../../assets/Insulation/protection1.jpg";
import protection2 from "../../assets/Insulation/protection2.jpg";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaSnowflake,
  FaTint,
  FaShieldAlt,
} from "react-icons/fa";

const protectionSections = [
  {
    title: "Thermal Insulation",
    icon: <FaSnowflake />,
    description:
      "High-performance insulation materials that improve energy efficiency, regulate indoor temperatures, and reduce heat transfer for greater comfort and lower energy consumption.",
    types: [
      "Insulation Boards",
      "Reflective Insulation",
      "Mineral Wool",
      "Spray Foam Insulation",
      "Glass Wool",
      "Pipe & Duct Insulation",
    ],
    images: [thermal1, thermal2],
  },
  {
    title: "Waterproofing Solutions",
    icon: <FaTint />,
    description:
      "Reliable waterproofing systems designed to prevent water penetration, moisture damage, and structural deterioration across various building applications.",
    types: [
      "Waterproofing Membranes",
      "Liquid Waterproofing Coatings",
      "Cementitious Waterproofing",
      "Bituminous Membranes",
      "PU Waterproofing Systems",
      "Joint Sealants",
    ],
    images: [waterproof1, waterproof2],
  },
  {
    title: "Building Protection",
    icon: <FaShieldAlt />,
    description:
      "Protective products that enhance the lifespan of buildings by resisting corrosion, weathering, chemical exposure, and physical wear.",
    types: [
      "Protective Coatings",
      "Fire Protection Systems",
      "Anti-Corrosion Coatings",
      "Expansion Joint Systems",
      "Surface Sealers",
      "Protective Construction Chemicals",
    ],
    images: [protection1, protection2],
  },
];

export default function ProtectionInsulation() {
  return (
    <main
      className="structural-work-page"
      style={{ backgroundImage: `url(${solutionsBg})` }}
    >
      <div className="structural-work-overlay">

        {/* Top Bar */}

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

        {/* Contact Panel */}

        <section className="home-contact-panel">
          <a className="home-brand" href="/">
            <img className="home-logo" src={logo} alt="Ontrac Company" />
          </a>

          <div className="home-contact-cards">

            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="home-contact-label">OUR LOCATION</p>
                <p className="home-contact-value">Mediouna, Casablanca</p>
              </div>
            </div>

            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaPhone />
              </div>

              <div>
                <p className="home-contact-label">PHONE NUMBER</p>
                <p className="home-contact-value">
                  +(212)6 63 51 26 21
                </p>
              </div>
            </div>

            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaClock />
              </div>

              <div>
                <p className="home-contact-label">BUSINESS HOURS</p>
                <p className="home-contact-value">
                  Mon - Fri: 8:30 AM - 5:00 PM
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Navigation */}

        <nav className="home-nav">
          <a className="home-nav-link" href="/">
            HOME
          </a>

          <a className="home-nav-link" href="/about">
            ABOUT US
          </a>

          <a className="home-nav-link" href="/products">
            OUR PRODUCTS
          </a>

          <div className="home-nav-item">

            <a className="home-nav-link nav-link-dropdown" href="#solutions">
              OUR STRUCTURED SOLUTIONS
            </a>

            <div className="nav-dropdown">

              <a href="/structural-work">
                Structural Work
              </a>

              <a href="/protection-insulation">
                Protection & Insulation
              </a>

              <a href="/walls-surfaces">
                Walls & Surfaces
              </a>

              <a href="/tiles-flooring">
                Tiles & Flooring
              </a>

              <a href="/final-details">
                Finishing
              </a>

            </div>

          </div>

          <a className="home-nav-link" href="/contact">
            CONTACT US
          </a>

        </nav>

        {/* Hero */}

        <section className="structural-work-hero">

          <div className="structural-work-hero-copy">

            <h1>
              <span className="structural-black">Protection</span>
              <span className="protection-blue">&nbsp;&amp;&nbsp;Insulation</span>
            </h1>

            <p>
              Our protection and insulation solutions are designed to enhance
              energy efficiency, prevent water and moisture infiltration, and
              safeguard structures from harsh environmental conditions. We
              provide high-quality materials that improve building performance,
              durability, and long-term reliability.
            </p>

          </div>

        </section>

        {/* Content */}

        <section className="structural-work-content">

          {protectionSections.map((section) => (

            <article className="structural-card" key={section.title}>

              <div className="structural-images">
                <img src={section.images[0]} alt={section.title} />
                <img src={section.images[1]} alt={`${section.title} 2`} />
              </div>

              <div className="structural-info">

                <div className="structural-title">

                  <div className="structural-icon">
                    {section.icon}
                  </div>

                  <div>
                    <h2>{section.title}</h2>
                    <div className="title-line"></div>
                  </div>

                </div>

                <p className="structural-description">
                  {section.description}
                </p>

                <ul className="structural-list">
                  {section.types.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

              </div>

            </article>

          ))}

        </section>

      </div>
    </main>
  );
}