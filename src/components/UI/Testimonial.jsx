
import "../../styles/testimonial.css";
import React, { useState } from 'react';

import P1 from '../../images/pic-1.png'
import P2 from '../../images/pic-2.png'
import P3 from '../../images/pic-3.png'

const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Company A',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: P1, // Import or provide the image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Marketing Manager, Company B',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: P2, // Import or provide the image URL
    },
    {
      id: 3,
      name: 'Nebul Shah',
      position: 'Marketing Manager, Company B',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: P3, // Import or provide the image URL
    },
    // Add more testimonials here
  ];

const Testimonial = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonial">
        <div className="container">
        <div className="service_top-content">
              <h6 className="subtitle">Our Clients</h6>
              <h2>See What Our <span className="highlight">Client Said</span></h2>
            </div>
        <div className="testimonial-slider">
      <div className="testimonial-card">
        <img
          src={testimonials[activeIndex].imageSrc}
          alt={testimonials[activeIndex].name}
          className="client-image"
        />
        <p className="testimonial-text">{testimonials[activeIndex].text}</p>
        <p className="testimonial-author">{testimonials[activeIndex].name}</p>
        <p className="testimonial-position">{testimonials[activeIndex].position}</p>
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-button prev-button">
          &#8249;
        </button>
        <button onClick={nextSlide} className="slider-button next-button">
          &#8250;
        </button>
      </div>
    </div>
        </div>
    </div>
  );
      
    };

export default Testimonial;
