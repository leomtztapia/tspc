'use client';

import { useState, useEffect } from 'react';
import styles from './PhotoGallery.module.css';

// Fotos del slideshow mezcladas aleatoriamente para mayor variedad
const sampleImages = [
  '/assets/tspc_slideshow-7.jpg',
  '/assets/tspc_slideshow1-1.jpg',
  '/assets/tspc_slideshow-5.jpg',
  '/assets/tspc_slideshow1-3.jpg',
  '/assets/tspc_slideshow-2.jpg',
  '/assets/tspc_slideshow1-6.jpg',
  '/assets/tspc_slideshow1-2.jpg',
  '/assets/tspc_slideshow-4.jpg',
  '/assets/tspc_slideshow1-8.jpg',
  '/assets/tspc_slideshow-1.jpg',
  '/assets/tspc_slideshow1-4.jpg',
  '/assets/tspc_slideshow-6.jpg',
  '/assets/tspc_slideshow1-7.jpg',
  '/assets/tspc_slideshow-3.jpg',
  '/assets/tspc_slideshow1-5.jpg',
  '/assets/tspc_slideshow-8.jpg',
  '/assets/tspc_slideshow1-9.jpg',
  '/assets/tspc_slideshow-9.jpg',
  '/assets/tspc_slideshow1-10.jpg',
  '/assets/tspc_slideshow-10.jpg',
];

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sampleImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        {/* Slideshow principal */}
        <div className={styles.slideshow}>
          <div className={styles.slideContainer}>
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>
          
          {/* Indicadores */}
          <div className={styles.indicators}>
            {sampleImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentImage ? styles.active : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 