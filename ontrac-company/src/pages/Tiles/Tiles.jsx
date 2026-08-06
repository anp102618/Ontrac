import "../Home/Home.css";
import "./Tiles.css";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";
import logo from "../../assets/logo/logo.png";

import adhesive1 from "../../assets/Tiles/adhesive1.jpg";
import adhesive2 from "../../assets/Tiles/adhesive2.jpg";
import grout1 from "../../assets/Tiles/grout1.jpg";
import grout2 from "../../assets/Tiles/grout2.jpg";
import flooring1 from "../../assets/Tiles/flooring1.jpg";
import flooring2 from "../../assets/Tiles/flooring2.jpg";
import ceramic1 from "../../assets/Tiles/ceramic1.jpg";
import ceramic2 from "../../assets/Tiles/ceramic2.jpg";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaThLarge,
  FaGripHorizontal,
  FaLayerGroup,
  FaBorderAll,
} from "react-icons/fa";

const tileSections = [
  {
    title: "Tile Adhesives",
    icon: <FaThLarge />,
    description:
      "Advanced bonding solutions designed for secure tile installation, excellent grip, and long-lasting performance across various surfaces.",
    types: [
      "Cement-Based Tile Adhesives",
      "Ready-Mix Tile Adhesives",
      "Wall & Floor Tile Adhesives",
      "Large Format Tile Adhesives",
      "Stone & Marble Adhesives",
      "Flexible Tile Adhesives",
    ],
    images: [adhesive1, adhesive2],
  },

  {
    title: "Grouts",
    icon: <FaGripHorizontal />,
    description:
      "High-quality grouting solutions that provide strong joint filling, moisture resistance, and a clean, finished appearance.",
    types: [
      "Cement Grouts",
      "Epoxy Grouts",
      "Waterproof Grouts",
      "Colored Grouts",
      "Tile Joint Fillers",
      "High-Performance Grouts",
    ],
    images: [grout1, grout2],
  },

  {
    title: "Flooring Solutions",
    icon: <FaLayerGroup />,
    description:
      "Durable flooring systems designed to meet functional, aesthetic, and performance requirements for different environments.",
    types: [
      "Concrete Flooring",
      "Epoxy Flooring",
      "Industrial Flooring",
      "Decorative Flooring",
      "Self-Leveling Flooring",
      "Commercial Flooring Systems",
    ],
    images: [flooring1, flooring2],
  },

  {
    title: "Ceramic Products",
    icon: <FaBorderAll />,
    description:
      "Quality ceramic materials offering strength, easy maintenance, and attractive finishes for interior and exterior applications.",
    types: [
      "Ceramic Tiles",
      "Porcelain Tiles",
      "Wall Tiles",
      "Floor Tiles",
      "Decorative Tiles",
      "Outdoor Tiles",
    ],
    images: [ceramic1, ceramic2],
  },
];

export default function TilesFlooring() {
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

        {/* Contact */}

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
                <p className="home-contact-value">
                  Settat, Casablanca
                </p>
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
                <p className="home-contact-label">
                  BUSINESS HOURS
                </p>
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
              <a href="/final-details">Finishing</a>
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
              <span className="tiles-black">Tiles</span>
              <span className="tiles-blue">
                &nbsp;&amp;&nbsp;Flooring
              </span>
            </h1>

            <p>
              Our tiles and flooring solutions are designed to provide strong
              adhesion, superior durability, and high-quality finishes for
              residential, commercial, and industrial spaces. From tile
              installation materials to complete flooring systems, we deliver
              products that enhance performance, appearance, and long-term
              value.
            </p>

          </div>
        </section>

        {/* Cards */}

        <section className="structural-work-content">

          {tileSections.map((section) => (

            <article className="structural-card" key={section.title}>

              <div className="structural-images">
                <img src={section.images[0]} alt={section.title} />
                <img src={section.images[1]} alt={section.title} />
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