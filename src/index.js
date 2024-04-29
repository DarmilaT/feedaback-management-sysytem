
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import Database from "./components/databse";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Dashboard studentId="At3CIwm65XSz41PHJlq3"/>
    <RegisterPage />
  </React.StrictMode>
);
