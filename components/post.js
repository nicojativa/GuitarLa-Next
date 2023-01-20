import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Post({ postData }) {
  const { titulo, contenido, imagen, url } = postData;

  console.log(postData);
  return (
    <article className={styles.post}>
    <div className={styles.image_holder}>
    <Image
        className={styles.imagen}
        src={imagen.data.attributes.formats.medium.url}
        width={750}
        height={563}
        alt={`Imagen Post ${titulo}`}
      />
    </div>
      

      <div>
        <h3 className={styles.heading}>
          <Link className={styles.titulo} href={`/blog/${url}`}>
            {titulo}
          </Link>
        </h3>
        <p className={styles.descripcion}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer mas...
        </Link>
      </div>
    </article>
  );
}
