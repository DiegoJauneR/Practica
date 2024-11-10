import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Malla from "./Malla";
import "./main.css";

function App() {
  return (
    <StrictMode>
      <div>
        <h1 className="title">Malla Ulagos (2020) </h1>
        <Malla />
      </div>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
