import React, { useState } from "react";
import Buttons from "../atoms/Buttons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const DescuentoMini = () => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() =>
    navigate(`/descuentos/descuentoparticular`)
  );

  // styles
  const dias =
    "bg-white w-4 h-4 items-center text-center rounded-full text-[8px]";

  return (
    <>
      <div className="p-3 mx-3">
        {/* Descuento Unico  */}

        <div className="container flex grid grid-cols-3  border-black  border-2  mx-auto max-w-[400px]">
          {/* Imagen */}
          <div className="container_img  my-auto rounded-xl">
            <img
              src="./src/img/empresas/adidas.jpg"
              className="cover"
              alt="empresa"
            />
          </div>
          {/* Imagen */}

          {/* Texto */}
          <div className="col-span-2 container_text bg-slate-200 px-2 pt-1 ">
            <div className="flex items-center justify-around ">
              <h3 className="text-center  font-bold text-xl"> 20%</h3>
              <h2 className="text-center font-bold text-lg  "> Adidas </h2>
            </div>
            <p className="  text-center"> Todo el Sitio </p>
            <ul className="text-xs flex space-x-1 mt-1 items-center justify-center">
              <li className={dias}>L</li>
              <li className={dias}>M</li>
              <li className={dias}>M</li>
              <li className={dias}>J</li>
              <li className={dias}>V</li>
              <li className={dias}>S</li>

              <img
                src="./src/img/icons/compartir.png"
                className="pl-2 h-5 "
                alt="icon"
              />
            </ul>

            {/* <div className="flex ">
              <p className="  mt-2  text-sm"> hasta: 30/8 </p>
            </div> */}
            {/* <div className=" float-right">
              <button className=" rounded-full bg-green-800 text-sm text-white font-bold border-2 border- px-2.5 py-1 ">
                Canjear
              </button>
            </div> */}
            <div className="flex py-1 justify-between">
              <p className="  mt-2  text-[10px] text-slate-400 pl-5">
                hasta: 30/8
              </p>
              <button
                className=" rounded-full bg-green-800 text-sm text-white font-bold hover:bg-green-900 px-2.5 py-1 "
                onClick={handleOnClick}
              >
                Canjear
              </button>
            </div>
          </div>
          {/* Texto */}
        </div>
        {/* Descuento Unico  */}
      </div>
    </>
  );
};

export default DescuentoMini;
