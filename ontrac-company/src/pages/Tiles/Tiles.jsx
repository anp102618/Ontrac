import "../Home/Home.css";
import "./Tiles.css";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import Header from "../../components/Header/Header";

import levelingSystemAccessories from "../../assets/Tiles/levelling_system.jpg";
import coloredGrout from "../../assets/Tiles/colored_grout.jpg";
import tilingSolutions from "../../assets/Tiles/tiling_solutions.png";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  FaThLarge,
  FaFillDrip,
  FaLayerGroup,
} from "react-icons/fa";


/* =====================================================
   TILES SOLUTIONS DATA
===================================================== */

const tilesSolutions = [
  {
    id: "leveling-system-accessories",

    title: "Leveling System Accessories",

    icon: <FaThLarge />,

    image: levelingSystemAccessories,

    shortDescription:
      "Professional leveling accessories designed to ensure a flat and even installation of tiles and slabs.",

    content: (
      <>
        <p>
          Our leveling system accessories help ensure a flat and even
          installation of tiles and slabs, providing a consistent and
          professional finish.
        </p>

        <p>
          The system helps prevent imperfections and height differences
          between tiles while the adhesive dries.
        </p>

        <h3>Key Benefits</h3>

        <ul>
          <li>
            Ensures a flat and even installation of tiles and slabs.
          </li>

          <li>
            Prevents imperfections between the tiles while the adhesive dries.
          </li>
        </ul>
      </>
    ),
  },


  {
    id: "colored-grout",

    title: "Colored Grout",

    icon: <FaFillDrip />,

    image: coloredGrout,

    shortDescription:
      "Extra-fine colored mortar for joints up to 3 mm, offering a smooth, waterproof, and easy-to-clean finish.",

    content: (
      <>
        <p>
          Our colored grout is an extra-fine colored mortar designed for
          joints up to 3 mm. It provides an attractive and durable finish
          while making application and cleaning easy.
        </p>

        <h3>Key Benefits</h3>

        <ul>
          <li>
            Ultra-smooth finish.
          </li>

          <li>
            Very easy application and cleaning.
          </li>

          <li>
            Waterproof.
          </li>

          <li>
            Application in the form of a paste or slurry.
          </li>
        </ul>
      </>
    ),
  },


  {
    id: "tiling-solutions",

    title: "Tiling Solutions for All Your Projects",

    icon: <FaLayerGroup />,

    image: tilingSolutions,

    shortDescription:
      "Complete tiling solutions for indoor and outdoor applications, combining aesthetics, strength, and durability.",

    content: (
      <>
        <p>
          Our tiling solutions are designed for a wide variety of projects,
          providing reliable performance for both indoor and outdoor
          applications.
        </p>

        <p>
          Whether for living spaces, terraces, or areas in contact with
          water, our tiles combine aesthetics, strength, and durability
          to meet your project requirements.
        </p>

        <h3>Applications</h3>

        <ul>
          <li>
            Indoor living spaces.
          </li>

          <li>
            Outdoor areas.
          </li>

          <li>
            Terraces.
          </li>

          <li>
            Areas in contact with water.
          </li>
        </ul>

        <p>
          These solutions are designed to provide a durable and attractive
          finish across a wide range of tiling projects.
        </p>
      </>
    ),
  },
];


/* =====================================================
   TILES PAGE
===================================================== */

export default function Tiles() {

  const location = useLocation();


  /* =====================================================
     HANDLE HASH NAVIGATION
  ===================================================== */

  useEffect(() => {

    if (!location.hash) {
      return;
    }

    const elementId = location.hash.substring(1);

    const timer = setTimeout(() => {

      const element = document.getElementById(elementId);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 100);

    return () => clearTimeout(timer);

  }, [location.hash]);


  return (
    <main
      className="concrete-solutions-page"
      style={{
        backgroundImage: `url(${solutionsBg})`,
      }}
    >

      {/* =================================================
          COMMON HEADER
      ================================================= */}

      <Header />


      {/* =================================================
          TILES HERO
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
          TILES SOLUTIONS CONTENT
      ================================================= */}

      <section className="concrete-solutions-content">

        {tilesSolutions.map((solution) => (

          <article
            key={solution.id}
            id={solution.id}
            className="concrete-solution-card"
          >

            {/* =========================================
                IMAGE
            ========================================= */}

            <div className="concrete-solution-image">

              <img
                src={solution.image}
                alt={solution.title}
              />

            </div>


            {/* =========================================
                INFORMATION
            ========================================= */}

            <div className="concrete-solution-info">

              {/* =====================================
                  TITLE
              ===================================== */}

              <div className="concrete-solution-title">

                <div className="concrete-solution-icon">
                  {solution.icon}
                </div>

                <div>

                  <h2>
                    {solution.title}
                  </h2>

                  <div className="concrete-title-line"></div>

                </div>

              </div>


              {/* =====================================
                  SHORT DESCRIPTION
              ===================================== */}

              <p className="concrete-solution-description">
                {solution.shortDescription}
              </p>


              {/* =====================================
                  DETAILED CONTENT
              ===================================== */}

              <div className="concrete-solution-details">
                {solution.content}
              </div>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}
