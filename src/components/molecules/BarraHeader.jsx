import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../pages/Menu";

const BarraHeader = ({}) => {
  const [activeMenu, setactiveMenu] = useState(false);
  return (
    <>
      <div className="fixed top relative flex  justify-around top-0 w-full bg-secondary-bg uppercase font-bold text-lg text-white p-4  italic ">
        <img src="../src/img/logoIcelack.jpg" className="h-8 pr-2" alt="" />
        <Link to="/"> Icelack Club </Link>
        <button onClick={() => setactiveMenu(!activeMenu)}>
          <img src="../src/img/icons/menu2.png" className="h-6 " alt="" />
        </button>
      </div>
      {activeMenu ? <Menu /> : " "}
    </>
  );
};

export default BarraHeader;
