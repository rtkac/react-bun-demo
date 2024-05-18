import React from "react";
import ReactDOM from "react-dom/client";

import AppEntry from "./AppEntry";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppEntry />
  </React.StrictMode>,
);
