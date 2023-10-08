import React from 'react';
import '../../styles/banner.css';

import C4 from '../../images/c4.png'
import C2 from '../../images/c2.png'
import C3 from '../../images/c3.png'
import C1 from '../../images/dms2.png'


const Banner = () => {
  return (
    <>

    <section className="banner">
        <div className="container">
        <div className="service_top-content">
          <h6 className="subtitle">About Digital Marketing</h6>
          <h2>Top Content Of Digital Marketing</h2>
          <h2 className="highlight">With Our Best Services</h2>
        </div>
            <div className="banner-wrapper">
                <div className="banner_content">
                    <div className="banner_inner_content">
                        <h6 className='subtitle'>About Digital Marketing First</h6>
                        <h2>Diverse Channels and Platforms</h2>
                        <p className="description">
                        Digital marketing encompasses a wide range of channels and platforms, including search engines, social media, email, content marketing, PPC advertising, and more. Each channel has its unique strengths and can be tailored to reach specific audiences.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    <div className="banner_img">
                        <img src={C4} alt="" />
                    </div>
                </div>
                
                <div className="banner_content-2">
                <div className="banner_img">
                        <img src={C2} alt="" />
                    </div>

                    <div className="banner_inner_content">
                        <h6 className='subtitle'>About Digital Marketing Second</h6>
                        <h2>Data-Driven Decision Making</h2>
                        <p className="description">
                        Digital marketing relies heavily on data and analytics. Marketers can track and measure various metrics to assess the performance of campaigns, such as website traffic, conversion rates, click-through rates, and customer behavior. This data-driven approach allows for continuous optimization and informed decision-making.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    
                </div>
                
                <div className="banner_content">

                    <div className="banner_inner_content">
                        <h6 className='subtitle'>About Digital Marketing Third</h6>
                        <h2>Targeted and Personalized Marketing</h2>
                        <p className="description">
                        Digital marketing enables businesses to target their ideal audience with precision. Through audience segmentation and personalization, marketers can create highly relevant and customized content and advertisements, increasing the likelihood of engagement and conversion.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>

                    <div className="banner_img">
                        <img src={C3} alt="" />
                    </div> 
                    
                </div>

                <div className="banner_content-2">
                <div className="banner_img">
                        <img src={C1} alt="" />
                    </div>

                    <div className="banner_inner_content">
                        <h6 className='subtitle'>About Digital Marketing Four</h6>
                        <h2>Cost-Effective and Measurable</h2>
                        <p className="description">
                        Compared to traditional marketing methods, digital marketing is often more cost-effective. You can start campaigns with a limited budget and scale as you see positive results. Additionally, the measurability of digital marketing allows you to track the ROI (Return on Investment) of your marketing efforts more accurately.
                        </p>
                        <button className="secondary_btn-2">Learn More <i class="ri-arrow-right-line"></i></button>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default Banner