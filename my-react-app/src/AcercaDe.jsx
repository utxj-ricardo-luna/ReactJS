function AcercaDe() {
    return (
        <div className="acercaDeDiv">
            <h2>Acerca de Nosotros</h2>
            <header>
                <h1>Acerca de este Proyecto</h1>
                <p>Versión del Módulo: <strong>1.0.4</strong></p>
            </header>

            <article>
                <h2>Nuestra Misión</h2>
                <p>
                    Este módulo ha sido diseñado para optimizar la gestión de datos en tiempo real,
                    permitiendo a los desarrolladores integrar soluciones escalables con facilidad.
                </p>
            </article>

            <section className="team-info">
                <h3>Equipo de Desarrollo</h3>
                <ul>
                    <li>Ingeniería de Software: <span className="highlight">Tech Solutions Ltd.</span></li>
                    <li>Diseño UI/UX: <span className="highlight">Creative Flow</span></li>
                </ul>
            </section>
        </div>
    );
}
export default AcercaDe;