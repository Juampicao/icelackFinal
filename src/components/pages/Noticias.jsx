import React from "react";

import Layout from "../molecules/Layout";
import Header from "../molecules/Header";
import Spinner from "../atoms/spiner/Spinner";
import { useState } from "react";

const Noticias = () => {
  const [cargando, setCargando] = useState(true);

  return (
    <div>
      <Layout />
      <Header title="Noticias" />
      {cargando && <Spinner />}
    </div>
  );
};

export default Noticias;
