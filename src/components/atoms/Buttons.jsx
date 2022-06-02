import React from "react";

const Buttons = ({ title, icon }) => {
  const btnStyle = {
    backgroundColor: "secondary-bg",
  };

  return (
    <>
      <button className=" text-white  bg-blue-700 px-3 py-1.5 rounded-full flex gap-x-1.5 items-center font-bold capitalize text-sm">
        {title}
        {icon}
      </button>
    </>
  );
};

export default Buttons;
