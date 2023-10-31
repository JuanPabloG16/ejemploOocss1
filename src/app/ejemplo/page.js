import styles from './ejemplo.module.css';

export default function EjemploCss() {
  return (
    <div className={styles.appBody}>
      <header className={styles.header}>
        <h1>Mi Sitio Web</h1>
      </header>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#news">Noticias</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#about">Acerca de</a></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h2>Bienvenido a mi sitio web</h2>
        <p>Este es un ejemplo de una página web con React.</p>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Mi Sitio Web</p>
      </footer>
    </div>
  )
}
