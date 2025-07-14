'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo_v2.png"
            alt="The Secret Pizza Club"
            width={200}
            height={50}
            priority
          />
        </div>
        
        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          <a onClick={() => scrollToSection('menu')} className={styles.menuItem}>
            Menú
          </a>
          <a onClick={() => scrollToSection('hours')} className={styles.menuItem}>
            Horarios
          </a>
          <a onClick={() => scrollToSection('location')} className={styles.menuItem}>
            Ubicación
          </a>
          <a onClick={() => scrollToSection('story')} className={styles.menuItem}>
            Historia
          </a>
          <a onClick={() => scrollToSection('contact')} className={styles.menuItem}>
            Contacto
          </a>
        </div>

        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
} 