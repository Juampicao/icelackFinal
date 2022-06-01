import React from "react";
import Buttons from "../atoms/Buttons";

const DescuentoMini = () => {
  // styles
  const dias = "bg-white w-5 p-1 text-center rounded-full";

  return (
    <>
      <div className="p-3">
        {/* Descuento Unico  */}

        <div className="container flex grid grid-cols-2 border-8 rounded-lg mx-auto max-w-[400px]">
          {/* Imagen */}
          <div className="container_img  my-auto">
            <img src="./src/img/empresas/adidas.jpg" className="cover" alt="" />
          </div>
          {/* Imagen */}

          {/* Texto */}
          <div className=" container_text bg-slate-300 p-2">
            <div className="flex items-center justify-around ">
              <h3 className="text-center mt-2 font-bold text-3xl">20%</h3>
              <img src="./src/img/icons/compartir.png" alt="" />
            </div>
            <h2 className="text-center font-bold text-xl mt-2 "> Adidas </h2>
            <p className=" mt-2 "> Todo el Sitio </p>
            <ul className="text-xs flex space-x-2 mt-2">
              <li className={dias}>L</li>
              <li className={dias}>M</li>
              <li className={dias}>V</li>
              <li className={dias}>V</li>
              <li className={dias}>V</li>
              <li className={dias}>V</li>
            </ul>
            <p className="  mt-2  text-sm"> hasta: 30/8 </p>

            <div className="float-right ">
              <button className=" rounded-full bg-green-800 text-sm text-white font-bold border-2 border- px-2.5 py-1 ">
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
