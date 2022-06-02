import React from "react";

import "./Search2.css";

const Search2 = () => {
  return (
    <div>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input type="text" class="input-search" placeholder="Buscar..." />
      </div>

      {/* <div className="search-box">
        <input type="text" placeholder="Buscar.." />
        <a href="##" className="icon">
          <i className="fas fa-search"></i>
        </a>
      </div> */}
    </div>
  );
};

export default Search2;
