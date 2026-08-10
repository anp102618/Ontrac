import "../Home/Home.css";
import "./Tiles.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import adhesive1 from "../../assets/Tiles/adhesive1.jpg";
import adhesive2 from "../../assets/Tiles/adhesive2.jpg";

import grout1 from "../../assets/Tiles/grout1.jpg";
import grout2 from "../../assets/Tiles/grout2.jpg";

import flooring1 from "../../assets/Tiles/flooring1.jpg";
import flooring2 from "../../assets/Tiles/flooring2.jpg";

import ceramic1 from "../../assets/Tiles/ceramic1.jpg";
import ceramic2 from "../../assets/Tiles/ceramic2.jpg";

import {
  FaThLarge,
  FaGripHorizontal,
  FaLayerGroup,
  FaBorderAll,
} from "react-icons/fa";


/* =====================================================
   TILES & FLOORING DATA
===================================================== */

const tileSections = [
  {
    title: "Tile Adhesives",

    icon: <FaGripHorizontal />,

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

    icon: <FaLayerGroup />,

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

    icon: <FaThLarge />,

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


/* =====================================================
   TILES & FLOORING PAGE
===================================================== */

export default function TilesFlooring() {
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

            <span className="tiles-black">
              Tiles
            </span>

            <span className="tiles-blue">
              &nbsp;&amp;&nbsp;Flooring
            </span>

          </h1>

          <p>
            Our tiles and flooring solutions are designed to provide
            strong adhesion, superior durability, and high-quality
            finishes for residential, commercial, and industrial
            spaces. From tile installation materials to complete
            flooring systems, we deliver products that enhance
            performance, appearance, and long-term value.
          </p>

        </div>

      </section>


      {/* =================================================
          TILES & FLOORING CONTENT
      ================================================= */}

      <section className="structural-work-content">

        {tileSections.map((section) => (

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

              {/* TITLE */}

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