import "./Products.css";

import productsBg from "../../assets/OurProducts/product2_bg.jpg";

import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";

import {
  FaCubes,
  FaShieldAlt,
  FaLayerGroup,
  FaThLarge,
  FaPaintRoller,
} from "react-icons/fa";

export default function Products() {
  return (
    <main
      className="products-page"
      style={{ backgroundImage: `url(${productsBg})` }}
    >
      <div className="products-overlay">

        {/* =====================================================
            COMMON HEADER
        ===================================================== */}

        <Header activePage="products" />

        {/* =====================================================
            PRODUCTS CONTENT
        ===================================================== */}

        <section className="products-layout">

          {/* =================================================
              RIGHT / MAIN CONTENT
          ================================================= */}

          <div className="products-right">

            {/* =================================================
                HERO
            ================================================= */}

            <div className="products-hero-copy">

              <h1>
                OUR <span>PRODUCTS</span>
              </h1>

              <div className="products-underline" />

              <p>
                Discover a carefully selected product range
                for structure, finishing, protection, and
                project efficiency.
              </p>

            </div>

            {/* =================================================
                PRODUCT CATEGORIES
            ================================================= */}

            <div className="products-grid">

              {/* =================================================
                  STRUCTURAL WORK
              ================================================= */}

              <div className="product-card">

                <Link
                  to="/structural-work"
                  className="product-card-header product-category-link"
                >
                  <div className="product-icon">
                    <FaCubes />
                  </div>

                  <h3>
                    STRUCTURAL WORK
                  </h3>
                </Link>

                <ul className="product-features">

                  <li>
                    <Link to="/structural-work#ready-mix-concrete">
                      Ready-Mix Concrete
                    </Link>
                  </li>

                  <li>
                    <Link to="/structural-work#reinforcing-bars">
                      Reinforcing Bars
                    </Link>
                  </li>

                  <li>
                    <Link to="/structural-work#cement">
                      Cement
                    </Link>
                  </li>

                  <li>
                    <Link to="/structural-work#concrete-blocks">
                      Concrete Blocks & Structural Hollow Core Slabs
                    </Link>
                  </li>

                  <li>
                    <Link to="/structural-work#aggregates">
                      Aggregates
                    </Link>
                  </li>

                  <li>
                    <Link to="/structural-work#concrete-admixtures">
                      Concrete Admixtures & Chemicals
                    </Link>
                  </li>

                </ul>

              </div>


              {/* =================================================
                  PROTECTION & INSULATION
              ================================================= */}

              <div className="product-card">

                <Link
                  to="/protection-insulation"
                  className="product-card-header product-category-link"
                >
                  <div className="product-icon">
                    <FaShieldAlt />
                  </div>

                  <h3>
                    PROTECTION & INSULATION
                  </h3>
                </Link>

                <ul className="product-features protection-features">

                  {/* THERMAL AND ACOUSTIC INSULATION */}

                  <li className="protection-subcategory">
                    THERMAL AND ACOUSTIC INSULATION:
                  </li>

                  <li>
                    <Link to="/protection-insulation#glass-wool">
                      Glass Wool
                    </Link>
                  </li>

                  <li>
                    <Link to="/protection-insulation#rock-wool">
                      Rock Wool
                    </Link>
                  </li>


                  {/* WATERPROOFING SOLUTIONS */}

                  <li className="protection-subcategory">
                    WATERPROOFING SOLUTIONS:
                  </li>

                  <li>
                    <Link to="/protection-insulation#waterproofing-membranes">
                      Waterproofing Membranes
                    </Link>
                  </li>

                  <li>
                    <Link to="/protection-insulation#waterproofing-coatings">
                      Waterproofing Coatings
                    </Link>
                  </li>


                  {/* BUILDING PROTECTION */}

                  <li className="protection-subcategory">
                    BUILDING PROTECTION:
                  </li>

                  <li>
                    <Link to="/protection-insulation#anti-corrosion-coating">
                      Anti-Corrosion Coating
                    </Link>
                  </li>

                  <li>
                    <Link to="/protection-insulation#surface-sealing-product">
                      Surface Sealing Product
                    </Link>
                  </li>

                  <li>
                    <Link to="/protection-insulation#protective-chemicals">
                      Protective Chemicals
                    </Link>
                  </li>

                </ul>

              </div>


              {/* =================================================
                  WALLS & SURFACES
              ================================================= */}

              <div className="product-card">

                <Link
                  to="/walls-surfaces"
                  className="product-card-header product-category-link"
                >
                  <div className="product-icon">
                    <FaLayerGroup />
                  </div>

                  <h3>
                    WALLS & SURFACES
                  </h3>
                </Link>

                <ul className="product-features">

                  <li>
                    <Link to="/walls-surfaces#adhesive-mortars">
                      Adhesive Mortars
                    </Link>
                  </li>

                  <li>
                    <Link to="/walls-surfaces#decorative-plasters">
                      Decorative Plasters
                    </Link>
                  </li>

                  <li>
                    <Link to="/walls-surfaces#adhesion-primers">
                      Adhesion Primers
                    </Link>
                  </li>

                  <li>
                    <Link to="/walls-surfaces#decorative-polished-concrete">
                      Decorative Polished Concrete
                    </Link>
                  </li>

                  <li>
                    <Link to="/walls-surfaces#plaster-coatings">
                      Plaster Coatings
                    </Link>
                  </li>

                  <li>
                    <Link to="/walls-surfaces#surface-preparation">
                      Surface Preparation
                    </Link>
                  </li>

                </ul>

              </div>


              {/* =================================================
                  TILES & FLOORING
              ================================================= */}

              <div className="product-card">

                <Link
                  to="/tiles-flooring"
                  className="product-card-header product-category-link"
                >
                  <div className="product-icon">
                    <FaThLarge />
                  </div>

                  <h3>
                    TILES & FLOORING
                  </h3>
                </Link>

                <ul className="product-features">

                  <li>
                    <Link to="/tiles-flooring#leveling-system-accessories">
                      Leveling System Accessories
                    </Link>
                  </li>

                  <li>
                    <Link to="/tiles-flooring#colored-grout">
                      Colored Grout
                    </Link>
                  </li>

                  <li>
                    <Link to="/tiles-flooring#tiling-solutions">
                      Tiling Solutions for All Your Projects
                    </Link>
                  </li>

                </ul>

              </div>


              {/* =================================================
                  FINISHING DETAILS
              ================================================= */}

              <div className="product-card">

                <Link
                  to="/final-details"
                  className="product-card-header product-category-link"
                >
                  <div className="product-icon">
                    <FaPaintRoller />
                  </div>

                  <h3>
                    FINISHING DETAILS
                  </h3>
                </Link>

                <ul className="product-features protection-features">

                  {/* COATINGS */}

                  <li className="protection-subcategory">
                    COATINGS:
                  </li>

                  <li>
                    <Link to="/final-details#paintings">
                      Paintings
                    </Link>
                  </li>

                  <li>
                    <Link to="/final-details#protective-coatings">
                      Protective Coatings
                    </Link>
                  </li>


                  {/* FINAL DETAILS */}

                  <li className="protection-subcategory">
                    FINAL DETAILS:
                  </li>

                  <li>
                    <Link to="/final-details#custom-doors-furniture">
                      Custom Doors &amp; Furniture
                    </Link>
                  </li>

                  <li>
                    <Link to="/final-details#modular-kitchens">
                      Modular Kitchens
                    </Link>
                  </li>

                  <li>
                    <Link to="/final-details#cupboards-storage">
                      Cupboards &amp; Storage
                    </Link>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
