import React from "react";
import Header from "../Header/Header";
import HeroAbout from "../About/HeroAbout";
import "../About/about.css";
import aboutImg from '../../images/about-us.jpg';
import Footer from "../UI/Footer";
import Enquiry from "../UI/Enquiry";

const chooseData = [
  {
    icon: "ri-wifi-fill",
    title: "First Working Process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo beatae earum sed non architecto!",
  },

  {
    icon: "ri-team-fill",
    title: "Dedicated Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo beatae earum sed non architecto!",
  },

  {
    icon: "ri-customer-service-2-fill",
    title: "24/7 Hour Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo beatae earum sed non architecto!",
  },
];

const About = () => {
  return (
    <>
      <Header />
      <HeroAbout />

      <section id="about">
        <div className="container">
          <div className="about_wrapper">
          <div className="about_img">
                <img src={aboutImg} alt="About Img" />
            </div>
            
            <div className="about_content">
              <h6 className="subtitle">Why Choose Us</h6>
              <h2>Specialist in aviding Clients On</h2>
              <h2 className="highlight">Financial Challenges</h2>

              <p className="description about-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                magni laudantium ex repudiandae perferendis veritatis blanditiis
                eveniet molestiae est nisi!
              </p>

              <div className="choose-item-wrapper">
                {chooseData.map((item, index) => (
                  <div className="choose-us-item" key={index}>
                    <span className="choose-us-icon">
                      <i class={item.icon}></i>
                    </span>
                    <div>
                      <h4 className="choose-us-title">{item.title}</h4>
                      <p className="description">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Enquiry />

      <Footer />
    </>
  );
};

export default About;
