import React from "react";
import { useState } from "react";
import Layout from "../molecules/Layout";
import Header from "../molecules/Header";

const Formulario = ({ descuentosGlobal, setDescuentosGlobal }) => {
  const [empresa, setEmpresa] = useState(``);
  const [direccion, setDireccion] = useState(``);
  const [dias, setDias] = useState("Lunes");
  const [metodoPago, setMetodoPago] = useState("Efectivo");
  const [descuento, setDescuento] = useState("5%");
  const [suscripcion, setSuscripcion] = useState("gold");

  const [error, setError] = useState(false);

  const objetoDatosDescuento = {
    empresa,
    direccion,
    dias,
    metodoPago,
    descuento,
    suscripcion,
  };

  // Validacion del formulario
  //   if (
  //     [empresa, direccion, dias, metodoPago, descuento, suscripcion].includes("")
  //   ) {
  //     console.log("Completa todos los casilleros por favor.");

  //     setError(true);
  //     return;
  //   }

  const handleLimpiar = (e) => {
    e.preventDefault();
  };

  // const handleAgregarDescuento = async (valores) => {
  //   valores.preventDefault();
  //   // console.log(objetoDatosDescuento);
  //   try {
  //     let respuesta;
  //     // Nuevo Registro
  //     const url = `http://localhost:4000/descuentos/`;
  //     respuesta = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify({ objetoDatosDescuento }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     console.log(respuesta);
  //     const resultado = await respuesta.json();
  //     console.log(resultado);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAgregarDescuento = (e) => {
    e.preventDefault();
    setDescuentosGlobal(...objetoDatosDescuento);
    console.log(setDescuentosGlobal);
  };

  const diasPosiblesDescuento = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
    "Todos",
  ];

  const tipoDescuento = ["5%", "10%", "20%", "25%", "50%", "2x1", "3x2"];
  const metodosPago = ["Efectivo", "Tarjeta", "Todos"];
  const tipoSuscripcion = ["Gold", "Premium"];
  const sucursales = ["Tienda Online", "Locales"];

  // Styles

  const inputDiv = "space-y-1 flex flex-col";
  const inputText = "pl-2 py-1 rounded-lg w-full capitalize";
  const inputSelect =
    "pl-2 py-1 rounded-lg min-w-[20px] max-w-[120px] capitalize";
  const label = "pl-1";

  const inputRadio = "";
  const botonAgregarDescuento =
    " duration-200 bg-black hover:bg-slate-900 text-white px-2 py-3 w-3/5 mx-auto uppercase text-sm rounded-xl font-bold uppercase cursor-pointer";
  const botonLimpiar =
    " duration-200 bg-slate-400 hover:bg-slate-500 text-white rounded-lg px-3 py-1";

  return (
    <div className="">
      <Layout />
      <Header title="Agregar Descuentos"></Header>
      <form
        onSubmit={handleAgregarDescuento}
        className="flex flex-col space-y-3 m-2 p-4 shadow-lg  bg-slate-200 rounded-xl "
      >
        <div className="space-y-1">
          <label htmlFor="empresa" className="pl-1">
            Nombre Empresa
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Nombre"
            className={inputText}
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="direccion" className="pl-1">
            Direccion
          </label>
          <input
            id="direccion"
            type="text"
            placeholder="direccion"
            className={inputText}
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className={inputDiv}>
          <label htmlFor="direccion" className={label}>
            Metodo de Pago
          </label>
          <select
            className={inputSelect}
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            {metodosPago.map((e) => {
              return <option> {e}</option>;
            })}
          </select>
        </div>
        <div className={inputDiv}>
          <label htmlFor="tipoDescuento" className={label}>
            Tipo de descuento
          </label>
          <select
            name=""
            id="tipoDescuento"
            className={inputSelect}
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          >
            {tipoDescuento.map((e) => {
              return <option> {e} </option>;
            })}
          </select>
        </div>
        <div className={inputDiv}>
          <label htmlFor="dias" className={label}>
            Dia
          </label>

          <select
            id="dias"
            className={inputSelect}
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          >
            {diasPosiblesDescuento.map((e) => {
              return <option> {e}</option>;
            })}
          </select>
          <div className="space-x-2 pl-1">
            {diasPosiblesDescuento.map((e) => {
              return (
                <input type="checkbox" value={{ e }} className="text-black" />
              );
            })}
          </div>
        </div>
        <div className={inputDiv}>
          <label htmlFor="tipoSuscripcion" className={label}>
            Suscripcion
          </label>
          <select
            name=""
            id="tipoSuscripcion"
            className={inputSelect}
            value={suscripcion}
            onChange={(e) => setSuscripcion(e.target.value)}
          >
            {tipoSuscripcion.map((e) => {
              return <option> {e}</option>;
            })}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className={botonLimpiar}
            onClick={handleLimpiar}
          >
            Limpiar
          </button>
        </div>

        <input
          type="submit"
          className={botonAgregarDescuento}
          value="Agregar Descuento"
        />
      </form>
    </div>
  );
};

export default Formulario;
