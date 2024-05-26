import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import Logo from "../assets/RandomFood Logo.svg";
import Footer from "./Footer";

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
      <div className="sugestion">
        <p>Não encontrou o que queria?</p>
        <a href="https://forms.gle/S4esvWkmWW2tEVYb8" target="_blank" rel="noopener noreferrer"> Sugira um estabelecimento!</a>
        </div>
        <Footer/>
    </div>
  );
};

export default Welcome;
