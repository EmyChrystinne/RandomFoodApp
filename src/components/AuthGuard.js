// src/components/AuthGuard.js

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthGuard = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  // Se o usuário não estiver autenticado, redireciona para a rota de login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Se o usuário estiver autenticado, renderiza os componentes filhos
  return children;
};

export default AuthGuard;
