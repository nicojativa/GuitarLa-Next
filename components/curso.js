import styles from "../styles/curso.module.css"

export default function Curso({ cursoData }) {

  const { titulo, contenido, imagen } = cursoData;

  return (
    <section className={`curso contenedor ${styles.curso}`}>
      <style jsx>{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen.data.attributes.url});
        }
      `}</style>
      <div>
        <div className="contenedor">
          <h2>{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  );
}
