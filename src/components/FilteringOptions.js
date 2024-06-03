// src/components/FilteringOptions.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/FilteringOptions.css";
import axios from "axios";
import BackButton from "./BackButton";
import Logo from "../assets/RandomFood Logo.svg";
import Footer from "./Footer";

const API = process.env.REACT_APP_URL; // URL da API fornecida pelo ambiente

const FilteringOptions = () => {
  const navigate = useNavigate(); // Hook useNavigate para navegação programática
  const [selectedOptions, setSelectedOptions] = useState({}); // Estado para armazenar opções selecionadas

  // Atualiza o estado com a opção selecionada para a categoria (garante apenas uma opção por categoria)
  const handleOptionSelect = (category, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [category]: option,
    }));
  };

  // Manipulador para mostrar opções selecionadas e navegar para a página de resultados filtrados
  const showOptionsHandler = async () => {
    const queryParams = Object.keys(selectedOptions)
      .filter((category) => selectedOptions[category] !== "") // Filtra categorias sem opção selecionada
      .map((category) => `${category}=${selectedOptions[category]}`)
      .join("&");

    if (queryParams) {
      const route = `${API}/restaurants/filter?${queryParams}`;
      await axios.get(route).then((response) => {
        navigate("/filtered", { state: { route } });
      });
    } else {
      // Se nenhum filtro foi selecionado, exibe uma mensagem para o usuário
      alert("Por favor, selecione pelo menos uma opção.");
    }
  };

  // Definição das categorias e opções disponíveis
  const categories = [
    { id: 1, name: "refeicao", options: ["Café da Manhã", "Almoço", "Jantar"] },
    {
      id: 2,
      name: "preco",
      options: ["Até R$50", "R$50-R$100", "R$100-R$200", "Acima de R$200"],
    },
    { id: 3, name: "localizacao", options: ["Parte Baixa", "Parte Alta"] },
    {
      id: 4,
      name: "categoria",
      options: [
        "Boteco",
        "Cafeteria",
        "Fast-Food",
        "Lanchonete",
        "Padaria",
        "Restaurante",
        "Pizza",
        "Sorveteria",
      ],
    },
  ];

  // Mapeamento dos nomes corrigidos das categorias

  const categoryNames = {
    refeicao: "Refeição",
    preco: "Preço",
    localizacao: "Localização",
    categoria: "Categoria",
  };

  return (
    <div className="FilteringOptions">
      <BackButton />
      <div className="options">
        <div className="header">
          <Link to="/home">
            <img src={Logo} alt="RandomFood Logo" />
          </Link>
          <h2>Personalize suas opções</h2>
        </div>
        {categories.map((category) => (
          <div key={category.id} className="categories">
            <div className="Categoria">
              <h3>{categoryNames[category.name]}</h3>{" "}
              <div className="options">
                {category.options.map((option) => (
                  <div key={option} className="option">
                    <label className="radio-input">
                      <input
                        type="radio"
                        name={category.name}
                        checked={selectedOptions[category.name] === option}
                        onChange={() =>
                          handleOptionSelect(category.name, option)
                        }
                        className="radio"
                      />
                      <span>{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          className="button"
          id="showoptions"
          onClick={showOptionsHandler}
        >
          Me surpreenda
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default FilteringOptions;
