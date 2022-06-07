import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// import { useStateContext } from "./contexts/ContextProvider";

// import {
//   Inicio,
//   Descuentos,
//   LogIn,
//   Noticias,
//   Sorteos,
//   Menu,
// } from "./components/pages/Inicio";
import Inicio from "./components/pages/Inicio";
import Descuentos from "./components/pages/Descuentos";
import LogIn from "./components/pages/LogIn";
import Noticias from "./components/pages/Noticias";
import Sorteos from "./components/pages/Sorteos";
import Menu from "./components/pages/Menu";
import DescuentoParticular from "./components/pages/DescuentoParticular";
import Formulario from "./components/pages/Formulario";

function App() {
  const [activeMenu, setActiveMenu] = useState(``);
  const [descuentosGlobal, setDescuentosGlobal] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const descuentosLS = JSON.parse(localStorage.getItem("descuentos")) ?? [];
      setDescuentosGlobal(descuentosLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem(`descuentos`, JSON.stringify(descuentosGlobal));
    console.log("componente listo");
  }, [descuentosGlobal]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          {/* Paginas principales */}
          <Route path="/descuentos" element={<Descuentos />} />
          <Route
            path="/descuentos/descuentoparticular"
            element={<DescuentoParticular />}
          />

          <Route path="/noticias" element={<Noticias />} />
          <Route path="/sorteos" element={<Sorteos />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/formulario"
            element={
              <Formulario
                descuentosGlobal={descuentosGlobal}
                setDescuentosGlobal={setDescuentosGlobal}
              />
            }
          >
            {" "}
          </Route>
          {/* Paginas principales */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
