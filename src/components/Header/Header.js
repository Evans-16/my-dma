import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/team">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/FAQs">FAQs</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
