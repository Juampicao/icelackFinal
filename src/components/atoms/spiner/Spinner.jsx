import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div>
      <div className="flex">
        <div class="lds-roller flex mx-auto ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
