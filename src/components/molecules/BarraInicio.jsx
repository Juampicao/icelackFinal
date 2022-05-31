import React from "react";
import { Link } from "react-router-dom";

const BarraInicio = () => {
  return (
    <>
      <div className="">
        <section className="flex absolute w-full justify-evenly fixed bottom-0 bg-secondary-bg text-main-text  ">
          <Link className="p-5" to="/login">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
          </Link>

          <Link className="p-5" to="/descuentos">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
          </Link>

          <Link className="p-5" to="/sorteos">
            <img src="../src/img/icons/home.png" className="h-8 " alt="" />
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
