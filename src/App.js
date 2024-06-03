import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/AuthGuard";
import Home from "./components/Home";
import SurpriseSelection from "./components/SurpriseSelection";
import FilteringOptions from "./components/FilteringOptions";
import FilteredOptions from "./components/FilteredOptions";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem("authToken");
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      if (authToken && tokenExpiration && new Date().getTime() < tokenExpiration) {
        // O usuário está autenticado
        return true;
      }
      // O usuário não está autenticado ou o token expirou
      return false;
    };

    if (!checkAuth()) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("tokenExpiration");
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            }
          />
          <Route
            path="/surprise"
            element={
              <AuthGuard>
                <SurpriseSelection />
              </AuthGuard>
            }
          />
          <Route
            path="/filtering"
            element={
              <AuthGuard>
                <FilteringOptions />
              </AuthGuard>
            }
          />
          <Route
            path="/filtered"
            element={
              <AuthGuard>
                <FilteredOptions />
              </AuthGuard>
            }
          />
          <Route
            path="*"
            element={<Navigate to="/" />} // Redireciona para a página inicial se nenhuma rota correspondente for encontrada
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
