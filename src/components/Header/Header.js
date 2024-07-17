import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigationLinks = [
    { name: 'Home', to: '/', component: Link },
    { name: 'Services', to: '/services-details', component: Link },
    { name: 'About', to: '/team-details', component: Link },
    { name: 'Blog', to: '/Blog', component: Link },
    //{ name: 'Clients', to: 'clients', component: ScrollLink },
    { name: 'Contact', to: '/contact', component: Link },
    { name: 'FAQs', to: '/FAQs', component: Link },
  ];

  return (
    <header className="header">
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/Asset 1.png`} alt="Home" />
      </Link>
      {(
        <>
          <div className="menu-toggle-container">
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.component === ScrollLink ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <Link to={link.to} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
