import miLogo from './assets/logo.png';
import facebook from './assets/redes/facebook.png';
import whatsapp from './assets/redes/whatsapp.png';
import linkedin from './assets/redes/linkedin.png';
import gmail from './assets/redes/gmail.png';
import youtube from './assets/redes/youtube.png';
import './Encabezado.css';
function Encabezado() {
    return (
        <div className="encabezadoDiv">
            <Logo />
            <Menu />
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

function Menu(){
    return (
        <div className="menuDiv">
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
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
export default Encabezado