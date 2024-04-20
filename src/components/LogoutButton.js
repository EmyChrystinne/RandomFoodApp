import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import '../styles/BackButton.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirecionar para a página de login ou página inicial
      navigate('/'); // ou navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="backButton">
    <button onClick={handleLogout}>Sair</button>
  </div>
  );
};

export default LogoutButton;
