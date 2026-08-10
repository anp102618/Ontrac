import "./Home.css";

import homeBg from "../../assets/home/home_bg.png";

import Header from "../../components/Header/Header";

import {
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="home-page"
      style={{
        backgroundImage: `url(${homeBg})`,
      }}
    >

      <div className="home-overlay">

        {/* =====================================================
            COMMON HEADER
        ===================================================== */}

        <Header />


        {/* =====================================================
            HOME HERO
        ===================================================== */}

        <section className="home-hero">

          <div className="home-hero-copy">

            <h1>
              BUILDING <span>YOUR VISIONS.</span>
              <br />
              CONSTRUCTING <span>REALITY.</span>
            </h1>

            <div className="home-divider" />

            <p className="home-tagline">
              "From Structure to Finish"
            </p>

            <p className="home-description">
              We provide construction materials and solutions
              from structure to finishing — including insulation,
              flooring, tiles, adhesives and final project details.
            </p>

            <a
              className="home-cta"
              href="/products"
            >
              EXPLORE OUR PRODUCTS

              <FaArrowRight className="home-cta-icon" />
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}