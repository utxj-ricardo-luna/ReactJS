import './Productos.css'
function Productos() {
    const productos = [
        { id: 1, nombre: "Procesador Intel i9-13900K", precio: 589, stock: 12, imagen:"https://acf.geeknetic.es/imgw/imagenes/Tutoriales/2021/2455-intel-core-i9-13900k/2455-intel-core-i9-13900k-2.jpg?f=webp" },
        { id: 2, nombre: "Tarjeta Gráfica NVIDIA RTX 4080", precio: 1199, stock: 5 , imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hrVzGsnWReSdBbl10K8Pn7di2aA0IHnxpA&s"},
        { id: 3, nombre: "Memoria RAM Corsair Vengeance 32GB", precio: 125, stock: 20, imagen: "https://m.media-amazon.com/images/I/61D2DDpDITL.jpg"},
        { id: 4, nombre: "SSD Samsung 980 Pro 2TB", precio: 180, stock: 15, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVQ65opq9fH3t8ULqnND6RHbfJhTKLebe-Q&s" },
        { id: 5, nombre: "Placa Base ASUS ROG Strix Z790", precio: 450, stock: 8, imagen: "https://m.media-amazon.com/images/I/81hyZMt6XbL._AC_UF894,1000_QL80_.jpg" },
        { id: 6, nombre: "Fuente de Alimentación EVGA 850W", precio: 140, stock: 10, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_OvNXZRwFRshgaPhlvUxviyPvp_-Qekw9Q&s" },
        { id: 7, nombre: "Gabinete NZXT H7 Elite", precio: 199, stock: 7, imagen: "https://http2.mlstatic.com/D_Q_NP_948349-MLA84850487437_052025-O.webp" },
        { id: 8, nombre: "Refrigeración Líquida Kraken Z73", precio: 280, stock: 4, imagen: "https://m.media-amazon.com/images/I/51QqK4Rc03L._AC_UF894,1000_QL80_.jpg" },
    ];
    return (
        <div className="productoDiv">
            <h1>Productos</h1>
            <div className="productoUl">
            <ul >
                {productos.map((producto) => (
                    /* Es vital incluir una 'key' única para cada elemento de la lista */
                    <li key={producto.id} className="productoLi">
                        <h3 className="titulo">{producto.nombre}</h3>
                        <img className="imgP" src={producto.imagen}/>
                        <p className="parrafoP">${producto.precio}</p>
                        <p className="parrafo">Disponibles: {producto.stock}</p>
                        <button className="boton">
                            Añadir al carrito
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}
export default Productos;