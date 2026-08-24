import "../Home/Home.css";
import "./Insulation.css";

import Header from "../../components/Header/Header";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

/* =====================================================
   PRODUCT IMAGES
===================================================== */

import glassWool from "../../assets/Insulation/glass_wool.jpg";
import rockWool from "../../assets/Insulation/rock_wool.jpg";

import waterproofingMembrane from "../../assets/Insulation/waterproof_membranes.jpg";
import waterproofingCoating from "../../assets/Insulation/waterproof_coat.jpg";

import antiCorrosionCoating from "../../assets/Insulation/anticorrosion_coat.jpg";
import surfaceSealing from "../../assets/Insulation/surface_sealing.jpg";
import protectiveChemicals from "../../assets/Insulation/protective_chemicals.jpg";

import {
  FaThermometerHalf,
  FaFire,
  FaTint,
  FaShieldAlt,
  FaFlask,
  FaBuilding,
} from "react-icons/fa";

/* =====================================================
   PROTECTION & INSULATION DATA
===================================================== */

const protectionSolutions = [
  /* =====================================================
     THERMAL & ACOUSTIC INSULATION
  ===================================================== */

  {
    id: "glass-wool",

    category: "Thermal & Acoustic Insulation",

    title: "Glass Wool",

    icon: <FaThermometerHalf />,

    image: glassWool,

    shortDescription:
      "Self-standing, semi-rigid glass wool roll panels designed to provide high thermal and acoustic insulation performance while remaining lightweight and easy to handle.",

    content: (
      <>
        <p>
          Self-standing, semi-rigid glass wool roll panel with a
          <strong> 100 x 100 mm kraft paper facing </strong>
          on one side.
        </p>

        <h3>Advantages</h3>

        <ul>
          <li>High-level thermal and acoustic performance.</li>

          <li>
            Thermal conductivity of
            <strong> 0.032 W/(m.K)</strong>.
          </li>

          <li>
            Guaranteed acoustic performance with
            <strong> 12 to 26 dB </strong>
            improvement compared to an uninsulated wall
            when installed correctly.
          </li>

          <li>
            Excellent at absorbing interior noise,
            particularly in partitions.
          </li>

          <li>
            Less effective against heavy impact noise.
          </li>
        </ul>

        <h3>Available Thicknesses</h3>

        <p>
          Available in thicknesses of
          <strong> 120, 140, and 160 mm</strong>.
        </p>

        <h3>Mechanical Performance</h3>

        <ul>
          <li>Optimal mechanical strength.</li>

          <li>Easy to handle.</li>

          <li>Lightweight.</li>

          <li>
            Withstands temperatures up to approximately
            <strong> 250°C</strong>.
          </li>

          <li>Less effective against direct flame exposure.</li>
        </ul>

        <h3>Flexibility & Installation</h3>

        <ul>
          <li>Some flexibility for easier installation.</li>

          <li>Easy to seal.</li>

          <li>
            Suitable for walls, ceilings, and converted attics.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     ROCK WOOL
  ===================================================== */

  {
    id: "rock-wool",

    category: "Thermal & Acoustic Insulation",

    title: "Rock Wool",

    icon: <FaFire />,

    image: rockWool,

    shortDescription:
      "High-performance mineral wool insulation providing excellent thermal, acoustic, and fire resistance for walls, roofs, floors, and interior partitions.",

    content: (
      <>
        <p>
          Rock wool insulation can be supplied in various forms
          depending on the application and required mechanical
          performance.
        </p>

        <h3>Available Forms</h3>

        <ul>
          <li>Rolls.</li>

          <li>
            Rigid panels for applications requiring high
            mechanical resistance.
          </li>

          <li>Insulated shells for thermal insulation.</li>

          <li>
            Loose fill for mechanical or manual spreading.
          </li>
        </ul>

        <h3>Recommended Thicknesses</h3>

        <h4>Uninsulated Attics</h4>

        <p>
          Blown-in loose fill:
          <strong> 300 to 450 mm</strong>.
        </p>

        <p>
          Recommended thickness to achieve excellent thermal
          comfort with a thermal resistance of approximately
          <strong> R = 7 to 10 m².K/W</strong>.
        </p>

        <h4>Converted Attics</h4>

        <p>
          Rolls or panels between rafters:
          <strong> 200 to 300 mm</strong>.
        </p>

        <p>
          Often installed in two crossed layers to reduce
          thermal bridges beneath the roof.
        </p>

        <h4>Walls</h4>

        <p>
          Interior or exterior perimeter walls:
          <strong> 100 to 160 mm</strong>.
        </p>

        <p>
          Provides a thermal resistance of approximately
          <strong> 3.7 to 4.5 m².K/W</strong>.
        </p>

        <p>
          Interior partitions:
          <strong> 45 to 75 mm</strong>,
          particularly where acoustic insulation is the primary
          requirement.
        </p>

        <h4>Floors & Subfloors</h4>

        <p>
          High-density rigid panels:
          <strong> 60 to 120 mm</strong>, installed under slabs
          or between floor joists.
        </p>

        <h3>Advantages</h3>

        <ul>
          <li>
            Withstands temperatures over
            <strong> 1,000°C</strong>.
          </li>

          <li>Excellent fire-safety performance.</li>

          <li>
            High density provides strong thermal performance.
          </li>

          <li>
            Excellent at blocking external and traffic noise.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     WATERPROOFING MEMBRANES
  ===================================================== */

  {
    id: "waterproofing-membranes",

    category: "Waterproofing Solutions",

    title: "Waterproofing Membranes",

    icon: <FaTint />,

    image: waterproofingMembrane,

    shortDescription:
      "Flexible waterproofing membranes designed to protect floors, walls, terraces, balconies, pools, roofs, and other wet or exposed areas from water infiltration.",

    content: (
      <>
        <h3>WATER-STOP</h3>

        <h4>Description</h4>

        <p>
          Plastic sheet made from
          <strong> EVA-C </strong>
          with non-woven synthetic fibers on both sides.
        </p>

        <p>
          Designed for waterproofing floors and walls in:
        </p>

        <ul>
          <li>Flat roofs.</li>
          <li>Terraces.</li>
          <li>Balconies.</li>
          <li>Swimming pools.</li>
          <li>Flower boxes.</li>
          <li>Fountains.</li>
          <li>Exterior surfaces.</li>
          <li>Interior wet areas.</li>
        </ul>

        <h4>Use</h4>

        <p>
          Fix with adhesive cement in the bonded system and
          protect the sheet beneath the final cladding.
        </p>

        <h4>References & Packaging</h4>

        <p>
          Supplied in individually wrapped rolls.
        </p>
      </>
    ),
  },

  /* =====================================================
     WATERPROOFING COATINGS
  ===================================================== */

  {
    id: "waterproofing-coatings",

    category: "Waterproofing Solutions",

    title: "Waterproofing Coatings",

    icon: <FaTint />,

    image: waterproofingCoating,

    shortDescription:
      "One-component flexible waterproofing mortar designed for terraces, balconies, tanks, wet areas, and swimming pools.",

    content: (
      <>
        <h3>One-Component Flexible Waterproofing Mortar</h3>

        <h4>Exterior Applications</h4>

        <p>
          Suitable for renovation of terraces and balconies and
          exterior surfaces exposed to significant temperature
          changes.
        </p>

        <ul>
          <li>Terrace cantilevers.</li>
          <li>Cornices.</li>
          <li>Exterior concrete surfaces.</li>
        </ul>

        <h4>Water Tanks</h4>

        <p>
          Suitable for waterproofing concrete tanks intended
          for drinking water.
        </p>

        <h4>Wet Areas</h4>

        <ul>
          <li>Baths.</li>
          <li>Showers.</li>
          <li>Swimming pools.</li>
          <li>
            Wet areas before ceramic tile installation.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     ANTI-CORROSION COATING
  ===================================================== */

  {
    id: "anti-corrosion-coating",

    category: "Building Protection",

    title: "Anti-Corrosion Coating",

    icon: <FaShieldAlt />,

    image: antiCorrosionCoating,

    shortDescription:
      "Three-in-one fiber-reinforced repair mortar designed for concrete repair, reinforcement protection, structural restoration, and surface rehabilitation.",

    content: (
      <>
        <h3>3-in-1 Fiber-Reinforced Repair Mortar</h3>

        <h4>Areas of Application</h4>

        <ul>
          <li>
            Residential and commercial buildings.
          </li>

          <li>
            Concrete repair without passivation of reinforcement.
          </li>

          <li>
            Filling holes, chases, and core holes.
          </li>

          <li>
            Repairing and leveling chips, spalls, and uneven
            surfaces.
          </li>

          <li>
            Repairing prefabricated elements and stair nosings.
          </li>

          <li>
            Restructuring deteriorated structures.
          </li>

          <li>Structural reinforcement.</li>

          <li>
            Suitable for above-ground, underground, and
            submerged structures.
          </li>

          <li>
            Suitable for vertical, horizontal, and soffit
            surfaces.
          </li>

          <li>Passivating agent for steel reinforcement.</li>

          <li>Sealing of passive cracks.</li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     SURFACE SEALING PRODUCT
  ===================================================== */

  {
    id: "surface-sealing-product",

    category: "Building Protection",

    title: "Surface Sealing Product",

    icon: <FaBuilding />,

    image: surfaceSealing,

    shortDescription:
      "Thick-coat waterproof mineral plaster designed for interior and exterior applications, providing a smooth finish and reliable surface protection.",

    content: (
      <>
        <h3>
          Thick-Coat Waterproof Mineral Plaster
        </h3>

        <h4>Key Benefits</h4>

        <ul>
          <li>
            Applicable to interior ceilings.
          </li>

          <li>
            Suitable for many substrates, both new and old.
          </li>

          <li>Fine and smooth finish.</li>

          <li>
            Can be top-coated with facade coatings.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     PROTECTIVE CHEMICALS
  ===================================================== */

  {
    id: "protective-chemicals",

    category: "Building Protection",

    title: "Protective Chemicals",

    icon: <FaFlask />,

    image: protectiveChemicals,

    shortDescription:
      "Specialized protective chemical solutions designed to improve facade performance, acoustic properties, insulation, and long-term building protection.",

    content: (
      <>
        <h3>Façade Regulator</h3>

        <h4>Features</h4>

        <ul>
          <li>Provides acoustic improvements.</li>

          <li>Suitable for new construction.</li>

          <li>Suitable for renovation.</li>

          <li>Mineral composition.</li>

          <li>Provides insulation.</li>
        </ul>
      </>
    ),
  },
];

/* =====================================================
   PROTECTION & INSULATION PAGE
===================================================== */

export default function Insulation() {
  const location = useLocation();

  /* =====================================================
     HASH NAVIGATION
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
            Our protection and insulation solutions are designed
            to enhance energy efficiency, prevent water and
            moisture infiltration, and safeguard structures from
            harsh environmental conditions. We provide
            high-quality materials that improve building
            performance, durability, and long-term reliability.
          </p>
        </div>
      </section>

      {/* =================================================
          CATEGORY INTRODUCTION
      ================================================= */}

      <section className="protection-category-intro">
        {/* ===============================================
            THERMAL & ACOUSTIC INSULATION
        =============================================== */}

        <div className="protection-category-block">
          <div className="protection-category-icon">
            <FaThermometerHalf />
          </div>

          <div>
            <h2>
              THERMAL &amp; ACOUSTIC INSULATION
            </h2>

            <p>
              Insulation materials designed to improve thermal
              comfort, energy efficiency, acoustic performance,
              and fire resistance across walls, roofs, floors,
              and interior spaces.
            </p>
          </div>
        </div>

        {/* ===============================================
            WATERPROOFING SOLUTIONS
        =============================================== */}

        <div className="protection-category-block">
          <div className="protection-category-icon">
            <FaTint />
          </div>

          <div>
            <h2>
              WATERPROOFING SOLUTIONS
            </h2>

            <p>
              Reliable waterproofing products designed to protect
              structures and wet areas against water infiltration,
              moisture, and changing environmental conditions.
            </p>
          </div>
        </div>

        {/* ===============================================
            BUILDING PROTECTION
        =============================================== */}

        <div className="protection-category-block">
          <div className="protection-category-icon">
            <FaShieldAlt />
          </div>

          <div>
            <h2>
              BUILDING PROTECTION
            </h2>

            <p>
              Protective materials designed to preserve concrete,
              facades, reinforcement, and building surfaces while
              improving long-term durability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          PRODUCT CARDS
      ================================================= */}

      <section className="concrete-solutions-content">
        {protectionSolutions.map((solution) => (
          <article
            className="concrete-solution-card"
            key={solution.id}
            id={solution.id}
          >
            {/* =========================================
                PRODUCT IMAGE
            ========================================= */}

            <div className="concrete-solution-image">
              <img
                src={solution.image}
                alt={solution.title}
              />
            </div>

            {/* =========================================
                PRODUCT INFORMATION
            ========================================= */}

            <div className="concrete-solution-info">
              {/* =====================================
                  CATEGORY
              ===================================== */}

              <span className="protection-product-category">
                {solution.category}
              </span>

              {/* =====================================
                  TITLE
              ===================================== */}

              <div className="concrete-solution-title">
                <div className="concrete-solution-icon">
                  {solution.icon}
                </div>

                <div>
                  <h2>{solution.title}</h2>

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