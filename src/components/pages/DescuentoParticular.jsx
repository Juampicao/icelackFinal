import React, { useState, Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../molecules/Layout";
import Header from "../molecules/Header";

import { datos } from "../../data/data";
import Buttons from "../atoms/Buttons";

const DescuentoParticular = () => {
  const [like, setlike] = useState(false);
  const [suscriptionValue, setsuscriptionValue] = useState("");

  // Funcion numero Aleatorio
  let numeroAleatorio = Math.floor(Math.random() * (123456 - 654321) * -1);

  let obtenerCodigoUnico = true; // Solo 1 codigo por recarga.
  let nuevoTitle = "";
  // Funcion Obtener codigo
  function obtenerCodigo() {
    if (obtenerCodigoUnico == true) {
      let codigo = document.getElementById(`codigo`);
      let nuevoTitle = document.createElement(`h1`);
      nuevoTitle.textContent = numeroAleatorio;
      codigo.appendChild(nuevoTitle);
      obtenerCodigoUnico = false;
    }
  }

  useEffect(() => {
    setsuscriptionValue(suscripcion);
    console.log(suscriptionValue);
  }, [datos]);

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { empresa, descuento, dias, ubicacion, suscripcion, metodoPago } =
    datos;

  const diasStyle =
    "bg-black text-white   p-3 items-center text-center rounded-full text-[10px]";

  return (
    <div>
      <Layout />
      {/* Div Header  */}

      {/* Handleback + favorite  */}
      <div className="h-36 bg-blue-700 grid grid-rows-3 ">
        <div className="flex justify-between px-5 pb-3 items-center">
          <button onClick={handleBack}>
            <img
              src="../src/img/icons/back.png"
              className="h-8   "
              alt=""
              id="back"
            />
          </button>
          <img
            src="../src/img/icons/like.png"
            className="h-5 float-right  "
            alt=""
            id="likeIcon1"
          />
        </div>
        {/* Handleback + favorite  */}

        {/* Logo + Empresa */}
        <div className="rows-span-3 pl-5 flex space-x-5 items-center">
          <img
            src="../src/img/empresas/adidas.jpg"
            className="cover h-16 rounded-full float-left my-auto "
            alt="empresa"
          />
          <h2 className="text-white uppercase font-bold my-auto ">{empresa}</h2>
        </div>
        {/* Logo + Empresa */}
      </div>

      {/* Div Header  */}

      {/* Descuentos particular */}
      <div className="flex flex-col space-y-5 shadow-sm border-2 border-slate-300 shadow-slate-500 px-5 py-2 m-5 rounded-lg ">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{empresa}</h2>
          <p className="text-xl pr-5 font-bold"> {descuento}</p>
          <button
            className={` capitalize  text-white px-2 py-1.5 uppercase text-sm rounded-xl
             ${suscriptionValue === "premium" ? `bg-black` : `bg-yellow-500`}`}
          >
            {suscripcion}
          </button>
        </div>

        <div className="flex space-x-2">
          {dias.map((e) => (
            <p className={diasStyle}> {e} </p>
          ))}
        </div>

        <div className="">
          <div className="flex space-x-2">
            <img src="../src/img/icons/ubicacion.png" alt="" />
            <p className="capitalize"> {ubicacion}</p>
          </div>
          <div className="flex space-x-2 mt-2">
            <img src="../src/img/icons/tarjeta.png" alt="" />
            <p className="capitalize">{metodoPago}</p>
          </div>
        </div>

        <button
          className="flex mx-auto m-10s p-2 px-5 bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg text-white"
          id="obtenerCodigo"
          onClick={obtenerCodigo}
        >
          <h1> Obtener código </h1>
          <p> {nuevoTitle.length > 0 ? nuevoTitle : ""}</p>
        </button>

        <img src="../src/img//googlemaps.jpg" className="mt-10" alt="" />
      </div>
      {/* Descuentos particular */}
    </div>
  );
};

export default DescuentoParticular;
