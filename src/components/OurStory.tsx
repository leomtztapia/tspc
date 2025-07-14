import React from 'react';
import styles from './OurStory.module.css';

const OurStory: React.FC = () => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre nuestras pizzas 🍕</h2>
        <div className={styles.content}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <p>
                Chuy y Leo se conocieron tocando en bandas, pero su mejor colaboración empezó con pizzas en casa. Primero en la de Chuy, luego en la de Leo. Sin nombre, sin plan, solo hambre, amigos y ganas de cocinar algo con alma.
              </p>
              <p>
                No son chefs ni empresarios. Solo dos tipos que aman la pizza y empezaron horneando los domingos, hasta que se volvió tradición.
              </p>
              <p>
                Su estilo es indie: masa hecha a mano, sabor honesto y cero pretensión. Creen que una buena pizza no necesita mantel blanco ni local elegante, solo corazón y calle.
              </p>
              <p>
                Sabemos que parece un club secreto, pero si estás leyendo esto —o ya probaste una de nuestras pizzas— estás más que invitado. Siempre hay lugar para uno más.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img 
                src="/assets/carritoprint.jpeg" 
                alt="Chuy y Leo en su carrito de pizzas" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 