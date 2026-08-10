import "./Contact.css";
import contactBg from "../../assets/ContactUS/contact_bg.png";
import mapImage from "../../assets/ContactUS/map.jpg";

import Header from "../../components/Header/Header";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUser,
  FaRegEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main
      className="contact-page"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-overlay">

        {/* =====================================================
            COMMON HEADER
        ===================================================== */}
        <Header activePage="contact" />


        {/* =====================================================
            CONTACT HERO
        ===================================================== */}
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <h1>
              <span className="contact-underline">C</span>
              ONTACT <span>US</span>
            </h1>

            <p>
              We are here to help and answer any questions you may have.
              Reach out to us using the information below or send us a message.
            </p>
          </div>
        </section>


        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}
        <section className="contact-cards-row">

          {/* ================= GET IN TOUCH ================= */}
          <div className="contact-card contact-card-left">

            <h2>GET IN TOUCH</h2>

            <div className="card-divider" />

            <div className="contact-detail">
              <div className="detail-icon">
                <FaRegFileAlt />
              </div>

              <div>
                <p className="detail-title">OFFICE</p>
                <p className="detail-subtitle">
                  Mediouna, Casablanca, Morocco
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="detail-title">PHONE</p>
                <p className="detail-subtitle">
                  +(212)6 63 51 26 21
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">
                <FaEnvelope />
              </div>

              <div>
                <p className="detail-title">EMAIL</p>
                <p className="detail-subtitle">
                  ontrac.company2023@gmail.com
                </p>
              </div>
            </div>

          </div>


          {/* ================= MESSAGE FORM ================= */}
          <div className="contact-card contact-card-form">

            <h2>SEND US A MESSAGE</h2>

            <div className="card-divider" />

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="form-row wide-row">

                <label>
                  <FaUser />

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </label>

                <label>
                  <FaRegEnvelope />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </label>

              </div>


              <div className="form-row wide-row">

                <label>
                  <FaPhoneAlt />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                </label>

                <label>
                  <FaRegFileAlt />

                  <input
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </label>

              </div>


              <label className="textarea-label">
                <textarea
                  placeholder="Your Message"
                  required
                />
              </label>


              <button
                type="submit"
                className="btn-submit"
              >
                SEND MESSAGE
                <FaPaperPlane />
              </button>

            </form>

          </div>


          {/* ================= LOCATION ================= */}
          <div className="contact-card contact-card-location">

            <h2>OUR LOCATION</h2>

            <div className="card-divider card-divider-light" />

            <div className="map-shell">
              <div className="map-display">
                <img
                  src={mapImage}
                  alt="Ontrac Company location map"
                  className="contact-map-image"
                />
              </div>
            </div>

            <p className="location-line">
              Mediouna, Casablanca
            </p>

            <p className="location-line">
              Morocco
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}