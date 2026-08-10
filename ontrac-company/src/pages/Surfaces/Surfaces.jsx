import "../Home/Home.css";
import "./Surfaces.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import mortar1 from "../../assets/Surfaces/mortar1.jpg";
import mortar2 from "../../assets/Surfaces/mortar2.jpg";

import plaster1 from "../../assets/Surfaces/plaster1.jpg";
import plaster2 from "../../assets/Surfaces/plaster2.jpg";

import surface1 from "../../assets/Surfaces/preparation1.jpg";
import surface2 from "../../assets/Surfaces/preparation2.jpg";

import {
  FaCubes,
  FaPaintRoller,
  FaLayerGroup,
} from "react-icons/fa";


/* =====================================================
   WALLS & SURFACES DATA
===================================================== */

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


/* =====================================================
   WALLS & SURFACES PAGE
===================================================== */

export default function WallsSurfaces() {
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

            <span className="walls-black">
              Walls
            </span>

            <span className="walls-blue">
              &nbsp;&amp;&nbsp;Surfaces
            </span>

          </h1>

          <p>
            Our wall and surface solutions provide the essential
            materials required for strong, smooth, and durable
            finishes. From bonding and leveling to surface
            preparation, we deliver reliable products that enhance
            structural quality and create a perfect base for the
            next stage of construction.
          </p>

        </div>

      </section>


      {/* =================================================
          WALLS & SURFACES CONTENT
      ================================================= */}

      <section className="structural-work-content">

        {wallSections.map((section) => (

          <article
            className="structural-card"
            key={section.title}
          >

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


              {/* PRODUCT TYPES */}

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