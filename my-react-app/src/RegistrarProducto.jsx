import './Registrarproducto.css'
function RegistrarProducto(){

    return (
        <div>
            <div className="containerForm">
            <h2>Registrar Productos</h2>
            <form>
                <label>Titulo:</label>
                <input type="text" name="titulo"></input>
                <label>Precio:</label>
                <input type="number" name="price"></input>
                <label>Descripción:</label>
                <input type="text" name="description"></input>
                <label>Categoria:</label>
                <input type="text" name="category"></input>
                <label>Imagen:</label>
                <input type="text" name="imagen"></input>
                <button type="submit">Registrar</button>
            </form>
            </div>
        </div>  
    )
}
export default RegistrarProducto