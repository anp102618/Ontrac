import "../Home/Home.css";
import "./Surfaces.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import adhesiveMortars from "../../assets/Surfaces/adhesive_mortars.jpg";
import decorativePlasters from "../../assets/Surfaces/decorative_plasters.jpg";
import adhesionPrimers from "../../assets/Surfaces/adhesion_primers.jpg";
import decorativePolishedConcrete from "../../assets/Surfaces/decorative_concrete.jpg";
import plasterCoatings from "../../assets/Surfaces/plaster_coatings.jpg";
import surfacePreparation from "../../assets/Surfaces/surface_prep.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  FaLayerGroup,
  FaPaintRoller,
  FaLink,
  FaGem,
  FaBrush,
  FaTools,
} from "react-icons/fa";


/* =====================================================
   SURFACE SOLUTIONS DATA
===================================================== */

const surfaceSolutions = [
  {
    id: "adhesive-mortars",

    title: "Adhesive Mortars",

    icon: <FaLayerGroup />,

    image: adhesiveMortars,

    shortDescription:
      "Tile adhesives designed for a wide range of interior and exterior applications, including swimming pools, terraces, bathrooms, and renovation projects.",

    content: (
      <>
        <p>
          Discover our range of tile adhesives developed according to your
          specific application and installation requirements.
        </p>

        <p>
          Our adhesive mortars are suitable for a variety of environments,
          including:
        </p>

        <ul>
          <li>Interior applications</li>
          <li>Exterior applications</li>
          <li>Swimming pools</li>
          <li>Terraces</li>
          <li>Bathrooms</li>
          <li>Renovation projects</li>
          <li>Tile-over-tile applications</li>
        </ul>

        <p>
          These solutions provide reliable adhesion and durable performance
          for a wide range of tiling applications.
        </p>
      </>
    ),
  },

  {
    id: "decorative-plasters",

    title: "Decorative Plasters",

    icon: <FaPaintRoller />,

    image: decorativePlasters,

    shortDescription:
      "Single-coat colored plaster available in 24 colors and a variety of finishes, offering both decorative appeal and reliable substrate performance.",

    content: (
      <>
        <p>
          Our decorative plasters provide an attractive and durable finish for
          a variety of architectural and interior applications.
        </p>

        <p>
          The single-coat colored plaster is available in 24 colors and can
          be applied with a range of finishes, including:
        </p>

        <ul>
          <li>Medium-scraped finishes</li>
          <li>Textured finishes</li>
          <li>Brushed finishes</li>
          <li>Rustic finishes</li>
        </ul>

        <p>
          We also offer ready-to-use plaster solutions for suspended ceilings
          and partitions.
        </p>

        <h3>Key Benefits</h3>

        <ul>
          <li>Suitable for substrates requiring high pull-out resistance.</li>
          <li>Wide range of colors and textures.</li>
        </ul>
      </>
    ),
  },

  {
    id: "adhesion-primers",

    title: "Adhesion Primers",

    icon: <FaLink />,

    image: adhesionPrimers,

    shortDescription:
      "Latex-based bonding resin formulated to improve the adhesion and workability of mortars and concretes.",

    content: (
      <>
        <p>
          Our adhesion primers are latex-based bonding resins designed to
          improve the adhesion of mortars and concretes to their substrates.
        </p>

        <p>
          They also contribute to improved workability, helping create a more
          reliable application process and enhanced performance of subsequent
          mortar and concrete layers.
        </p>
      </>
    ),
  },

  {
    id: "decorative-polished-concrete",

    title: "Decorative Polished Concrete",

    icon: <FaGem />,

    image: decorativePolishedConcrete,

    shortDescription:
      "A contemporary mineral flooring system designed to transform existing floors with a clean, seamless decorative concrete appearance.",

    content: (
      <>
        <p>
          Decorative polished concrete is designed for commercial and
          residential spaces seeking a clean, contemporary mineral aesthetic.
        </p>

        <p>
          The complete system, including the associated finishing coats and
          protective varnishes, allows existing floors to be covered and
          transformed into a modern decorative surface.
        </p>

        <p>
          This solution combines contemporary design with a practical approach
          to floor renovation.
        </p>
      </>
    ),
  },

  {
    id: "plaster-coatings",

    title: "Plaster Coatings",

    icon: <FaBrush />,

    image: plasterCoatings,

    shortDescription:
      "Ready-to-use plaster solutions for plastering, decorating, false ceilings, partitions, and finishing applications.",

    content: (
      <>
        <p>
          Our plaster coatings are ready-to-use solutions designed for a wide
          range of plastering and decorative applications.
        </p>

        <p>
          They are suitable for:
        </p>

        <ul>
          <li>False ceilings</li>
          <li>Partitions</li>
          <li>Wall finishes</li>
          <li>Decorative applications</li>
          <li>General plastering work</li>
        </ul>

        <p>
          These solutions provide a practical and consistent approach to
          achieving high-quality surface finishes.
        </p>
      </>
    ),
  },

  {
    id: "surface-preparation",

    title: "Surface Preparation",

    icon: <FaTools />,

    image: surfacePreparation,

    shortDescription:
      "Self-leveling and self-smoothing mortar solutions for preparing interior floors before the installation of floor coverings.",

    content: (
      <>
        <p>
          Our surface preparation solutions include self-leveling and
          self-smoothing mortars designed for interior floors.
        </p>

        <p>
          These products provide a smooth and level substrate before laying
          the final floor covering, helping ensure a reliable and durable
          installation.
        </p>

        <h3>Available Solutions</h3>

        <ul>
          <li>
            <strong>P3 Self-Leveling Compound:</strong> Suitable for areas
            subject to moderate traffic.
          </li>

          <li>
            <strong>P4 Leveling Compound:</strong> Designed for areas exposed
            to heavy traffic and heavy loads.
          </li>
        </ul>
      </>
    ),
  },
];


