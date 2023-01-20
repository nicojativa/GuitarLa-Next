import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";

import { useState } from "react";

export default function Producto({ guitarra, agregarCarrito }) {

  //Use UseState to handle quantity product
  const [cantidad, setCantidad] = useState(0);
  //console.log(cantidad);

  const handleSubmit = e => {

    e.preventDefault()

    if(cantidad < 1) {
      alert("Selecciona la cantidad para continuar.")
      return
    }

    //Construir objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    //console.log(guitarraSeleccionada)
    agregarCarrito(guitarraSeleccionada);
  }

  //Destructurar la data de la API de la guitarra
  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

  return (
    <Layout
      title={`Guitarra eléctrica ${nombre}`}
      description={`Comprar guitarra electrica ${nombre} en línea al mejor precio.`}
    >
      <div className={styles.guitarra}>
        <Image
          className={styles.imagen}
          alt={`Guitarra eléctrica ${nombre}`}
          src={imagen.data.attributes.url}
          width={333}
          height={750}
          priority="true"
        />

        <div className={styles.contenido}>
          <h3 className={styles.nombre}>{nombre}</h3>
          <p className={styles.singleDescription}>{descripcion}</p>
          <p className={styles.precio}>
            <span className={styles["precio-label"]}>Precio:</span>$ {precio}
          </p>

          <form onSubmit={handleSubmit} className={styles["agregar-carrito"]}>
            <div className={styles.quantity}>
              <label htmlFor="cantidad">Cantidad:</label>
              <select
                onChange={(e) => setCantidad(+e.target.value)}
                id="cantidad"
                className={styles.selector}
              >
                <option value="0">Seleccionar</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <input
              className={styles["add-to-cart-btn"]}
              type="submit"
              value="Añadir al carrito"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {

  const respuesta = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await respuesta.json();
  //console.log(data);

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  //console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}

/*export async function getServerSideProps({ query: { url } }) {
  console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}*/
