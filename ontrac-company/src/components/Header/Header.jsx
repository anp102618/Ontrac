
import "./Header.css";

import logo from "../../assets/logo/logo.png";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
} from "react-icons/fa";

export default function Header() {
  // Get the current URL path
  const currentPath = window.location.pathname;

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <>
      {/* =====================================================
          TOP BAR
      ===================================================== */}

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


      {/* =====================================================
          LOGO + CONTACT INFORMATION
      ===================================================== */}

      <section className="home-contact-panel">

        <a className="home-brand" href="/">
          <img
            className="home-logo"
            src={logo}
            alt="Ontrac Company"
          />
        </a>

        <div className="home-contact-cards">

          {/* LOCATION */}

          <div className="home-contact-card">

            <div className="home-contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="home-contact-label">
                OUR LOCATION
              </p>

              <p className="home-contact-value">
                Mediouna, Casablanca
              </p>
            </div>

          </div>


          {/* PHONE */}

          <div className="home-contact-card">

            <div className="home-contact-icon">
              <FaPhone />
            </div>

            <div>
              <p className="home-contact-label">
                PHONE NUMBER
              </p>

              <p className="home-contact-value">
                +(212)6 63 51 26 21
              </p>
            </div>

          </div>


          {/* BUSINESS HOURS */}

          <div className="home-contact-card">

            <div className="home-contact-icon">
              <FaClock />
            </div>

            <div>
              <p className="home-contact-label">
                BUSINESS HOURS
              </p>

              <p className="home-contact-value">
                Mon - Fri: 8:30 AM - 5:00 PM
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="home-nav">

        {/* HOME */}

        <a
          className={`home-nav-link ${
            isActive("/") ? "active" : ""
          }`}
          href="/"
        >
          HOME
        </a>


        {/* ABOUT US */}

        <a
          className={`home-nav-link ${
            isActive("/about") ? "active" : ""
          }`}
          href="/about"
        >
          ABOUT US
        </a>


        {/* OUR PRODUCTS */}

        <a
          className={`home-nav-link ${
            isActive("/products") ? "active" : ""
          }`}
          href="/products"
        >
          OUR PRODUCTS
        </a>


        {/* STRUCTURED SOLUTIONS */}

        <div className="home-nav-item">

          <a
            className={`home-nav-link nav-link-dropdown ${
              currentPath === "/structural-work" ||
              currentPath === "/protection-insulation" ||
              currentPath === "/walls-surfaces" ||
              currentPath === "/tiles-flooring" ||
              currentPath === "/final-details"
                ? "active"
                : ""
            }`}
            href="#solutions"
          >
            OUR SOLUTIONS
          </a>


          {/* DROPDOWN */}

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
              Finishing Details
            </a>

          </div>

        </div>


        {/* CONTACT US */}

        <a
          className={`home-nav-link ${
            isActive("/contact") ? "active" : ""
          }`}
          href="/contact"
        >
          CONTACT US
        </a>

        {/* Testimonials */}

        <a
          className={`home-nav-link ${
            isActive("/testimonials") ? "active" : ""
          }`}
          href="/testimonials"
        >
          TESTIMONIALS
        </a>

      </nav>
    </>
  );
}

