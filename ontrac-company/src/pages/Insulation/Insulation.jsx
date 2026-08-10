import "../Home/Home.css";
import "./Insulation.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import thermal1 from "../../assets/Insulation/insulation1.jpg";
import thermal2 from "../../assets/Insulation/insulation2.jpg";
import waterproof1 from "../../assets/Insulation/waterproofing1.jpg";
import waterproof2 from "../../assets/Insulation/waterproofing2.jpg";
import protection1 from "../../assets/Insulation/protection1.jpg";
import protection2 from "../../assets/Insulation/protection2.jpg";

import {
  FaSnowflake,
  FaTint,
  FaShieldAlt,
} from "react-icons/fa";


/* =====================================================
   PROTECTION & INSULATION SECTIONS
===================================================== */

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


/* =====================================================
   COMPONENT
===================================================== */

export default function ProtectionInsulation() {
  return (
    <main
      className="structural-work-page"
      style={{
        backgroundImage: `url(${solutionsBg})`,
      }}
    >

      {/* =================================================
          COMMON HEADER
      ================================================= */}

      <Header activePage="solutions" />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="structural-work-hero">

        <div className="structural-work-hero-copy">

          <h1>
            <span className="structural-black">
              Protection
            </span>

            <span className="protection-blue">
              &nbsp;&amp;&nbsp;Insulation
            </span>
          </h1>

          <p>
            Our protection and insulation solutions are designed to
            enhance energy efficiency, prevent water and moisture
            infiltration, and safeguard structures from harsh
            environmental conditions. We provide high-quality
            materials that improve building performance, durability,
            and long-term reliability.
          </p>

        </div>

      </section>


      {/* =================================================
          PROTECTION & INSULATION CONTENT
      ================================================= */}

      <section className="structural-work-content">

        {protectionSections.map((section) => (

          <article
            className="structural-card"
            key={section.title}
          >

            {/* =========================
                IMAGES
            ========================= */}

            <div className="structural-images">

              <img
                src={section.images[0]}
                alt={`${section.title} 1`}
              />

              <img
                src={section.images[1]}
                alt={`${section.title} 2`}
              />

            </div>


            {/* =========================
                INFORMATION
            ========================= */}

            <div className="structural-info">

              <div className="structural-title">

                <div className="structural-icon">
                  {section.icon}
                </div>

                <div>

                  <h2>
                    {section.title}
                  </h2>

                  <div className="title-line"></div>

                </div>

              </div>


              {/* DESCRIPTION */}

              <p className="structural-description">
                {section.description}
              </p>


              {/* TYPES */}

              <ul className="structural-list">

                {section.types.map((item) => (

                  <li key={item}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}