import React from 'react';
import '../../styles/footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>DEMARK</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae unde, fuga quidem nobis veniam officia!</p>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Term & Policy</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Change Password</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Column 3</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Subscribe to Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Demark (Made by Abdul Rahman). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
