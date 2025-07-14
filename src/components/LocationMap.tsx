import styles from './LocationMap.module.css';

export default function LocationMap() {
  return (
    <section id="location" className={styles.locationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ubicación</h2>
        <p className={styles.subtitle}>
          Encuéntranos en el corazón de Chihuahua
        </p>
        
        <div className={styles.locationGrid}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=Blvd.+Gustavo+D%C3%ADaz+Ordaz+1203,+Zona+Centro,+31000+Chihuahua,+Chihuahua,+M%C3%A9xico&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Secret Pizza Club Location"
            />
          </div>
          
          <div className={styles.locationInfo}>
            <h3>Dirección</h3>
            <p className={styles.address}>
              Blvd. Gustavo Díaz Ordaz 1203<br />
              Zona Centro, 31000<br />
              Chihuahua, Chihuahua<br />
              México
            </p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.icon}>🚗</span>
                <div>
                  <h4>Estacionamiento</h4>
                  <p>Estacionamiento público disponible en la zona</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.icon}>🐕</span>
                <div>
                  <h4>Pet Friendly</h4>
                  <p>Bienvenidos con tus mascotas</p>
                </div>
              </div>
            </div>
            
            <div className={styles.cta}>
              <a 
                href="https://g.co/kgs/4b9BTi3" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`btn btn-secondary ${styles.directionsButton}`}
              >
                Obtener Direcciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 