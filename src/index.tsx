import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./lib/context/ThemeContext";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");
if (!container) throw new Error("Can't find root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
