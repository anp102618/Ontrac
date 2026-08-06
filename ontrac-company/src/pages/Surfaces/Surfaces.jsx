import "../Home/Home.css";
import "./Surfaces.css";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";
import logo from "../../assets/logo/logo.png";

import mortar1 from "../../assets/Surfaces/mortar1.jpg";
import mortar2 from "../../assets/Surfaces/mortar2.jpg";
import plaster1 from "../../assets/Surfaces/plaster1.jpg";
import plaster2 from "../../assets/Surfaces/plaster2.jpg";
import surface1 from "../../assets/Surfaces/preparation1.jpg";
import surface2 from "../../assets/Surfaces/preparation2.jpg";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaCubes,
  FaPaintRoller,
  FaLayerGroup,
} from "react-icons/fa";

const wallSections = [
  {
    title: "Mortars",
    icon: <FaCubes />,
    description:
      "High-quality mortar solutions designed for strong bonding, masonry work, and durable construction finishes.",
    types: [
      "Cement Mortar",
      "Ready-Mix Mortar",
      "Tile Adhesive Mortar",
      "Repair Mortar",
      "Masonry Mortar",
      "Joint Filling Mortar",
    ],
    images: [mortar1, mortar2],
  },

  {
    title: "Plasters",
    icon: <FaPaintRoller />,
    description:
      "Advanced plastering solutions that provide smooth finishes, surface protection, and improved durability for walls and ceilings.",
    types: [
      "Cement Plaster",
      "Gypsum Plaster",
      "External Plaster",
      "Internal Finishing Plaster",
      "Decorative Plaster",
      "Repair Plaster",
    ],
    images: [plaster1, plaster2],
  },

  {
    title: "Surface Preparation",
    icon: <FaLayerGroup />,
    description:
      "Professional surface preparation materials that ensure better adhesion, improved finishing, and long-lasting performance of coatings and finishes.",
    types: [
      "Primers",
      "Surface Cleaners",
      "Crack Fillers",
      "Bonding Agents",
      "Leveling Compounds",
      "Repair Compounds",
    ],
    images: [surface1, surface2],
  },
];

export default function WallsSurfaces() {
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
                <p className="home-contact-value">Settat, Casablanca</p>
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
                  Mo - Sun: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Navigation */}

        <nav className="home-nav">
          <a className="home-nav-link" href="/">HOME</a>
          <a className="home-nav-link" href="/about">ABOUT US</a>
          <a className="home-nav-link" href="/products">OUR PRODUCTS</a>

          <div className="home-nav-item">

            <a className="home-nav-link nav-link-dropdown" href="#solutions">
              OUR STRUCTURED SOLUTIONS
            </a>

            <div className="nav-dropdown">
              <a href="/structural-work">Structural Work</a>
              <a href="/protection-insulation">Protection & Insulation</a>
              <a href="/walls-surfaces">Walls & Surfaces</a>
              <a href="/tiles-flooring">Tiles & Flooring</a>
              <a href="/final-details">Final Details</a>
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
              <span className="walls-black">Walls</span>
              <span className="walls-blue">&nbsp;&amp;&nbsp;Surfaces</span>
            </h1>

            <p>
              Our wall and surface solutions provide the essential materials
              required for strong, smooth, and durable finishes. From bonding
              and leveling to surface preparation, we deliver reliable products
              that enhance structural quality and create a perfect base for the
              next stage of construction.
            </p>

          </div>

        </section>

        {/* Cards */}

        <section className="structural-work-content">

          {wallSections.map((section) => (

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