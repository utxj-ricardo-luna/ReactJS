import Mapa from './Mapa';
import './PromosContenido.css';
function PromosContenido(){
    return(
        <div className="promosContenido">
            <h2>Promociones</h2>
            <p>Descubre nuestras ofertas exclusivas y promociones especiales diseñadas para brindarte el mejor valor en tus compras. ¡Aprovecha estas oportunidades únicas antes de que se agoten!</p>
            <Mapa 
                lat = {20.267235359887085}
                lng= {-97.95997531836774}
                nombre_sucursal={"Centro Xicotepec"}
            />
        </div>
    )
}
export default PromosContenido;