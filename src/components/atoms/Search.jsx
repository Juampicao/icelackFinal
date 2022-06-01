import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex ">
        <input
          type="search"
          name="busqueda"
          placeholder="Search"
          className="border rounded-full bg-secondary-bg px-5 py-1 text-white active-border-red-500 capitalize "
        />
        {/* <img src="../src/img/icons/search.png" alt="" /> */}
      </div>
    </>
  );
};

export default Search;
