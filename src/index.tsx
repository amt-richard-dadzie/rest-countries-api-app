import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>
);
