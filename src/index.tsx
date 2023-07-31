import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountriesProvider } from "./contexts/CountriesContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <Routes>
          <App />
        </Routes>
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
