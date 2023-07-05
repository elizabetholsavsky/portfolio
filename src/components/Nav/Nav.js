import React, { useState, useEffect } from 'react';
import './Nav.css'

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavItemClick = (sectionId) => {
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <nav className="navbar">
      <a href="/" className="name">
        <h1 >Elizabeth Olsavsky</h1>
      </a>
      <ul className="nav-list">
        <li>
          <a href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('about')}>
              About
          </a>
        </li>
        
        <li>
          <a href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('projects')}>
              Projects
          </a>
        </li>
        
        <li>
          <a href="#resume"
            className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('resume')}>
              Resume
          </a>
        </li>

        <li>
          <a href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('contact')}>
              Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav