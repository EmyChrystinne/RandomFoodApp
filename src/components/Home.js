import React from "react";
import "../styles/Home.css"; // Importe o arquivo CSS
import { Link } from "react-router-dom";
import logo from "../assets/RandomFood Logo.svg"; // Importe o logo
import { Analytics } from "@vercel/analytics/react";
import LogoutButton from "./LogoutButton";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home">
      <LogoutButton />
      <Analytics />
      <img src={logo} alt="RandomFood Logo" />
      <h2>O que vamos comer hoje?</h2>
      {/* Botão para acessar a página de seleção aleatória */}
      <div className="botoes">
        <Link to="/surprise">
          <button className="Surprise">Me surpreenda</button>
        </Link>
        {/* Botão para acessar a página de opções de filtragem */}
        <Link to="/filtering" className="Personalize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
          >
            <rect
              y="0.289474"
              width="25.3333"
              height="3.61905"
              rx="1.80952"
              fill="#FFC529"
            />
            <rect
              x="4.22217"
              y="5.71806"
              width="16.8889"
              height="3.61905"
              rx="1.80952"
              fill="#FFC529"
            />
            <rect
              x="7.03711"
              y="11.1466"
              width="11.2593"
              height="3.61905"
              rx="1.80952"
              fill="#FFC529"
            />
          </svg>
          <p>Personalize Opções</p>
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

export default Home;
