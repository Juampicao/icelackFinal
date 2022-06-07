import React from "react";

import Layout from "../molecules/Layout";
import Header from "../molecules/Header";
import CarrouselInicio from "../atoms/CarrouselInicio";
<Header title="Orders" />;

const Inicio = () => {
  return (
    <div>
      <Layout />
      <h1 className=""> Inicio. </h1>
      <CarrouselInicio />
    </div>
  );
};

export default Inicio;
