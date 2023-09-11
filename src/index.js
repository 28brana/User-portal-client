import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import { ReduxProvider } from "./redux/provider";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Forget from "./pages/Forget";
import EditData from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/edit-profile" element={<EditData />} />
          <Route exact path="/change-password" element={<ChangePassword />} />
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/signup" element={<Register />} />
          <Route exact path="/auth/forget" element={<Forget />} />
        </Routes>
      </Router>
      <ToastContainer />
    </ReduxProvider>
  </React.StrictMode>
);
