import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className="professional-header">
      <div className="header-container">
        <div className="logo-brand" onClick={() => handleNavigation('/')}>
          <span className="brand-name">Joseph Ndunche</span>
          <span className="brand-title">Fullstack Developer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/*Mobile Menu Toggle*/}
        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => handleNavigation(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

