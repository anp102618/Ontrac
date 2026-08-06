import "../Home/Home.css";
import "./StructuralWork.css";
import solutionsBg from "../../assets/logo/ourproducts_bg.png";
import logo from "../../assets/logo/logo.png";
import concrete1 from "../../assets/Structure/concrete1.jpg";
import concrete2 from "../../assets/Structure/concrete2.jpg";
import steel1 from "../../assets/Structure/steel1.jpg";
import steel2 from "../../assets/Structure/steel2.jpg";
import reinforcement1 from "../../assets/Structure/reinforcement1.jpg";
import reinforcement2 from "../../assets/Structure/reinforcement2.jpg";
import building1 from "../../assets/Structure/building1.jpg";
import building2 from "../../assets/Structure/building2.jpg";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaHardHat,
  FaCube,
  FaLayerGroup,
  FaShieldAlt,
} from "react-icons/fa";

const structuralSections = [
  {
    title: "Concrete Solutions",
    icon: <FaCube />,
    description:
      "High-performance concrete products designed for strong and durable foundations, slabs, columns, beams, and structural frameworks.",
    types: ["Ready-Mix Concrete (RMC)", "Cement", "Concrete Blocks", "Precast Concrete Elements", "Mortar & Grouting Materials"],
    images: [concrete1, concrete2],
  },
  {
    title: "Steel Products",
    icon: <FaHardHat />,
    description:
      "Premium-grade structural steel that provides superior load-bearing capacity, flexibility, and long-term reliability.",
    types: ["Structural Steel Sections", "Steel Beams", "Steel Columns", "Steel Plates", "Steel Channels & Angles"],
    images: [steel1, steel2],
  },
  {
    title: "Reinforcement Materials",
    icon: <FaShieldAlt />,
    description:
      "Engineered reinforcement products that enhance concrete strength, improve structural performance, and increase resistance to tension and cracking.",
    types: ["TMT Reinforcement Bars", "Reinforcement Mesh", "Binding Wire", "Couplers", "Rebar Accessories"],
    images: [reinforcement1, reinforcement2],
  },
  {
    title: "Structural Building Materials",
    icon: <FaLayerGroup />,
    description:
      "Essential construction materials that support the overall structural framework and ensure project quality from foundation to completion.",
    types: ["Bricks & Blocks", "Aggregates", "Sand", "Waterproofing Materials", "Construction Chemicals", "Formwork & Shuttering Materials"],
    images: [building1, building2],
  },
];

export default function StructuralWork() {
  return (
    <main className="structural-work-page" style={{ backgroundImage: `url(${solutionsBg})` }}>
      <div className="structural-work-overlay">
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
          <a className="home-nav-link" href="/products">OUR PRODUCTS</a>
          <div className="home-nav-item">
            <a className="home-nav-link nav-link-dropdown" href="#solutions">
              OUR STRUCTURED SOLUTIONS
            </a>
            <div className="nav-dropdown">
              <a href="/structural-work">Structural work</a>
              <a href="#protection-insulation">Protection & Insulation</a>
              <a href="#walls-surfaces">Walls & Surfaces</a>
              <a href="#tiles-flooring">Tiles & Flooring</a>
              <a href="#final-details">Final details</a>
            </div>
          </div>
          <a className="home-nav-link" href="/contact">CONTACT US</a>
        </nav>

        <section className="structural-work-hero">
          <div className="structural-work-hero-copy">
            <h1>
              <span className="structural-black">Structural</span>{" "}
              <span className="structural-blue">Work</span>
            </h1>
            <p>
              Our structural solutions provide the essential materials required to create safe, stable, and durable buildings. We supply high-quality construction products that meet industry standards, ensuring long-term strength and structural integrity for residential, commercial, and industrial projects.
            </p>
          </div>
        </section>

        <section className="structural-work-content">
          {structuralSections.map((section) => (
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
