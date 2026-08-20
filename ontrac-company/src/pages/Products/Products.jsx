import "./Products.css";

import productsBg from "../../assets/OurProducts/ourproducts_bg.png";
import productsImg from "../../assets/OurProducts/products.jpg";

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
              LEFT IMAGE
          ================================================= */}

          <div className="products-left">

            <img
              src={productsImg}
              alt="Our products"
            />

          </div>


          {/* =================================================
              RIGHT CONTENT
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
                  STRUCTURE
              ================================================= */}

              <Link
                to="/structural-work"
                className="product-card"
              >

                <div className="product-card-header">

                  <div className="product-icon">
                    <FaCubes />
                  </div>

                  <h3>
                    STRUCTURAL WORK
                  </h3>

                </div>

                <ul className="product-features">

                  <li>
                    Ready-Mix Concrete
                  </li>

                  <li>
                    Reinforcing Bars
                  </li>

                  <li>
                    Cement
                  </li>

                  <li>
                    Concrete Blocks & Structural Hollow Core Slabs
                  </li>

                  <li>
                    Aggregates
                  </li>

                  <li>
                    Concrete Admixtures & Chemicals
                  </li>

                </ul>

              </Link>


              {/* =================================================
                  PROTECTION & INSULATION
              ================================================= */}

              <Link
                to="/protection-insulation"
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

                  <li>
                    Thermal insulation
                  </li>

                  <li>
                    Waterproofing
                  </li>

                  <li>
                    Building protection
                  </li>

                </ul>

              </Link>


              {/* =================================================
                  WALLS & SURFACES
              ================================================= */}

              <Link
                to="/walls-surfaces"
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

                  <li>
                    Mortars
                  </li>

                  <li>
                    Plasters
                  </li>

                  <li>
                    Surface preparation
                  </li>

                </ul>

              </Link>


              {/* =================================================
                  TILES & FLOORING
              ================================================= */}

              <Link
                to="/tiles-flooring"
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

                  <li>
                    Tile adhesives
                  </li>

                  <li>
                    Grouts
                  </li>

                  <li>
                    Flooring solutions
                  </li>

                  <li>
                    Ceramic products
                  </li>

                </ul>

              </Link>


              {/* =================================================
                  FINISHING DETAILS
              ================================================= */}

              <Link
                to="/final-details"
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

                  <li>
                    Coatings
                  </li>

                  <li>
                    Decorative finishes
                  </li>

                  <li>
                    Final details
                  </li>

                </ul>

              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}