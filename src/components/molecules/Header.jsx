import React from "react";

const Header = ({ title }) => {
  return (
    <div className="my-3 pl-2">
      <p className="text-xl font-extrabold tracking-tight text-slate-900 capitalize">
        {title}
      </p>
    </div>
  );
};

export default Header;
