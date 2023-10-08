import React from "react";
import HeroContactus from "../Contact/HeroContactus";
import Header from "../Header/Header";
import '../Contact/contactus.css';
import Footer from "../UI/Footer";


const Contactus = () => {
  return (
    <>
      <Header />
      <HeroContactus />

      <section className="contact">
        <div className="container">
          <div className="service_top-content">
            <h6 className="subtitle">Contact Us</h6>
            <h2>Here You Can <span className="highlight">Contact With Us</span></h2>
          </div>

          <div className="google_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11450.259795378479!2d73.87532170181889!3d18.497685990122626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696686097738!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="contact_wrapper">
            <div className="contact_content">
              <div className="contact_item">
                <h2>Contact <span className="highlight">Info</span></h2>

                <div className="inner_content">
                  <div className="contact_num">
                    <div className="icon"><i class="ri-phone-fill"></i></div>
                    <p>+91 8886667770</p>
                    <p>+91 2003784589</p>
                  </div>
                  <div className="contact_mail">
                  <div className="icon"><i class="ri-mail-fill"></i></div>
                    <p>abcd9870@gmail.com</p>
                    <p>demark00@gmail.com</p>
                  </div>
                  <div className="contact_address">
                  <div className="icon"><i class="ri-map-pin-fill"></i></div>
                    <p>447/34, Pune</p>
                    <p>Maharastra, India</p>
                  </div>
                </div>
                <div className="social_icon">
                <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <span>
                    <i class="ri-instagram-fill"></i>
                  </span>
                  <span>
                    <i class="ri-facebook-circle-fill"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-fill"></i>
                  </span>
                </div>
              </div>

              <div className="contact_form">
                <form action="/" className="form_content">
                  <div className="name">
                  <i class="ri-user-fill"></i> <input type="text" placeholder="Full Name" required />
                  </div>
                  
                  <div className="name">
                  <i class="ri-mail-fill"></i> <input type="email" placeholder="Mail" required />
                  </div>

                  <div className="name">
                  <i class="ri-phone-fill"></i> <input type="number" placeholder="Phone Number" required />
                  </div>

                  <div className="name">
                  <i class="ri-chat-1-fill"></i><input type="textarea" width="100%" placeholder="Message" required />
                  </div>

                  <div className="hero_btns">
                        <button className="primary_btn">Submit Now</button>
                        <button className="secondary_btn">Reset Here</button>
                    </div>

                </form>
              </div>

            </div>
          </div>

          

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactus;
