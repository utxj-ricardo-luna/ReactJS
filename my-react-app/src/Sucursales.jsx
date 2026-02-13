import Mapa from './Mapa';
import './Sucursales.css'
function Sucursales() {
    return (
        <>
        <div className="sucursalesDiv">
        <TarjetaSucursal 
        nombre="ServiTec Centro"
        direccion = "Calle 3 de Marzo No 23, Col. Centro Xicotepec, Puebla México"
        telefono="+52 7647643322"
        imagen="https://servitecingenieros.com/wp-content/uploads/2023/11/Logo-Cicular-Borde-Azul-Servitec.png"
        latitud = {20.276611665977292}
        longitud = {-97.95782178080484}
        />


        <TarjetaSucursal
        nombre="ServiTec Tierra Negra"
        direccion = "Av. Univesidad Tecnologica No 1000 Col. Tierra Negra Xicotepec, Puebla, México"
        telefono="+52 7647648722"
        imagen="https://servitecingenieros.com/wp-content/uploads/2023/11/Logo-Cicular-Borde-Azul-Servitec.png"
        latitud = {20.244063827889793 }
        longitud = {-97.95719862403506}
        />
        <TarjetaSucursal 
        nombre="ServiTec La rivera"
        direccion = "Av. Independencia No 23 Col. La Rivera Xicotepec, Puebla México"
        telefono="+52 7647646032"
        imagen="https://servitecingenieros.com/wp-content/uploads/2023/11/Logo-Cicular-Borde-Azul-Servitec.png"
        latitud = {20.265291182072218 }
        longitud = {-97.9680256853732}
        />
        <TarjetaSucursal
        nombre="ServiTec El Tabacal"
        direccion = "17 de Junio Norte 654 Col. El Tabacla Xicotepec, Puebla, México"
        telefono="+52 7647641147"
        imagen="https://servitecingenieros.com/wp-content/uploads/2023/11/Logo-Cicular-Borde-Azul-Servitec.png"
        latitud = {20.286462780285625}
        longitud = {-97.95445587443318}
        />
        </div>
        </>
    );
}
function TarjetaSucursal(props){
    return(
        <div className='tarjetaDiv'>
            <img src={props.imagen} alt='Logotipo'/>
            <h3>{props.nombre}</h3>
            <p>{props.direccion}</p>
            <Mapa 
                lat = {props.latitud}
                lng= {props.longitud}
                nombre_sucursal={props.nombre}
            />
            <p>{props.telefono}</p>
            <a href='#'>Ver más</a>
        </div>
    )
}

export default Sucursales;
