import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import ConfirmEmail from "../pages/User/ConfirmEmail/ConfirmEmail";
import ForgotPassword from "../pages/User/ForgotPassword/ForgotPassword";
import ChangePassword from "../pages/User/ChangePassword/ChangePassword";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import VerifyTokenRoute from "./VeirfyTokenRoute";

const Rutas = () => {

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="register"
          element={
            <Register />
          }
        />

        <Route
          path="confirm-email"
          element={
            <ConfirmEmail/>
          }
        />

        <Route
          path="forgot-password"
          element={
            <ForgotPassword/>
          }
        />

        <Route
          path="change-password"
          element={
            <VerifyTokenRoute>
              <ChangePassword/>
            </VerifyTokenRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Rutas;
