import React from "react";

import Layout from "../molecules/Layout";
import Header from "../molecules/Header";
import CarrouselInicio from "../atoms/CarrouselInicio";
import Filters from "../atoms/Filters";
import Search from "../atoms/Search";
import DescuentoMini from "../molecules/DescuentoMini";

const Descuentos = () => {
  const fotos = [
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/juampiCao9" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
    <img src="https://unavatar.io/twitter/midudev" className="h-5" alt="" />,
  ];

  return (
    <div>
      <Layout />
      <Header title="Descuentos" />

      <div className="container  overflow-x-auto space-x-3 mx-auto pb-5 w-full ">
        {fotos}
      </div>

      <div className="my-2 flex">
        <div className=" mx-auto">
          <Search />
        </div>
      </div>

      <DescuentoMini></DescuentoMini>

      <div className=" fixed bottom-20 right-24">
        <Filters className="  " />
      </div>
    </div>
  );
};

export default Descuentos;
