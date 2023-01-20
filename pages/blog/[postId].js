import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css";

export default function Post({ postData }) {
  const { titulo, contenido, imagen, url, publishedAt } =
    postData[0].attributes;

  console.log(titulo);

  return (
    <Layout title={titulo} contenido={`Descubre ${titulo} en GuitarLa.`}>
      <div className={styles["single-post"]}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles["published-date"]}>{publishedAt}</p>
        <Image
          className={styles.imagen}
          src={imagen.data.attributes.url}
          alt={`Blog {titulo}`}
          width={900}
          height={400}
        />
        <p className={styles.texto}>{contenido}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { postId } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${postId}&populate=imagen`
  );
  const { data: postData } = await respuesta.json();

  //console.log(data);
  return {
    props: {
      postData,
    },
  };
}
