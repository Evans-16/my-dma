import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Header.css';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDetailPage = () => {
    return location.pathname.includes('/team-details') || location.pathname.includes('/FAQs') || location.pathname.includes('/services-details');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false); // Close the menu after scrolling
  };

  return (
    <header className="header">
      <h1>Digital Media Africa</h1>
      {!isDetailPage() && (
        <>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)} 
              >
                Home
              </ScrollLink></li>
              <li><ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                About
              </ScrollLink></li>
              <li><ScrollLink
                to="services"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </ScrollLink></li>
              <li><ScrollLink
                to="clients"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Clients
              </ScrollLink></li>
              <li><ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </ScrollLink></li>
              <li><Link to="/FAQs">FAQs</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
