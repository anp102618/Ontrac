import "./About.css";
import aboutBg from "../../assets/AboutUs/aboutus.png";

import Header from "../../components/Header/Header";

import {
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <main
      className="about-page"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay">

        {/* =====================================================
            COMMON HEADER
        ===================================================== */}
        <Header activePage="about" />


        {/* =====================================================
            ABOUT CONTENT
        ===================================================== */}
        <section className="about-content">

          {/* ================= LEFT CONTENT ================= */}
          <div className="about-left">

            <h1>
              ABOUT <span>US</span>
            </h1>

            <div className="about-underline" />

            <p>
              Ontrac Company is an experienced construction materials supplier
              based in Casablanca-Settat, Morocco, dedicated to providing
              reliable, high-quality, and efficient solutions for the
              construction industry.
            </p>

            <p>
              With a customer-focused approach, we offer a comprehensive range
              of building materials, including steel and iron, cement, concrete
              solutions, tiles, sanitaryware, construction chemicals, and
              insulation products. Our goal is to simplify procurement by
              delivering trusted products, competitive solutions, and
              dependable service tailored to each project's needs.
            </p>

            <p>
              Driven by innovation, quality, and commitment, Ontrac Company
              aims to become a trusted partner for contractors, developers, and
              construction professionals by ensuring timely delivery,
              professional support, and exceptional customer satisfaction.
            </p>

          </div>


          {/* ================= FEATURES ================= */}
          <div className="about-features">

            <div className="feature-card">
              <div className="feature-icon">
                <FaAward />
              </div>

              <h4>QUALITY</h4>

              <p>
                Providing products that meet high standards of performance
                and durability.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>

              <h4>CUSTOMER SATISFACTION</h4>

              <p>
                Understanding client needs and exceeding expectations through
                dedicated service.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>

              <h4>RELIABILITY</h4>

              <p>
                Ensuring consistent supply, timely delivery, and trusted
                support.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                <FaLightbulb />
              </div>

              <h4>INNOVATION</h4>

              <p>
                Continuously improving our solutions to meet the evolving
                needs of the construction sector.
              </p>
            </div>


            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>

              <h4>PARTNERSHIP</h4>

              <p>
                Building strong relationships based on trust and shared
                success.
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

