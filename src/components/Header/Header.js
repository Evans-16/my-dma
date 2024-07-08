import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDetailPage = () => location.pathname.includes('/team-details') ||
                             location.pathname.includes('/FAQs') ||
                             location.pathname.includes('/services-details') ||
                             location.pathname.includes('/Blog') ||
                             location.pathname.includes('/blog/');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigationLinks = [
    { name: 'Home', to: 'home', component: ScrollLink },
    { name: 'Services', to: 'services', component: ScrollLink },
    { name: 'About', to: 'team', component: ScrollLink },
    { name: 'Blog', to: '/Blog', component: Link },
    { name: 'Clients', to: 'clients', component: ScrollLink },
    { name: 'Contact', to: 'contact', component: ScrollLink },
    { name: 'FAQs', to: '/FAQs', component: Link },
  ];

  return (
    <header className="header">
      <h1>Digital Media Africa</h1>
      {!isDetailPage() && (
        <>
          <div className="menu-toggle-container">
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
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
