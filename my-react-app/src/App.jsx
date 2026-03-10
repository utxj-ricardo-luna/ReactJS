import { useState } from "react";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Encabezado from "./Encabezado";
import PieComponente from "./PieComponente";
import PromosContenido from "./PromosContenido";
import { AuthProvider } from "./AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <AuthProvider>
        <Encabezado cambiarVista={setVista}/>
        <ContenedorTarjetas vista = {vista} chVista={setVista}/>
      </AuthProvider>
      <PromosContenido />
      <PieComponente />
    </div>
  )
}

export default App
