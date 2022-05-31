import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ContextProvider } from "./contexts/ContextProvider";

import Inicio from "../src/components/pages/Inicio";
import Descuentos from "../src/components/pages/Descuentos";
import LogIn from "../src/components/pages/LogIn";
import Noticias from "../src/components/pages/Noticias";
import Sorteos from "../src/components/pages/Sorteos";

function App() {
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
