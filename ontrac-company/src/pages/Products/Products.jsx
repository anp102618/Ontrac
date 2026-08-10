import "./Products.css";

import productsBg from "../../assets/ourproducts/ourproducts_bg.png";
import productsImg from "../../assets/ourproducts/products.jpeg";

import Header from "../../components/Header/Header";

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

          {/* =========================
              LEFT IMAGE
          ========================= */}

          <div className="products-left">
            <img
              src={productsImg}
              alt="Our products"
            />
          </div>


          {/* =========================
              RIGHT CONTENT
          ========================= */}

          <div className="products-right">

            {/* =========================
                HERO
            ========================= */}

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
                  STRUCTURE
              ================================================= */}

              <a
                href="/structural-work"
                className="product-card"
              >
                <div className="product-card-header">

                  <div className="product-icon">
                    <FaCubes />
                  </div>

                  <h3>
                    STRUCTURE
                  </h3>

                </div>

                <ul className="product-features">
                  <li>Concrete</li>
                  <li>Steel</li>
                  <li>Reinforcement</li>
                  <li>Structural materials</li>
                </ul>
              </a>


              {/* =================================================
                  PROTECTION & INSULATION
              ================================================= */}

              <a
                href="/protection-insulation"
                className="product-card"
              >
                <div className="product-card-header">

                  <div className="product-icon">
                    <FaShieldAlt />
                  </div>

                  <h3>
                    PROTECTION & INSULATION
                  </h3>

                </div>

                <ul className="product-features">
                  <li>Thermal insulation</li>
                  <li>Waterproofing</li>
                  <li>Building protection</li>
                </ul>
              </a>


              {/* =================================================
                  WALLS & SURFACES
              ================================================= */}

              <a
                href="/walls-surfaces"
                className="product-card"
              >
                <div className="product-card-header">

                  <div className="product-icon">
                    <FaLayerGroup />
                  </div>

                  <h3>
                    WALLS & SURFACES
                  </h3>

                </div>

                <ul className="product-features">
                  <li>Mortars</li>
                  <li>Plasters</li>
                  <li>Surface preparation</li>
                </ul>
              </a>


              {/* =================================================
                  TILES & FLOORING
              ================================================= */}

              <a
                href="/tiles-flooring"
                className="product-card"
              >
                <div className="product-card-header">

                  <div className="product-icon">
                    <FaThLarge />
                  </div>

                  <h3>
                    TILES & FLOORING
                  </h3>

                </div>

                <ul className="product-features">
                  <li>Tile adhesives</li>
                  <li>Grouts</li>
                  <li>Flooring solutions</li>
                  <li>Ceramic products</li>
                </ul>
              </a>


              {/* =================================================
                  FINISHING DETAILS
              ================================================= */}

              <a
                href="/final-details"
                className="product-card"
              >
                <div className="product-card-header">

                  <div className="product-icon">
                    <FaPaintRoller />
                  </div>

                  <h3>
                    FINISHING DETAILS
                  </h3>

                </div>

                <ul className="product-features">
                  <li>Coatings</li>
                  <li>Decorative finishes</li>
                  <li>Final details</li>
                </ul>
              </a>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

