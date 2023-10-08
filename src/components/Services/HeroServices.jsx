import React from 'react'
import '../../styles/hero.css'
import heroDarkImgService from '../../images/dm22.png'

const HeroServices = () => {
  return (
    <>

<section className="hero_section">
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                        <h2>Welcome To,</h2>
                        <h2>Our Services Page</h2>
                        <h2 className="highlight">Choose Your Service</h2>
                    </div>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Et voluptates aut eius perspiciatis, 
                    maxime praesentium!</p>

                    <div className="hero_btns">
                        <button className="primary_btn">Get Start Now</button>
                        <button className="secondary_btn">Discover More</button>
                    </div>
                </div>

                <div className="hero_img">
                    <img src={heroDarkImgService} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default HeroServices