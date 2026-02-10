import './Galeria.css'
function Galeria() {
    const images = [
    { id: 1, url: "https://www.esic.edu/sites/default/files/2023-07/FotoJet%20%284%29%20%281%29.jpg", title: "Entorno de Desarrollo" },
    { id: 2, url: "https://www.manageengine.com/latam/desktop-central/images/dc-cloud-architecture.png", title: "Arquitectura Cloud" },
    { id: 3, url: "https://i.ytimg.com/vi/BPWpialFWvM/maxresdefault.jpg", title: "Depuración de Código" },
    { id: 4, url: "https://www.web-media.com.ar/uploads/imagenes/blog/lightbox_dise%C3%B1ador-ux-ui-cordoba.jpg", title: "Diseño UI/UX" },
    { id: 5, url: "https://pandorafms.com/blog/wp-content/uploads/2019/04/command-terminal-featured.jpg", title: "Terminal de Comandos" }
  ];
    return (
        <div className='galeriaDiv'>
            <h2>Galería de Software</h2>
            <div className='tarjetaDiv'>
                {images.map((img) => (
                    <div key={img.id} className='tarjeta2Div'>
                        <img
                            src={img.url}
                            alt={img.title}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <p>{img.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Galeria;