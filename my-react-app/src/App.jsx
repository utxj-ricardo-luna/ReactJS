import { useState } from "react";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Encabezado from "./Encabezado";
import PieComponente from "./PieComponente";
import PromosContenido from "./PromosContenido";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista}/>
      <ContenedorTarjetas vista = {vista}/>
      <PromosContenido />
      <PieComponente />
    </div>
  )
}

export default App
