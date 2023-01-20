import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={`Nosotros`}
      description={`Descubre mas sobre la tienda mas famosa de guitarras en linea`}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            className={styles.hero}
            src="/img/nosotros.jpg"
            alt="nosotros"
            width={600}
            height={400}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              lobortis et ipsum et semper. Aliquam condimentum maximus ex vitae
              sodales. Suspendisse aliquet posuere ullamcorper. Nam id porttitor
              ipsum. Mauris nec neque porta, venenatis neque sed, mollis lorem.
              Suspendisse sit amet viverra nisl, a mattis nisi. Donec at nisl
              ligula.
            </p>
            <p>
              Nulla facilisi. Duis tincidunt varius nisi ultrices placerat.
              Etiam orci ligula, porta id felis pellentesque, malesuada bibendum
              neque. Curabitur ultrices vehicula felis, iaculis ultricies nisi
              mollis id. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Quisque fringilla tincidunt
              libero, vel sagittis elit imperdiet aliquet. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
