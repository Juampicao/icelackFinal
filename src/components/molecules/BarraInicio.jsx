import React from "react";
import { Link } from "react-router-dom";

import home from "../../img/Icons/home.png";

const BarraInicio = () => {
  return (
    <>
      <div className="">
        <section className="flex bottom w-full justify-evenly fixed bottom-0 bg-secondary-bg text-main-text  ">
          <Link className="p-5" to="/formulario">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
          </Link>

          <Link className="p-5" to="/descuentos">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
          </Link>

          <Link className="p-5" to="/sorteos">
            <img src={home} className="h-8 " alt="" />
          </Link>

          <Link className="p-5" to="/noticias">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default BarraInicio;
