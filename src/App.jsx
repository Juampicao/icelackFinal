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

function App() {
  const [activeMenu, setActiveMenu] = useState(``);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          {/* Paginas principales */}
          <Route path="/descuentos" element={<Descuentos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/sorteos" element={<Sorteos />} />
          <Route path="/login" element={<LogIn />} />
          {/* Paginas principales */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
