'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './BehindTheScenes.module.css';

const videos = [
  { id: 1, src: '/assets/Video1.mp4', title: 'Behind the Scenes 1' },
  { id: 2, src: '/assets/Video2.mp4', title: 'Behind the Scenes 2' },
  { id: 3, src: '/assets/Video3.mp4', title: 'Behind the Scenes 3' },
  { id: 4, src: '/assets/Video4.mp4', title: 'Behind the Scenes 4' },
  { id: 5, src: '/assets/Video5.mp4', title: 'Behind the Scenes 5' },
  { id: 6, src: '/assets/Video6.mp4', title: 'Behind the Scenes 6' },
  { id: 7, src: '/assets/Video7.mp4', title: 'Behind the Scenes 7' },
];

export default function BehindTheScenes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    // Play all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(console.error);
      }
    });
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  };

  const scrollToVideo = (index: number) => {
    setCurrentIndex(index);
    const videoElement = videoRefs.current[index];
    if (videoElement && containerRef.current) {
      const container = containerRef.current;
      const videoWidth = videoElement.offsetWidth;
      const scrollPosition = index * videoWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextVideo = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    scrollToVideo(nextIndex);
  };

  const prevVideo = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    scrollToVideo(prevIndex);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join the club</h2>
        <p className={styles.subtitle}>
          Descubre el proceso detrás de cada pizza y evento en TSPC
        </p>
        
        <div className={styles.videoCarousel}>
          <div className={styles.carouselContainer} ref={containerRef}>
            {videos.map((video, index) => (
              <div key={video.id} className={styles.videoItem}>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  className={styles.video}
                  muted
                  loop
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  autoPlay={isPlaying}
                />
              </div>
            ))}
          </div>
          
          <div className={styles.carouselControls}>
            <button 
              onClick={prevVideo}
              className={styles.controlButton}
              aria-label="Video anterior"
            >
              ‹
            </button>
            <div className={styles.dots}>
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToVideo(index)}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  aria-label={`Ir al video ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextVideo}
              className={styles.controlButton}
              aria-label="Video siguiente"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.cta}>
          <p>¿Quieres ver más contenido? Síguenos en Instagram</p>
          <a
            href="https://www.instagram.com/thesecretpizzaclub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            @thesecretpizzaclub
          </a>
        </div>
      </div>
    </section>
  );
} 