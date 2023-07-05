import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  const handleNavItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: '-50% 0% -50% 0%', 
    });

    const sections = ['home', 'about', 'projects', 'resume', 'contact'];
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
        sectionRefs.current[sectionId] = section;
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        observer.unobserve(sectionRefs.current[sectionId]);
      });
    };
  }, []);

  useEffect(() => {
    const handleSmoothScrollEnd = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const visibleSections = sections.filter((sectionId) => {
        const section = sectionRefs.current[sectionId];
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0]);
      }
    };

    window.addEventListener('scroll', handleSmoothScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleSmoothScrollEnd);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="/" className="name">
        <h1>Elizabeth Olsavsky</h1>
      </a>
      <ul className="nav-list">
        <li>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('about')}>
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={`nav-link ${
              activeSection === 'projects' ? 'active' : ''
            }`}
            onClick={() => handleNavItemClick('projects')}>
            Projects
          </a>
        </li>

        <li>
          <a
            href="#resume"
            className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => handleNavItemClick('resume')}>
            Resume
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={`nav-link ${
              activeSection === 'contact' ? 'active' : ''
            }`}
            onClick={() => handleNavItemClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
