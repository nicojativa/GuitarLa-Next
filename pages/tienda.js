import Link from "next/link";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/guitarras.module.css"

export default function Tienda({ guitarras }) {
  //console.log(guitarras);

  return (
    <Layout
      title={`Tienda`}
      description={`Compra guitarras en linea al mejor precio y a domicilio`}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>

        <div className={styles.listing}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} data={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

/*/Static Site Generation - SSG (La informacion se carga en el build)
export async function getStaticProps(){

  //Extraigo la informacion de la API mediante una URL
  const res = await fetch(`${process.env.API_URL}/guitars`)

  //Convierto la informacion a json y destructuro la respuesta renombrando la data como "guitarras"
  const {data: guitarras} = await res.json()

  //Paso el json a una prop que se puede utilizar como {guitarras}
  return {
    props: {
      guitarras
    }
  }

}*/

//Server Side Rendering - SSR (La informacion es dinamica y se carga en cada consulta)
export async function getServerSideProps() {
  //Extraigo la informacion de la API mediante una URL
  const res = await fetch(`${process.env.API_URL}/guitars?populate=imagen`);

  //Convierto la informacion a json y destructuro la respuesta renombrando la data como "guitarras"
  const { data: guitarras } = await res.json();

  //Paso el json a una prop que se puede utilizar como {guitarras}
  return {
    props: {
      guitarras,
    },
  };
}
