import React from "react";
import "../../styles/services.css";
import Header from "../Header/Header";
import HeroServices from "./HeroServices";
import Footer from "../UI/Footer";
import '../../styles/banner.css';

import C4 from '../../images/c1.png';
import C5 from '../../images/dms1.png';
import C3 from '../../images/dms4.png';
import C2 from '../../images/c5.png';
import C1 from '../../images/dms1.png';


const serviceData = [
  {
    icon: "ri-seo-line",
    title: "SEO",
    desc: "SEO involves optimizing your website's content and structure to improve its visibility in search engine results pages (SERPs). The goal is to increase organic (non-paid) traffic by ranking",
  },
  {
    icon: "ri-landscape-line",
    title: "Social Media Marketing",
    desc: "This includes creating and managing social media profiles on platforms like Facebook, Instagram, Twitter, LinkedIn, and others. It involves posting content, engaging with followers, and... ",
  },
  {
    icon: "ri-mail-line",
    title: "Email Marketing",
    desc: "Email marketing involves sending targeted emails to a list of subscribers to promote products, services, or events. It's an effective way to nurture leads and maintain customer relationships.",
  },
  {
    icon: "ri-rocket-line",
    title: "Content Marketing",
    desc: "Content marketing focuses on creating and distributing valuable, relevant content to attract and engage a target audience. This can include blog posts, articles, videos, infographics, and more.",
  },
];

const serviceData2 = [
    {
        icon: "ri-apps-line",
        title: "Affiliate Marketing",
        desc: " In affiliate marketing, businesses partner with affiliates or publishers who promote their products or services in exchange for a commission on sales or leads generated through their referral.",
      },
      {
        icon: "ri-slideshow-line",
        title: "Content Management",
        desc: "Developing a comprehensive content strategy involves planning, creating, and managing content across various digital channels to align with business goals and customer needs.",
      },
      {
        icon: "ri-code-s-slash-line",
        title: "Web Design and Development",
        desc: "A well-designed and user-friendly website is crucial for effective digital marketing. Services may include website creation, redesign, and optimization.",
      },
      {
        icon: "ri-smartphone-line",
        title: "Mobile Marketing",
        desc: "Tracking and analyzing data from digital marketing efforts is essential for making informed decisions and optimizing campaigns. Tools like Google Analytics help in this regard.",
      },
]


const services = () => {
  return ( <>

    <Header />
    <HeroServices />

    <section id="service">
      <div className="container">
        <div className="service_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save Time Managing Your Business</h2>
          <h2 className="highlight">With Our Best Services</h2>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="service_item" key={index}>
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="service_item-wrapper">
          {serviceData2.map((item, index) => (
            <div className="service_item" key={index}>
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="banner_content">
                    <div className="banner_inner_content">
                        <h6 className='subtitle'>Top Services</h6>
                        <h2>Search Engine Optimization (SEO)</h2>
                        <p className="description">
                        SEO involves optimizing a website to rank higher in search engine results pages (SERPs). This includes keyword research, on-page optimization, technical SEO, and link building to improve organic search visibility.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="banner_img">
                        <img src={C4} alt="" />
                    </div>
                </div>

                <div className="banner_content-2">
                <div className="banner_img">
                        <img src={C5} alt="" />
                    </div>

                    <div className="banner_inner_content">
                        <h6 className='subtitle'>Top Services</h6>
                        <h2>Social Media Marketing</h2>
                        <p className="description">
                        Social media marketing involves creating and sharing content on social media platforms to increase brand awareness, engagement, and reach. Services often include social media strategy, content creation, and paid advertising.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>

                <div className="banner_content">
                    <div className="banner_inner_content">
                        <h6 className='subtitle'>Top Services</h6>
                        <h2>Content Marketing</h2>
                        <p className="description">
                        Content marketing focuses on creating valuable and relevant content to attract and engage the target audience. It includes blog posts, articles, videos, infographics, and more.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="banner_img">
                        <img src={C2} alt="" />
                    </div>
                </div>

                <div className="banner_content-2">
                <div className="banner_img">
                        <img src={C3} alt="" />
                    </div>

                    <div className="banner_inner_content">
                        <h6 className='subtitle'>Top Services</h6>
                        <h2>Mobile Marketing</h2>
                        <p className="description">
                        Optimizing digital marketing strategies for mobile devices, including mobile apps, mobile advertising, and mobile-friendly website design.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>

                <div className="banner_content">
                    <div className="banner_inner_content">
                        <h6 className='subtitle'>Top Services</h6>
                        <h2>Affiliate Marketing</h2>
                        <p className="description">
                        Affiliate marketing involves partnerships with other websites or influencers who promote products or services in exchange for a commission on sales generated through their referrals.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="banner_img">
                        <img src={C1} alt="" />
                    </div>
                </div>

      </div>

    </section>


    <Footer />
    </>
  );
};

export default services;
