import './Contacto.css'
function Contacto() {
    return (
        <div className="contactoDiv">
            <h2 className='titform'>Contacto</h2>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        required
                    />
                </div>

                <div>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        name="correo"
                        required
                    />
                </div>

                <div>
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="telefono"
                    />
                </div>

                <div>
                    <label>Asunto:</label>
                    <textarea
                        name="asunto"
                        required
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
export default Contacto;