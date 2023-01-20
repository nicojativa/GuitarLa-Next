import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitarra({ data }) {
  const { nombre, descripcion, precio, url, imagen } = data;

  //console.log(data);

  return (
    <div className={styles.guitarra}>
      <Image
      className={styles.imagen}
        alt={`Guitarra eléctrica ${nombre}`}
        src={imagen.data.attributes.formats.medium.url}
        width={333}
        height={750}
      />

      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}</p>
        <Link className={styles.enlace} href={`guitarras/${url}`}>Ver producto</Link>
      </div>
    </div>
  );
}
