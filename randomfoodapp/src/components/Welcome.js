import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import Logo from "../assets/RandomFood Logo.svg";

const Welcome = () => {
  return (
    <div className="welcome">
        <img src={Logo} alt="Random Food" />
      <div className="textos">
        <h1>Bem-vindo ao Random Food!</h1>
        <p>Acabe com a indecisão da sua próxima refeição!</p>
      </div>
      <div className="botoes">
        <Link to="/login" className="botao" id="login">
          Login
        </Link>
        <Link to="/register" className="botao">
          Registrar
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
