import "./Header.css";

import logo from "../../assets/logo/logo.png";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    return currentPath === path;
  };

  const isSolutionActive = [
    "/structural-work",
    "/protection-insulation",
    "/walls-surfaces",
    "/tiles-flooring",
    "/final-details",
  ].includes(currentPath);

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

        <Link className="home-brand" to="/">
          <img
            className="home-logo"
            src={logo}
            alt="Ontrac Company"
          />
        </Link>

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

        <Link
          className={`home-nav-link ${
            isActive("/") ? "active" : ""
          }`}
          to="/"
        >
          HOME
        </Link>


        {/* ABOUT US */}

        <Link
          className={`home-nav-link ${
            isActive("/about") ? "active" : ""
          }`}
          to="/about"
        >
          ABOUT US
        </Link>


        {/* OUR PRODUCTS */}

        <Link
          className={`home-nav-link ${
            isActive("/products") ? "active" : ""
          }`}
          to="/products"
        >
          OUR PRODUCTS
        </Link>


        {/* STRUCTURED SOLUTIONS */}

        <div className="home-nav-item">

          <Link
            className={`home-nav-link nav-link-dropdown ${
              isSolutionActive ? "active" : ""
            }`}
            to="/structural-work"
          >
            OUR SOLUTIONS
          </Link>


          {/* DROPDOWN */}

          <div className="nav-dropdown">

            <Link to="/structural-work">
              Structural Work
            </Link>

            <Link to="/protection-insulation">
              Protection & Insulation
            </Link>

            <Link to="/walls-surfaces">
              Walls & Surfaces
            </Link>

            <Link to="/tiles-flooring">
              Tiles & Flooring
            </Link>

            <Link to="/final-details">
              Finishing Details
            </Link>

          </div>

        </div>


        {/* CONTACT US */}

        <Link
          className={`home-nav-link ${
            isActive("/contact") ? "active" : ""
          }`}
          to="/contact"
        >
          CONTACT US
        </Link>


        {/* TESTIMONIALS */}

        <Link
          className={`home-nav-link ${
            isActive("/testimonials") ? "active" : ""
          }`}
          to="/testimonials"
        >
          TESTIMONIALS
        </Link>

      </nav>
    </>
  );
}