import "../Home/Home.css";
import "./StructuralWork.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import concrete1 from "../../assets/Structure/concrete1.jpg";
import concrete2 from "../../assets/Structure/concrete2.jpg";

import steel1 from "../../assets/Structure/steel1.jpg";
import steel2 from "../../assets/Structure/steel2.jpg";

import reinforcement1 from "../../assets/Structure/reinforcement1.jpg";
import reinforcement2 from "../../assets/Structure/reinforcement2.jpg";

import building1 from "../../assets/Structure/building1.jpg";
import building2 from "../../assets/Structure/building2.jpg";

import { Link } from "react-router-dom";

import {
  FaHardHat,
  FaCube,
  FaLayerGroup,
  FaShieldAlt,
} from "react-icons/fa";


/* =====================================================
   STRUCTURAL WORK DATA
===================================================== */

const structuralSections = [
  {
    title: "Concrete Solutions",

    icon: <FaCube />,

    description:
      "High-performance concrete products designed for strong and durable foundations, slabs, columns, beams, and structural frameworks.",

    types: [
      "Ready-Mix Concrete (RMC)",
      "Reinforcing Bars",
      "Concrete Blocks & Structural Hollow Core Slabs",
      "Cement",
      "Concrete Ad-mixtures and Chemicals",
      "Aggregates",
    ],

    images: [concrete1, concrete2],

    link: "/concrete-solutions",
  },

  {
    title: "Steel Products",

    icon: <FaHardHat />,

    description:
      "Premium-grade structural steel that provides superior load-bearing capacity, flexibility, and long-term reliability.",

    types: [
      "Structural Steel Sections",
      "Steel Beams",
      "Steel Columns",
      "Steel Plates",
      "Steel Channels & Angles",
    ],

    images: [steel1, steel2],
  },

  {
    title: "Reinforcement Materials",

    icon: <FaShieldAlt />,

    description:
      "Engineered reinforcement products that enhance concrete strength, improve structural performance, and increase resistance to tension and cracking.",

    types: [
      "TMT Reinforcement Bars",
      "Reinforcement Mesh",
      "Binding Wire",
      "Couplers",
      "Rebar Accessories",
    ],

    images: [reinforcement1, reinforcement2],
  },

  {
    title: "Structural Building Materials",

    icon: <FaLayerGroup />,

    description:
      "Essential construction materials that support the overall structural framework and ensure project quality from foundation to completion.",

    types: [
      "Bricks & Blocks",
      "Aggregates",
      "Sand",
      "Waterproofing Materials",
      "Construction Chemicals",
      "Formwork & Shuttering Materials",
    ],

    images: [building1, building2],
  },
];


/* =====================================================
   STRUCTURAL WORK PAGE
===================================================== */

export default function StructuralWork() {
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

      <Header />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="structural-work-hero">

        <div className="structural-work-hero-copy">

          <h1>

            <span className="structural-black">
              Structural
            </span>

            <span className="structural-blue">
              Work
            </span>

          </h1>

          <p>
            Our structural solutions provide the essential materials
            required to create safe, stable, and durable buildings.
            We supply high-quality construction products that meet
            industry standards, ensuring long-term strength and
            structural integrity for residential, commercial, and
            industrial projects.
          </p>

        </div>

      </section>


      {/* =================================================
          STRUCTURAL WORK CONTENT
      ================================================= */}

      <section className="structural-work-content">

        {structuralSections.map((section) => {

          /* =============================================
             CARD CONTENT
          ============================================= */

          const cardContent = (
            <>

              {/* =========================================
                  IMAGES
              ========================================= */}

              <div className="structural-images">

                <img
                  src={section.images[0]}
                  alt={section.title}
                />

                <img
                  src={section.images[1]}
                  alt={`${section.title} 2`}
                />

              </div>


              {/* =========================================
                  INFORMATION
              ========================================= */}

              <div className="structural-info">

                {/* =======================================
                    TITLE
                ======================================= */}

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


                {/* =======================================
                    DESCRIPTION
                ======================================= */}

                <p className="structural-description">
                  {section.description}
                </p>


                {/* =======================================
                    TYPES
                ======================================= */}

                <ul className="structural-list">

                  {section.types.map((item) => (

                    <li key={item}>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </>
          );


          /* =============================================
             LINKED CARD
             Concrete Solutions
          ============================================= */

          if (section.link) {

            return (
              <Link
                to={section.link}
                className="structural-card structural-card-link"
                key={section.title}
              >
                {cardContent}
              </Link>
            );

          }


          /* =============================================
             NORMAL CARD
             Other Structural Sections
          ============================================= */

          return (
            <article
              className="structural-card"
              key={section.title}
            >
              {cardContent}
            </article>
          );

        })}

      </section>

    </main>
  );
}