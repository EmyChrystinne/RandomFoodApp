import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const expiresIn = 604800; // 1 semana em segundos
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        localStorage.setItem('authToken', token);
        localStorage.setItem('tokenExpiration', expirationTime);
      }
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => { // Adicionado email e password como parâmetros
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password); // Utiliza email e password
      const token = await userCredential.user.getIdToken();
      const expiresIn = 604800; // 1 semana em segundos
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem('authToken', token);
      localStorage.setItem('tokenExpiration', expirationTime);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiration');
    auth.signOut();
  };

  const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    return authToken && tokenExpiration && new Date().getTime() < tokenExpiration;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
