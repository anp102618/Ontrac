import "../Home/Home.css";
import "./Finishing.css";

import Header from "../../components/Header/Header";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

/* =====================================================
   PRODUCT IMAGES
   Update these paths/names to match your actual images.
===================================================== */

import paintings from "../../assets/Finishing/paintings.jpg";
import protectiveCoatings from "../../assets/Finishing/protective_coatings.jpg";

import customDoorsFurniture from "../../assets/Finishing/doors_furniture.jpg";
import modularKitchens from "../../assets/Finishing/modular_kitchen.jpg";
import cupboardsStorage from "../../assets/Finishing/cupboard.jpg";

import {
  FaPaintRoller,
  FaShieldAlt,
  FaDoorOpen,
  FaUtensils,
  FaBoxes,
} from "react-icons/fa";

/* =====================================================
   FINISHING DETAILS DATA
===================================================== */

const finishingSolutions = [
  /* =====================================================
     PAINTINGS
  ===================================================== */

  {
    id: "paintings",

    category: "Coatings",

    title: "Paintings",

    icon: <FaPaintRoller />,

    image: paintings,

    shortDescription:
      "A complete range of interior and exterior paints designed for residential, commercial, and professional projects.",

    content: (
      <>
        <h3>Paintings</h3>

        <p>
          A complete range of interior and exterior paints,
          designed for residential, commercial and professional
          projects.
        </p>

        <h4>Key Benefits</h4>

        <ul>
          <li>
            Quality, excellent coverage, resistance and
            durability.
          </li>

          <li>
            Wide selection of colours and finishes.
          </li>

          <li>
            Ideal for walls, ceilings, facades and renovation
            projects.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     PROTECTIVE COATINGS
  ===================================================== */

  {
    id: "protective-coatings",

    category: "Coatings",

    title: "Protective Coatings",

    icon: <FaShieldAlt />,

    image: protectiveCoatings,

    shortDescription:
      "High-density fiber cement facade panels combining mineral strength with high-tech surface treatment for long-lasting exterior protection.",

    content: (
      <>
        <h3>Protective Coatings</h3>

        <p>
          High-density fiber cement facade panels combining
          mineral strength and high-tech surface treatment.
        </p>

        <h4>Key Benefits</h4>

        <ul>
          <li>Integrated anti-graffiti barrier.</li>

          <li>Advanced antimicrobial coating.</li>

          <li>
            Extreme resistance to weathering and UV rays.
          </li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     CUSTOM DOORS & FURNITURE
  ===================================================== */

  {
    id: "custom-doors-furniture",

    category: "Final Details",

    title: "Custom Doors & Furniture",

    icon: <FaDoorOpen />,

    image: customDoorsFurniture,

    shortDescription:
      "Custom-made doors and furniture designed to combine aesthetics, functionality, and quality while creating unique spaces tailored to your needs.",

    content: (
      <>
        <h3>Custom Doors &amp; Furniture</h3>

        <p>
          Give your spaces character with our custom-made doors
          and furniture solutions, designed to combine
          aesthetics, functionality, and quality.
        </p>

        <p>
          Each project is tailored to your needs, dimensions,
          and style to create unique layouts that seamlessly
          integrate into your interior.
        </p>

        <p>
          From elegant doors to TV units, storage, dressing
          rooms and custom layouts, we support you in designing
          harmonious, modern and sustainable spaces.
        </p>

        <h4>Ideal For</h4>

        <ul>
          <li>Living rooms.</li>

          <li>Bedrooms.</li>

          <li>Dressing rooms.</li>

          <li>Offices.</li>

          <li>Entrances.</li>

          <li>Professional spaces.</li>

          <li>Custom design projects.</li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     MODULAR KITCHENS
  ===================================================== */

  {
    id: "modular-kitchens",

    category: "Final Details",

    title: "Modular Kitchens",

    icon: <FaUtensils />,

    image: modularKitchens,

    shortDescription:
      "Functional, elegant, and customizable modular kitchens designed to optimize space, storage, comfort, and overall interior harmony.",

    content: (
      <>
        <h3>Modular Kitchens</h3>

        <p>
          Designed to combine functionality, elegance, and space
          optimization, our modular kitchens adapt to all
          styles and layouts.
        </p>

        <p>
          Thanks to a practical and customizable design, each
          element is designed to offer optimal storage,
          comfortable use, and a harmonious finish.
        </p>

        <h4>Ideal For</h4>

        <ul>
          <li>Apartments.</li>

          <li>Houses.</li>

          <li>Villas.</li>

          <li>Offices.</li>

          <li>Residences.</li>

          <li>Development projects.</li>
        </ul>
      </>
    ),
  },

  /* =====================================================
     CUPBOARDS & STORAGE
  ===================================================== */

  {
    id: "cupboards-storage",

    category: "Final Details",

    title: "Cupboards & Storage",

    icon: <FaBoxes />,

    image: cupboardsStorage,

    shortDescription:
      "Modular wardrobes and storage solutions designed to maximize available space while complementing different interior styles and layouts.",

    content: (
      <>
        <h3>Cupboards &amp; Storage</h3>

        <p>
          Enhance your interior with our collection of modular
          wardrobes, designed to adapt to all your style and
          space requirements.
        </p>

        <p>
          To optimize every square meter, choose from practical
          wardrobe configurations designed to combine elegant
          design, generous storage, and everyday convenience.
        </p>

        <h4>Linear Wardrobe — I-Shaped</h4>

        <p>
          An elegant, elongated solution that subtly adorns your
          walls without obstructing passage. Ideal for minimalist
          bedrooms or entryways.
        </p>

        <h4>L-Shaped Corner Wardrobe</h4>

        <p>
          A clever layout spanning two walls that maximizes
          unused corner space while harmoniously combining
          spacious hanging rails and drawer units.
        </p>

        <h4>U-Shaped Wardrobe</h4>

        <p>
          A majestic configuration extending across three walls,
          creating a truly bespoke storage space and transforming
          the room into a luxurious, organized dressing area.
        </p>
      </>
    ),
  },
];

/* =====================================================
   FINISHING DETAILS PAGE
===================================================== */

export default function FinishingDetails() {
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
            <span className="finishing-black">
              Finishing
            </span>

            <span className="finishing-blue">
              &nbsp;Details
            </span>
          </h1>

          <p>
            Our finishing solutions bring together functionality,
            aesthetics, and quality to transform structures into
            complete living and working spaces. From protective
            coatings and decorative finishes to customized
            interior elements, we provide solutions that enhance
            appearance, comfort, and long-term performance.
          </p>
        </div>
      </section>

      {/* =================================================
          CATEGORY INTRODUCTION
      ================================================= */}

      <section className="protection-category-intro">
        {/* ===============================================
            COATINGS
        =============================================== */}

        <div className="protection-category-block">
          <div className="protection-category-icon">
            <FaPaintRoller />
          </div>

          <div>
            <h2>COATINGS</h2>

            <p>
              High-quality decorative and protective coating
              solutions designed to improve appearance,
              durability, weather resistance, and long-term
              surface performance.
            </p>
          </div>
        </div>

        {/* ===============================================
            FINAL DETAILS
        =============================================== */}

        <div className="protection-category-block">
          <div className="protection-category-icon">
            <FaDoorOpen />
          </div>

          <div>
            <h2>FINAL DETAILS</h2>

            <p>
              Customized interior solutions including doors,
              furniture, modular kitchens, cupboards, and
              storage systems designed to combine aesthetics,
              functionality, and efficient use of space.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          PRODUCT / SOLUTION CARDS
      ================================================= */}

      <section className="concrete-solutions-content">
        {finishingSolutions.map((solution) => (
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
