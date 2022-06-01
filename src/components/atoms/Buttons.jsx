import React from "react";

const Buttons = ({ title, icon }) => {
  return (
    <>
      <button className="bg-main-button-bg text-white px-3 py-1.5 rounded-full flex gap-x-1.5 items-center font-bold">
        {title}
        {icon}
      </button>
    </>
  );
};

export default Buttons;
