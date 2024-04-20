// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthGuard from "./components/AuthGuard"; // Importe o componente AuthGuard
import Home from "./components/Home";
import SurpriseSelection from "./components/SurpriseSelection";
import FilteringOptions from "./components/FilteringOptions";
import FilteredOptions from "./components/FilteredOptions";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import ForgotPassword from "./components/ForgotPassword";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Rotas protegidas */}
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
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
