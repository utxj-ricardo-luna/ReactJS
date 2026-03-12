import { useEffect, useState } from "react";
import api from "./Services/api";
import './Productos.css';
import RegistrarProducto from "./RegistrarProducto";
import { useAuth } from "./AuthContext";


function Productos() {
    //https://fakestoreapi.com/docs npm install axios
    const { isLoggedIn } = useAuth();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    
        const obtenerProductos = async () => {
      try {
        const response = await api.get("/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <main className='classMain'>
                <header>
                  {isLoggedIn ? (
                  <>
                    <RegistrarProducto
                      productoEditado={productoSeleccionado} 
                      limpiarSeleccion={() => setProductoSeleccionado(null)}
                      onActualizacionExitosa={obtenerProductos}
                    />
                  </>):(
                    <h1>Nuestro Catálogo Tecnológico</h1>
                  )}
                </header>
                <section className='classSection'>
                    {productos.map((producto) => (
                        <article key={producto.id} className='classArticle'>
                            <img
                                src={producto.image}
                                alt={producto.title}
                            />
                            <span>
                                {producto.description}
                            </span>
                            <h2>{producto.category}</h2>
                            <p>
                                {producto.price}
                            </p>
                            
                             {isLoggedIn ? (
                              <>
                              <button className="btn-editar" onClick={()=>setProductoSeleccionado(producto)}>Editar</button>
                            <button onClick={() => removerProducto(producto.id)} className="btnEliminar">
                                Eliminar
                            </button>
                              </>
                             ):(
                              <button onClick={createCart}>
                                Añadir al carrito
                            </button>
                             )}
                            
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}
const createCart = async () => {
  try {

    const cartData = {
      userId: 3,
      products: [
        {
          productId: 10,
          quantity: 2
        }
      ]
    };

      const response = await api.post("/carts",
      cartData
    );

    console.log("Carrito creado:", response.data);
    alert('¡Producto agregado al carrito con éxito!');

  } catch (error) {
    console.error("Error al crear carrito:", error.response?.data || error.message);
  }
};
const removerProducto = async (productoId) => {

  try {

    const response = await api.delete(
      `/products/${productoId}`
    );

    console.log(response.data);
    alert('¡Producto eliminado con éxito!');

  } catch (error) {
    console.error(error);
  }

};
export default Productos