/* =====================================================
   SURFACE PAGE
===================================================== */

export default function Surface() {

  const location = useLocation();


  /* =====================================================
     HANDLE HASH NAVIGATION
  ===================================================== */

  useEffect(() => {

    if (!location.hash) {
      return;
    }

    const elementId = location.hash.substring(1);

    // Small delay ensures all cards have rendered
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
      className="surface-solutions-page"
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

      <section className="surface-hero">

        <div className="surface-hero-copy">

          <h1>

            <span className="surface-black">
              Surface
            </span>

            <span className="surface-blue">
              Solutions
            </span>

          </h1>

          <p>
            Our surface solutions provide high-quality products for
            preparing, protecting, and finishing walls and floors.
            From tile adhesives and primers to decorative plasters,
            polished concrete, plaster coatings, and floor preparation
            systems, our solutions are designed to deliver reliable
            performance and attractive finishes for residential,
            commercial, and industrial applications.
          </p>

        </div>

      </section>


      {/* =================================================
          SURFACE SOLUTIONS CONTENT
      ================================================= */}

      <section className="surface-solutions-content">

        {surfaceSolutions.map((solution) => (

          <article
            key={solution.id}
            id={solution.id}
            className="surface-solution-card"
          >

            {/* =========================================
                IMAGE
            ========================================= */}

            <div className="surface-solution-image">

              <img
                src={solution.image}
                alt={solution.title}
              />

            </div>


            {/* =========================================
                INFORMATION
            ========================================= */}

            <div className="surface-solution-info">

              {/* =====================================
                  TITLE
              ===================================== */}

              <div className="surface-solution-title">

                <div className="surface-solution-icon">
                  {solution.icon}
                </div>

                <div>

                  <h2>
                    {solution.title}
                  </h2>

                  <div className="surface-title-line"></div>

                </div>

              </div>


              {/* =====================================
                  SHORT DESCRIPTION
              ===================================== */}

              <p className="surface-solution-description">
                {solution.shortDescription}
              </p>


              {/* =====================================
                  DETAILED CONTENT
              ===================================== */}

              <div className="surface-solution-details">
                {solution.content}
              </div>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}
