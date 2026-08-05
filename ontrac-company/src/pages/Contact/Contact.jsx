import "./Contact.css";
import contactBg from "../../assets/ContactUS/conatctbg.png";
import logo from "../../assets/logo/logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegFileAlt,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="contact-page" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-overlay">
        <div className="home-topbar">
          <div className="home-topbar-item">
            <FaEnvelope />
            ontrac.company2023@gmail.com
          </div>
          <div className="home-topbar-item home-topbar-center">
            <FaPhone />
            CALL US ON: +(212)6 63 51 26 21
          </div>
          <div className="home-topbar-item home-topbar-right">
            <a
              href="https://linkedin.com/in/ontrac-company"
              target="_blank"
              rel="noopener noreferrer"
              className="home-topbar-link"
            >
              <FaLinkedin />
              linkedin.com/in/ontrac-company
            </a>
          </div>
        </div>

        <section className="home-contact-panel">
          <a className="home-brand" href="#">
            <img className="home-logo" src={logo} alt="Ontrac Company" />
          </a>
          <div className="home-contact-cards">
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="home-contact-label">OUR LOCATION</p>
                <p className="home-contact-value">Settat, Casablanca</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaPhone />
              </div>
              <div>
                <p className="home-contact-label">PHONE NUMBER</p>
                <p className="home-contact-value">+(212)6 63 51 26 21</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">
                <FaClock />
              </div>
              <div>
                <p className="home-contact-label">BUSINESS HOURS</p>
                <p className="home-contact-value">Mo - Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <nav className="home-nav">
          <a className="home-nav-link" href="/">HOME</a>
          <a className="home-nav-link" href="/about">ABOUT US</a>
          <a className="home-nav-link" href="#solutions">OUR STRUCTURED SOLUTIONS</a>
          <a className="home-nav-link" href="#products">OUR PRODUCTS</a>
          <a className="home-nav-link active" href="/contact">CONTACT US</a>
        </nav>

        <section className="contact-hero">
          <div className="contact-hero-copy">
            <h1><span className="contact-underline">C</span>ONTACT <span>US</span></h1>
            <p>
              We are here to help and answer any questions you may have. Reach out to us using the information below or send us a message.
            </p>
          </div>
        </section>

        <section className="contact-cards-row">
          <div className="contact-card contact-card-left">
            <h2>GET IN TOUCH</h2>
            <div className="card-divider" />
            <div className="contact-detail">
              <div className="detail-icon"><FaUser /></div>
              <div>
                <p className="detail-title">Ms SARA FTOUH</p>
                <p className="detail-subtitle">Chief Executing Officer</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><FaRegFileAlt /></div>
              <div>
                <p className="detail-title">OFFICE</p>
                <p className="detail-subtitle">Settat, Casablanca, Morocco</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><FaPhoneAlt /></div>
              <div>
                <p className="detail-title">PHONE</p>
                <p className="detail-subtitle">+(212)6 63 51 26 21</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><FaEnvelope /></div>
              <div>
                <p className="detail-title">EMAIL</p>
                <p className="detail-subtitle">ontrac.company2023@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card-form">
            <h2>SEND US A MESSAGE</h2>
            <div className="card-divider" />
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row wide-row">
                <label>
                  <FaUser />
                  <input type="text" placeholder="Your Name" required />
                </label>
                <label>
                  <FaRegEnvelope />
                  <input type="email" placeholder="Your Email" required />
                </label>
              </div>
              <div className="form-row wide-row">
                <label>
                  <FaPhoneAlt />
                  <input type="text" placeholder="Phone Number" required />
                </label>
                <label>
                  <FaRegFileAlt />
                  <input type="text" placeholder="Subject" required />
                </label>
              </div>
              <label className="textarea-label">
                <textarea placeholder="Your Message" required />
              </label>
              <button type="submit" className="btn-submit">
                SEND MESSAGE <FaPaperPlane />
              </button>
            </form>
          </div>

          <div className="contact-card contact-card-location">
            <h2>OUR LOCATION</h2>
            <div className="card-divider card-divider-light" />
            <div className="map-shell">
              <div className="map-display">
                <div className="map-pin"> </div>
              </div>
            </div>
            <p className="location-line">Settat, Casablanca</p>
            <p className="location-line">Morocco</p>
          </div>
        </section>
      </div>
    </main>
  );
}
