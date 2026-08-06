import "../Home/Home.css";
import "./Finishing.css";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";
import logo from "../../assets/logo/logo.png";

import coating1 from "../../assets/Finishing/coating1.jpg";
import coating2 from "../../assets/Finishing/coating2.jpg";
import decorative1 from "../../assets/Finishing/decoration1.jpg";
import decorative2 from "../../assets/Finishing/decoration2.jpg";
import finishing1 from "../../assets/Finishing/final1.jpg";
import finishing2 from "../../assets/Finishing/final2.jpg";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaPaintRoller,
  FaPalette,
  FaHome,
} from "react-icons/fa";

const finishingSections = [
  {
    title: "Coatings",
    icon: <FaPaintRoller />,
    description:
      "High-quality coating solutions designed to protect surfaces, improve durability, and provide attractive finishes for interior and exterior applications.",
    types: [
      "Interior Paint Coatings",
      "Exterior Paint Coatings",
      "Protective Coatings",
      "Anti-Microbial Coatings",
      "Weather-Resistant Coatings",
      "Floor Coatings",
    ],
    images: [coating1, coating2],
  },

  {
    title: "Decorative Finishes",
    icon: <FaPalette />,
    description:
      "Creative finishing solutions that enhance the visual appeal and character of spaces through unique textures, colors, and design elements.",
    types: [
      "Texture Finishes",
      "Decorative Paints",
      "Wall Effects",
      "Stone & Wood Finishes",
      "Designer Coatings",
      "Feature Wall Finishes",
    ],
    images: [decorative1, decorative2],
  },

  {
    title: "Final Details",
    icon: <FaHome />,
    description:
      "Complete interior solutions that add functionality, comfort, and style while delivering a refined finished environment.",
    types: [
      "Doors & Frames",
      "Modular Kitchens",
      "Custom Furniture",
      "Wooden Partitions",
      "Cupboards & Storage Solutions",
      "Dressing Rooms & Interior Furnishings",
    ],
    images: [finishing1, finishing2],
  },
];

export default function FinalDetails() {
  return (
    <main
      className="structural-work-page"
      style={{ backgroundImage: `url(${solutionsBg})` }}
    >
      <div className="structural-work-overlay">

        {/* ---------- Top Bar ---------- */}

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

        {/* ---------- Contact ---------- */}

        <section className="home-contact-panel">
          <a className="home-brand" href="/">
            <img src={logo} className="home-logo" alt="Ontrac Company" />
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

        {/* ---------- Navigation ---------- */}

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

        {/* ---------- Hero ---------- */}

        <section className="structural-work-hero">

          <div className="structural-work-hero-copy">

            <h1>
              <h1>
            <span className="finishing-black">Finishing</span>
            <span className="finishing-blue">&nbsp;Details</span>
            </h1>
            </h1>

            <p>
              Our finishing solutions bring together functionality,
              aesthetics, and quality to transform structures into complete
              living and working spaces. From protective coatings and
              decorative finishes to customized interior elements, we provide
              solutions that enhance appearance, comfort, and long-term
              performance.
            </p>

          </div>

        </section>

        {/* ---------- Cards ---------- */}

        <section className="structural-work-content">

          {finishingSections.map((section) => (

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