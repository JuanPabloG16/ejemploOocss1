import styles from './ejemplo1.module.css';

export default function Ejemplo1() {
  return (
    <div className={styles.appBody}>
      <header className={`${styles.container} ${styles.header}`}>
        <h1>Mi Sitio Web</h1>
      </header>

      <nav className={styles.marginTop}>
        <ul className={`${styles.listHorizontal} ${styles.menu}`}>
          <li className={styles.floatLeft}><a className={styles.link} href="#home">Inicio</a></li>
          <li className={styles.floatLeft}><a className={styles.link} href="#news">Noticias</a></li>
          <li className={styles.floatLeft}><a className={styles.link} href="#contact">Contacto</a></li>
          <li className={styles.floatLeft}><a className={styles.link} href="#about">Acerca de</a></li>
        </ul>
      </nav>

      <main className={styles.margin}>
        <h2>Bienvenido a mi sitio web</h2>
        <p>Este es un ejemplo de una página web con React.</p>
      </main>

      <footer className={`${styles.container} ${styles.footer}`}>
        <p>© 2023 Mi Sitio Web</p>
      </footer>
    </div>
  )
}

