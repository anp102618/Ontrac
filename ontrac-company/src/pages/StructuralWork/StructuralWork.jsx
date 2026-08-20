import "../Home/Home.css";
import "./StructuralWork.css";

import Header from "../../components/Header/Header";

import solutionsBg from "../../assets/logo/ourproducts_bg.png";

import readyMixConcrete from "../../assets/Concrete_Solutions/ready_mix_concrete.jpg";
import reinforcingBars from "../../assets/Concrete_Solutions/reinforcement_bar.jpg";
import cement from "../../assets/Concrete_Solutions/cement.jpg";
import concreteBlocks from "../../assets/Concrete_Solutions/concrete_blocks.jpg";
import aggregates from "../../assets/Concrete_Solutions/aggregates.jpg";
import concreteAdmixtures from "../../assets/Concrete_Solutions/admixtures.jpg";

import {
  FaCube,
  FaLayerGroup,
  FaIndustry,
  FaCubes,
  FaCircle,
  FaFlask,
} from "react-icons/fa";


/* =====================================================
   CONCRETE SOLUTIONS DATA
===================================================== */

const concreteSolutions = [
  {
    title: "Ready-Mix Concrete",

    icon: <FaCube />,

    image: readyMixConcrete,

    shortDescription:
      "High-performance concrete products for foundations, slabs, columns, beams, and structural elements.",

    content: (
      <>
        <p>
          For your upcoming construction projects, we offer a complete range
          of ready-mix concrete covering all regulatory strength classes,
          from <strong>C20/25 to C35/45</strong>.
        </p>

        <p>
          These industrial formulations incorporate rigorous control of
          workability and porosity to guarantee the durability of your
          structures and the longevity of your reinforced concrete works.
        </p>

        <p>
          Our technical advisors are available to analyze your specifications
          and schedule your next on-site pours.
        </p>
      </>
    ),
  },


  {
    title: "Reinforcing Bars",

    icon: <FaLayerGroup />,

    image: reinforcingBars,

    shortDescription:
      "High-quality reinforcing bars designed to optimize mechanical adhesion with the cement matrix and enhance structural performance.",

    content: (
      <>
        <p>
          Reinforcing bars optimize mechanical adhesion with the cement
          matrix. This prevents internal slipping under load, resulting in
          steel bars with excellent characteristics that guarantee:
        </p>

        <ul>
          <li>Consistent quality.</li>
          <li>Consistent linear mass.</li>
        </ul>

        <h3>Available Grades</h3>

        <ul>
          <li>Weldable FeE500 reinforcing bar</li>
          <li>Weldable FeE400 reinforcing bar</li>
        </ul>

        <h3>Available Dimensions</h3>

        <ul>
          <li>Diameters: 8 to 20 mm</li>
          <li>Lengths: 12 m (+100, -00 mm)</li>
        </ul>

        <h3>Packaging</h3>

        <ul>
          <li>Bars packaged in bundles of 2 to 2.5 tons.</li>
          <li>
            Bundles are tied with 6 wire rope ties along their entire length.
          </li>
        </ul>

        <h3>Applications</h3>

        <p>
          Ideal for reinforcing foundations, columns, beams, and cast-in-place
          walls.
        </p>
      </>
    ),
  },


  {
    title: "Cement",

    icon: <FaIndustry />,

    image: cement,

    shortDescription:
      "Reliable cement solutions engineered for consistent strength development and durable mortar and concrete applications.",

    content: (
      <>
        <p>
          For your upcoming construction projects, we offer a complete range
          of cements covering all regulatory strength classes, from
          <strong> CPJ 35 to CPA 55</strong>, in accordance with the
          <strong> NM 10.1.004</strong> standard.
        </p>

        <p>
          These industrial formulations incorporate rigorous control of
          milling fineness and chemical consistency to guarantee optimal
          short- and long-term strength development for your mortars and
          concrete.
        </p>
      </>
    ),
  },


  {
    title: "Concrete Blocks & Structural Hollow Core Slabs",

    icon: <FaCubes />,

    image: concreteBlocks,

    shortDescription:
      "Durable masonry and structural solutions designed to combine strength, lightness, and long-term performance.",

    content: (
      <>
        <p>
          Our concrete blocks and structural hollow core slabs are designed
          to guarantee the durability of your masonry, the lightness of your
          floors, and the longevity of your reinforced concrete structures.
        </p>
      </>
    ),
  },


  {
    title: "Aggregates",

    icon: <FaCircle />,

    image: aggregates,

    shortDescription:
      "Quality aggregates with controlled particle sizing to provide strength and reliable performance across construction applications.",

    content: (
      <>
        <p>
          Our range of aggregates is selected to provide the strength,
          stability, and consistency required for demanding construction
          applications. Carefully controlled particle sizing helps ensure
          optimal grading, compaction, and performance in concrete and
          structural works.
        </p>
      </>
    ),
  },


  {
    title: "Concrete Admixtures & Chemicals",

    icon: <FaFlask />,

    image: concreteAdmixtures,

    shortDescription:
      "Advanced concrete admixtures and chemicals designed to improve workability, strength, and long-term concrete durability.",

    content: (
      <>
        <p>
          For your upcoming construction projects, we offer a complete range
          of concrete admixtures and chemicals covering all regulatory
          technical functions, from plasticizers to high-strength
          water-reducing superplasticizers.
        </p>

        <p>
          These industrial formulations incorporate rigorous control of
          rheological properties and hydration kinetics to guarantee improved
          workability, increased mechanical strength, and enhanced durability
          of your concrete.
        </p>
      </>
    ),
  },
];


/* =====================================================
   CONCRETE SOLUTIONS PAGE
===================================================== */

export default function ConcreteSolutions() {
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
          CONCRETE SOLUTIONS CONTENT
      ================================================= */}

      <section className="concrete-solutions-content">

        {concreteSolutions.map((solution) => (

          <article
            className="concrete-solution-card"
            key={solution.title}
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

              {/* TITLE */}

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


              {/* SHORT DESCRIPTION */}

              <p className="concrete-solution-description">
                {solution.shortDescription}
              </p>


              {/* DETAILED CONTENT */}

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