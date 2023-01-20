import Link from "next/link";
import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/blog.module.css"

export default function Blog({ posts }) {
  //console.log(posts);

  return (
    <Layout
      title={`Blog`}
      description={`Descubre las ultimas noticias y tendencias sobre guitarras y musica.`}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.listingGrid}>
          {posts.map((post) => (
            <Post key={post.id} postData={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  //Extraigo la informacion de la API mediante una URL
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);

  //Convierto la informacion a json y destructuro la respuesta renombrando la data como "posts"
  const { data: posts } = await res.json();

  //Paso el json a una prop que se puede utilizar como {posts}
  return {
    props: {
      posts,
    },
  };
}
