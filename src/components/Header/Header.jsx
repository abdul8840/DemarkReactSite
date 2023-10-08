import React, { useRef } from "react";
import "./header.css";

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active');

  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>Demark</h2>
          </div>

          {/* ========================= nevigation bar ===================== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {/* {
                            nav__links.map((item,index)=>(
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">{item.display}</a>
                                </li>
                            ))
                        } */}

              <li className="menu__item">
                <a href="/" className="menu__link">
                  Home
                </a>
              </li>

              <li className="menu__item">
                <a href="/about" className="menu__link">
                  About Us
                </a>
              </li>

              <li className="menu__item">
                <a href="/services" className="menu__link">
                  Services
                </a>
              </li>

              <li className="menu__item">
                <a href="/portfolio" className="menu__link">
                  Portfolio
                </a>
              </li>

              <li className="menu__item">
                <a href="/Contactus" className="menu__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ================== light mode ============== */}

          <div className="light_mode">
            <span>
            <i class="ri-user-fill"></i>Login/Sign Up
            </span>
          </div>

          <span className="mobile_menu" onClick={toggleMenu}>
            <i class="ri-menu-fill"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
