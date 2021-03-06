import React from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Menu = () => {
  const navigate = useNavigate();

  const handleAgregar = useCallback(() => navigate(`/formulario`));

  return (
    <>
      <div className="bg-half-transparent w-screen fixed  top-0 right-0 ">
        <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-350  ">
          <div className="flex  items-center p-2 ml-4">
            <div className="top-5 right-15 fixed">
              <button onClick={() => console.log("cerrar")}>
                <img src="../src/img/icons/close.png" className="h-6 " alt="" />
              </button>
            </div>

            <ul className="block space-y-5 py-32 justify-between ">
              <button onClick={handleAgregar}>
                <li>Agregar </li>
              </button>
              <li>Cuenta</li>
              <li>Suscripcion</li>
              <li>Configuracion</li>
              <li>Actividad</li>
              <li>Mi negocio</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
