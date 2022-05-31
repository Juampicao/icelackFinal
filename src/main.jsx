import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { ContextProvider } from "./contexts/ContextProvider";

// ReactDom.createRoot(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
//   document.getElementById(`root`)
// );
