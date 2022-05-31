import React from "react";
import { Link } from "react-router-dom";

const BarraInicio = () => {
  return (
    <>
      <div className="">
        <section className="flex w-full justify-evenly fixed bottom-0 bg-slate-900 text-white  ">
          <Link className="p-5" to="login">
            <img src="../src/img/buscar.png" className="h-8" alt="" />
          </Link>

          <Link className="p-5" to="descuentos">
            <img src="../src/img/buscar.png" className="h-8" alt="" />
          </Link>

          <Link className="p-5" to="sorteos">
            <img src="../src/img/buscar.png" className="h-8" alt="" />
          </Link>

          <Link className="p-5" to="noticias">
            <img src="../src/img/buscar.png" className="h-8" alt="" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default BarraInicio;
