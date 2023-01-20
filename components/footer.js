import styles from "../styles/footer.module.css"
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>

          <Link href="/tienda">Tienda</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/nosotros">Nosotros</Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {currentYear}</p>
      </div>
    </footer>
  );
}
