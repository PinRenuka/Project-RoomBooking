import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import PickingPage from "./pages/PickingPage.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <App/>
  </StrictMode>
);
