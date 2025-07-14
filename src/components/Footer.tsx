'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img 
              src="/assets/Welcome to the club2.png" 
              alt="Welcome to the club" 
              className={styles.footerImage}
            />
          </div>
        </div>
      </footer>
      
      <div className={styles.miniFooter}>
        <div className={styles.miniContainer}>
          <div className={styles.copyright}>
            © TSPC. All Rights Reserved.
          </div>
          <div className={styles.contact}>
            T. +52 614 127 3468 | +52 614 127 3468 | tspcmx@gmail.com
          </div>
          <button onClick={scrollToTop} className={styles.backToTop}>
            Volver al inicio
          </button>
        </div>
      </div>
    </>
  );
} 