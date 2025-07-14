import styles from './MenuOrder.module.css';

const pizzas = [
  {
    name: 'Pepperoni',
    image: '/assets/pepperoni.jpg',
    description: 'Pepperoni, queso y salsa de tomate',
  },
  {
    name: 'Margarita',
    image: '/assets/margarita.jpg',
    description: 'Tomatitos, pesto rojo y verde, queso y salsa de tomate',
  },
  {
    name: 'Sr. Rock',
    image: '/assets/srrock.jpg',
    description: 'Salchicha de res, cebolla caramelizada, queso y salsa de tomate',
  },
  {
    name: 'GHCP',
    image: '/assets/ghcp.jpg',
    description: '"La Green Hot Chili Pepper" la pepperoni con jalapeños y mayonesa de ajo.',
  },
];

export default function MenuOrder() {
  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestro Menú</h2>
        <p className={styles.subtitle}>
          Descubre nuestras pizzas artesanales con ingredientes frescos y sabores únicos
        </p>
        <div className={styles.menuGrid}>
          {pizzas.map((pizza) => (
            <div className={styles.menuItem} key={pizza.name}>
              <div className={styles.menuImage}>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className={styles.menuImg}
                  style={{ aspectRatio: '1 / 1', objectFit: 'cover', width: '100%', height: 'auto' }}
                  loading="lazy"
                />
              </div>
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.orderSection}>
          <h3>¿Listo para ordenar?</h3>
          <p>Explora nuestro menú completo y haz tu pedido en línea</p>
          <a 
            href="https://menubot.lat/menu/the-secret-pizza-club" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.orderButton}`}
          >
            Ver Menú y Ordenar
          </a>
        </div>
      </div>
    </section>
  );
} 