import imagen from './assets/imagenes/picture.jpg'
import './ContenedorTarjetas.css';
function ContenedorTarjetas() {
  return (
    <div className='contenedorDiv'>
        <TarjetaComponent titulo="Java" descripcion = "lenguaje de programación de propósito general, orientado a objetos y multiplataforma. El código compilado puede ejecutarse en cualquier dispositivo que tenga una Máquina Virtual Java"/>
        <TarjetaComponent titulo="Python" descripcion = " lenguaje de programación de alto nivel, interpretado y de código abierto, famoso por su sintaxis clara y legible que se asemeja al inglés AWS"/>
        <TarjetaComponent titulo="JavaScript" descripcion = "JavaScript es un lenguaje de programación ligero, interpretado y orientado a objetos BYJU'S, diseñado principalmente para añadir interactividad y dinamismo a las páginas web "/>
        <TarjetaComponent titulo="PHP" descripcion = "lenguaje de código abierto muy popular, diseñado específicamente para el desarrollo web y que se ejecuta en el lado del servidor PHP"/>
    </div>
  );
}

function TarjetaComponent(props){
    return(
        <div className='tarjetaDiv'>
            <img src={imagen} alt='Logotipo'/>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <a href='#'>Ver más</a>
        </div>
    )
}
export default ContenedorTarjetas;