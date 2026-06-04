import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <section className="contact-section py-5 ">
        <h1 className="">Contact <span className="text-pink">Us</span></h1>
        <div className="container mt-4">
          <div className="row g-4 mt-2">

            {/* Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="contact-card">
                <h4 className="contact-title">Get In Touch</h4>

                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Your Email"
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Subject"
                  />

                  <textarea
                    rows="5"
                    className="form-control mb-3"
                    placeholder="Write your message..."
                  ></textarea>

                  <button
                    type="submit"
                    className="btn contact-btn"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map + Contact Info */}
            <div className="col-12 col-lg-6">
              <div className="contact-card">

                <div className="map-wrapper mb-4">
                  <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="contact-info">

                  

                  <div className="info-item">
                    <FaPhoneAlt />
                    <span>+91 6392377675</span>
                  </div>

                  <div className="info-item">
                    <FaEnvelope />
                    <span>support@ggfashion.com</span>
                  </div>

                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>Noida, Uttar Pradesh, India</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/916392377675"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Contact;