import Link from "next/link";

//Layout imports
import Layout from "../components/layout";

//Tienda imports
import Guitarra from "../components/guitarra";
import guitarStyles from "../styles/guitarras.module.css"

//Blog imports
import Post from "../components/post";
import blogStyles from "../styles/blog.module.css"

//Curso imports
import Curso from "../components/curso";


export default function Home({ guitarras, posts, curso }) {
  //console.log(guitarras);
  //console.log(posts);

  return (
    <Layout
      title={`Inicio`}
      description={`Venta de Guitarras en linea, opiniones y Blog.`}
    >
      <main className="contenedor">
        <h1 className="heading">Guitarras eléctricas en venta</h1>
        <div className={guitarStyles.listing}>
          {guitarras.slice(0, 6).map((guitarra) => (
            <Guitarra key={guitarra.id} data={guitarra.attributes} />
          ))}
        </div>
        <h3>Descubre toda nuestra coleccion</h3>
        <Link
        href="/tienda">
          Visita la tienda
        </Link>
      </main>

      <Curso
      cursoData={curso.attributes} />

      <section className="contenedor">
        <h2 className="heading">Tutoriales, novedades y más...</h2>
        <div className={blogStyles.listingGrid}>
          {posts.map((post) => (
            <Post key={post.id} postData={post.attributes} />
          ))}
        </div>
        <h3>¿Te quedaste con ganas de mas?</h3>
        <Link
        href="/blog">
          Ir al blog
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const apiGuitarras = `${process.env.API_URL}/guitars?populate=imagen`;
  const apiPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const apiCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(apiGuitarras),
    fetch(apiPosts),
    fetch(apiCurso),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ]);

  //console.log(guitarras)
  //console.log(posts)

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
