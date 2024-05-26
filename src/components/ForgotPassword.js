import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import "../styles/Login.css";
import Logo from "../assets/RandomFood Logo.svg";
import BackButton from "./BackButton";
import Footer from "./Footer";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail."
      );
    } catch (error) {
      console.error(
        "Erro ao enviar e-mail de redefinição de senha:",
        error.message
      );
      setMessage(
        "Erro ao enviar e-mail de redefinição de senha. Verifique o endereço de e-mail e tente novamente."
      );
    }
  };

  return (
    <div className="login">
      <BackButton />
      <img src={Logo} alt="Random Food" />
      <div className="textos">
        <h1>Redefinir Senha</h1>
        <p>Informe seu email para redefinir sua senha</p>
      </div>
      {message && <p>{message}</p>}
      <form onSubmit={handleResetPassword} className="dados">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="campo"
        />
        <button type="submit" className="redefinir">
          Enviar E-mail de Redefinição
        </button>
      </form>
      <Footer />

    </div>
  );
};

export default ForgotPassword;
