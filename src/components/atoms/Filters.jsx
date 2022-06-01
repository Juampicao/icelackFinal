import React from "react";
import Buttons from "./Buttons";

const Filters = () => {
  const filterImage = (
    <img src="./src/img/icons/filter.png" className="h-5" alt="" />
  );

  const menuImage = (
    <img src="./src/img/icons/map.png" className="h-5" alt="" />
  );

  return (
    <>
      <div className="flex justify-center space-x-1 ">
        <Buttons title="Filtrar" icon={filterImage} />
        <Buttons title="Mapa" icon={menuImage} />
      </div>
    </>
  );
};

export default Filters;
