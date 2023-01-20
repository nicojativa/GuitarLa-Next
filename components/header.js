import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";
import logo from "../public/img/logo.svg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
  const router = useRouter();
  //console.log(router);

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
          className={styles.logo}
            src={logo}
            width={200}
            height={40}
            alt="Logotipo GuitarLa"
          />
        </Link>

        <nav className={styles.navegacion}>
          <Link 
          href="/" 
          className={router.pathname === "/" ? styles.active : null}
          >
            Inicio
          </Link>

          <Link
            href="/tienda"
            className={router.pathname === "/tienda" ? styles.active : null}
          >
            Tienda
          </Link>

          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : null}
          >
            Blog
          </Link>

          <Link
            href="/nosotros"
            className={router.pathname === "/nosotros" ? styles.active : null}
          >
            Nosotros
          </Link>

          <Link
            href="/carrito"
            className={styles["shopping-cart"]}
          >
            <ShoppingCartOutlinedIcon sx={{ color: ["black"] }} fontSize="large"  /><span> Carrito</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}