import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner container">
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">PB</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
                id={`nav-${link.id}`}
              >
                {link.label}
                <span className="nav-link-dot" />
              </button>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-primary navbar-cta"
          href="mailto:princebind@gmail.com"
          id="navbar-hire-btn"
        >
          Hire Me
        </a>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a className="btn btn-primary" href="mailto:princebind@gmail.com" style={{ width: '100%', justifyContent: 'center' }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
