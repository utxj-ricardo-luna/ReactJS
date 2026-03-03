import './ContenedorTargeta.css';
import imgtarjeta from './assets/imagen.jpg';

function ContenedorTargeta(){
    return(
        <div className="ContenedorTargeta">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
    )
}

function Tarjeta(){
    return(
        <div className="Tarjeta">
            <img src={imgtarjeta} alt="Imagen" />
            <h3>Esta es una tarjeta</h3>
            <p>Este es el texto que contiene la targeta de la aplicación, aqui va la descripcion del tema o texto</p>
            <a href='#'>Ver más</a>
        </div>
    )
}
export default ContenedorTargeta;