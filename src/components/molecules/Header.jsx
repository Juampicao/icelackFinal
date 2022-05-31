import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mb-10 pl-2">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 capitalize">
        {title}
      </p>
    </div>
  );
};

export default Header;
