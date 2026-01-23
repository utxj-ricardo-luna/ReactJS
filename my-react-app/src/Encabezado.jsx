import miLogo from './assets/logo.png';
import facebook from './assets/redes/facebook.png';
import whatsapp from './assets/redes/whatsapp.png';
import linkedin from './assets/redes/linkedin.png';
import gmail from './assets/redes/gmail.png';
import youtube from './assets/redes/youtube.png';
import './Encabezado.css';
function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo />
            <Menu />
            <Redes />
            <h2>Bienvenido a mi sitio</h2>
        </div>
    );
}

function Logo(){
    return (
        <div className="Logo">
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}

function Menu(){
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}
function Redes(){
    return (
        <nav>
            <ul>
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={whatsapp} alt="WhatsApp" /></li>
                <li><img src={linkedin} alt="Linkedin" /></li>
                <li><img src={gmail} alt="Gmail" /></li>
                <li><img src={youtube} alt="Youtube" /></li>
            </ul>
        </nav>
    );
}
export default Encabezado