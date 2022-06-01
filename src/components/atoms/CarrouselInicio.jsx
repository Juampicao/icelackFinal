import React from "react";
import "./CarrouselInicio.css";

const CarrouselInicio = ({ icon }) => {
  return (
    <>
      <div>
        <div className="">
          <div className="container  overflow-x-auto space-x-3 mx-auto pb-5 w-full">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrouselInicio;
