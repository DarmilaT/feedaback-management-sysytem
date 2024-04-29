
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import Database from "./components/databse";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginPage /> */}
    <RegisterPage />
  </React.StrictMode>
);
