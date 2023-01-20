import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">Mi carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.articulos}>
            <h2>Tus articulos:</h2>

            {carrito.length === 0
              ? "Carrito vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div className={styles["contenedor-imagen"]}>
                      <Image
                        src={producto.imagen}
                        alt={`Guitarra electrica ${producto.nombre}`}
                        width={135}
                        height={250}
                      />
                    </div>

                    <div className={styles["contenido-producto"]}>
                      <h3 className={styles.nombre}>{producto.nombre}</h3>
                      <p className={styles.precio}>$ {producto.precio}</p>
                      <div className={styles.quantity}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select
                          id="cantidad"
                          className={styles.selector}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <button
                          className={styles["delete-btn"]}
                          onClick={() => eliminarProducto(producto.id)}
                        >
                          <DeleteOutlineOutlinedIcon fontSize="large" />
                        </button>
                      </div>
                      <p className={styles.subtotal}>
                        Subtotal:{" "}
                        <span>$ {producto.cantidad * producto.precio}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $ {total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
