import "../Home/Home.css";
import "./Testimonials.css";

import Header from "../../components/Header/Header";

import testimonialsBg from "../../assets/Testimonials/testimonials_bg.jpg";

import {
  FaQuoteLeft,
  FaUserTie,
  FaUser,
  FaStar,
} from "react-icons/fa";


const testimonials = [
  {
    id: 1,
    client: "PROJECT MANAGER, ANFA BLUE",

    text:
      "Their responsiveness and willingness to handle urgent orders have been a game-changer for our tight schedules.",

    icon: <FaUserTie />,
  },

  {
    id: 2,
    client: "OWNER, RACHIDIA CARREAUX",

    text:
      "We were impressed by their hands-on approach. They don't just deliver materials; they provide solutions and ensure we get what we need for optimal results.",

    icon: <FaUser />,
  },
];


export default function Testimonials() {
  return (
    <main
      className="testimonials-page"
      style={{
        backgroundImage: `url(${testimonialsBg})`,
      }}
    >

      {/* =====================================================
          COMMON HEADER
      ===================================================== */}

      <Header />


      {/* =====================================================
          TESTIMONIAL CONTENT
      ===================================================== */}

      <section className="testimonials-content">

        {/* ===================================================
            HERO
        =================================================== */}

        <div className="testimonials-hero">

          <h1>
            <span className="testimonials-black">
              CLIENT
            </span>

            <span className="testimonials-blue">
              TESTIMONIALS
            </span>
          </h1>

          <div className="testimonials-divider"></div>

          <p>
            We take pride in building lasting relationships
            with our clients by delivering quality, reliability,
            and results they can count on.
          </p>

        </div>


        {/* ===================================================
            TESTIMONIAL CARDS
        =================================================== */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (

            <article
              className="testimonial-card"
              key={testimonial.id}
            >

              {/* ---------------------------------------------
                  QUOTE + RATING
              --------------------------------------------- */}

              <div className="testimonial-top">

                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                <div className="testimonial-rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

              </div>


              {/* ---------------------------------------------
                  CLIENT INFORMATION
              --------------------------------------------- */}

              <div className="testimonial-body">

                <div className="testimonial-client-icon">
                  {testimonial.icon}
                </div>

                <div className="testimonial-text">

                  <h2>
                    – {testimonial.client}
                  </h2>

                  <p>
                    "{testimonial.text}"
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}