import "../Home/Home.css";
import "./Finishing.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import coating1 from "../../assets/Finishing/coating1.jpg";
import coating2 from "../../assets/Finishing/coating2.jpg";
import decorative1 from "../../assets/Finishing/decoration1.jpg";
import decorative2 from "../../assets/Finishing/decoration2.jpg";
import finishing1 from "../../assets/Finishing/final1.jpg";
import finishing2 from "../../assets/Finishing/final2.jpg";

import {
  FaPaintRoller,
  FaPalette,
  FaHome,
} from "react-icons/fa";


/* =====================================================
   FINISHING SECTIONS
===================================================== */

const finishingSections = [
  {
    title: "Coatings",

    icon: <FaPaintRoller />,

    description:
      "High-quality coating solutions designed to protect surfaces, improve durability, and provide attractive finishes for interior and exterior applications.",

    types: [
      "Interior Paint Coatings",
      "Exterior Paint Coatings",
      "Protective Coatings",
      "Anti-Microbial Coatings",
      "Weather-Resistant Coatings",
      "Floor Coatings",
    ],

    images: [coating1, coating2],
  },

  {
    title: "Decorative Finishes",

    icon: <FaPalette />,

    description:
      "Creative finishing solutions that enhance the visual appeal and character of spaces through unique textures, colors, and design elements.",

    types: [
      "Texture Finishes",
      "Decorative Paints",
      "Wall Effects",
      "Stone & Wood Finishes",
      "Designer Coatings",
      "Feature Wall Finishes",
    ],

    images: [decorative1, decorative2],
  },

  {
    title: "Final Details",

    icon: <FaHome />,

    description:
      "Complete interior solutions that add functionality, comfort, and style while delivering a refined finished environment.",

    types: [
      "Doors & Frames",
      "Modular Kitchens",
      "Custom Furniture",
      "Wooden Partitions",
      "Cupboards & Storage Solutions",
      "Dressing Rooms & Interior Furnishings",
    ],

    images: [finishing1, finishing2],
  },
];


/* =====================================================
   COMPONENT
===================================================== */

export default function FinalDetails() {
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
            <span className="finishing-black">
              Finishing
            </span>

            <span className="finishing-blue">
              Details
            </span>
          </h1>

          <p>
            Our finishing solutions bring together functionality,
            aesthetics, and quality to transform structures into
            complete living and working spaces. From protective
            coatings and decorative finishes to customized interior
            elements, we provide solutions that enhance appearance,
            comfort, and long-term performance.
          </p>

        </div>

      </section>


      {/* =================================================
          FINISHING CONTENT
      ================================================= */}

      <section className="structural-work-content">

        {finishingSections.map((section) => (

          <article
            className="structural-card"
            key={section.title}
          >

            {/* =========================
                TWO IMAGES
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