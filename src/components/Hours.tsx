import styles from './Hours.module.css';

export default function Hours() {
  const hours = [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: 'Cerrado' },
    { day: 'Miércoles', hours: 'Cerrado' },
    { day: 'Jueves', hours: '18:00 - 22:00' },
    { day: 'Viernes', hours: '18:00 - 22:00' },
    { day: 'Sábado', hours: '18:00 - 22:00' },
    { day: 'Domingo', hours: 'Cerrado' }
  ];

  return (
    <section id="hours" className={styles.hoursSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Horarios</h2>
        <p className={styles.subtitle}>
          Solo abierto de Jueves a Sábado de 6:00pm a 10:00pm
        </p>
        
        <div className={styles.hoursGrid}>
          {hours.map((item, index) => (
            <div key={index} className={styles.hourItem}>
              <span className={styles.day}>{item.day}</span>
              <span className={styles.time}>{item.hours}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <p>* Horarios sujetos a cambios. Te recomendamos llamar antes de visitarnos.</p>
        </div>
      </div>
    </section>
  );
} 