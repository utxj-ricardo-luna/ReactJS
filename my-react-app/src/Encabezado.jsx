import miLogo from './assets/logo.png';
import facebook from './assets/redes/facebook.png';
import whatsapp from './assets/redes/whatsapp.png';
import linkedin from './assets/redes/linkedin.png';
import gmail from './assets/redes/gmail.png';
import youtube from './assets/redes/youtube.png';
import PropTypes from 'prop-types';
import './Encabezado.css';

function Encabezado({cambiarVista}){ 
    return (
        <div className="encabezadoDiv">
            <Logo />
            <Menu cambiarVista={cambiarVista} />
            <Redes />
        </div>
    );
}

function Logo(){
    return (
        <div className="logoDiv">
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}

function Menu({cambiarVista}){
    return (
        <div className="menuDiv">
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
                
            </ul>
        </div>
    );
}
function Redes(){
    return (
        <div className="redesDiv">
            <ul>
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={whatsapp} alt="WhatsApp" /></li>
                <li><img src={linkedin} alt="Linkedin" /></li>
                <li><img src={gmail} alt="Gmail" /></li>
                <li><img src={youtube} alt="Youtube" /></li>
            </ul>
        </div>
    );
}
Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
}
export default Encabezado;
