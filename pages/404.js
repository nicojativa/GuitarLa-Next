import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";

export default function Pagina404() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.header}>Error 404: Página no encontrada</h1>
        <div>
          <Image
            className={styles.image}
            src="/img/6329883.jpg"
            alt="404 Image"
            width={400}
            height={400}
            priority="true"
          />
        </div>

        <Link className={styles.backlink} href="/">
          Volver al inicio
        </Link>
      </div>
    </Layout>
  );
}
