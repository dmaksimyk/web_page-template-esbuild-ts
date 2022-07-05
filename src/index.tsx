// Vendor
import React from "react";
import { createRoot } from "react-dom/client";

// Main
import App from "./App";

// Container
const container = document.getElementById("root");

// Set Main into Container
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw Error("Container is not defined!");
}

// window.onload = () => bridge.init;
