import React, { useState } from "react";
import UserInfo from "./UserInfo"; // Importe o componente UserInfo
import "../styles/FilteringOptions.css"; // Importe o arquivo CSS

const FilteringOptions = () => {
  // Definir estado para as categorias e opções selecionadas
  const [selectedOptions, setSelectedOptions] = useState({});

  // Função para lidar com a seleção de opções
  const handleOptionSelect = (category, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [category]: {
        ...(prevState[category] || {}),
        [option]: !prevState[category]?.[option], // Inverte o estado da opção selecionada
      },
    }));
  };

  // Simulação de dados das categorias e opções (substitua com os dados do banco de dados)
  const categories = [
    { id: 1, name: "Refeição", options: ["Café da manhã", "Almoço", "Jantar"] },
    {
      id: 2,
      name: "Preço Médio",
      options: ["Até R$50", "R$50 - R$100", "R$100 - R$200", "Acima de R$200"],
    },
    { id: 3, name: "Localização", options: ["Parte Baixa", "Parte Alta"] },
    {
      id: 4,
      name: "Categorias",
      options: [
        "Boteco",
        "Cafeteria",
        "Fast-food",
        "Lanchonete",
        "Padaria",
        "Restaurante",
        "Rodízio",
        "Sorveteria",
        "Outro",
      ],
    },
  ];

  return (
    <div className="FilteringOptions">
      <UserInfo />
      <div className="options"> 
      <h2>Personalize suas opções</h2>
      {/* Mapeia as categorias */}
      {categories.map(
        (
          category // Mapeia as categorias
        ) => (
          <div key={category.id} className="categories">
            <div className="category">
              {" "}
              {/* Div para cada categoria */}
              <h3>{category.name}</h3>
              {/* Mapeia as opções da categoria */}
              <div className="options">
                {category.options.map(
                  (
                    option // Mapeia as opções da categoria atual
                  ) => (
                    <div key={option} className="option">
                      {" "}
                      {/* Div para cada opção */}
                      <label className="checkbox-input">
                        <input
                          type="checkbox"
                          checked={selectedOptions[category.name]?.[option]} // Verifica se a opção está selecionada
                          onChange={() =>
                            handleOptionSelect(category.name, option)
                          } // Manipula a seleção da opção
                          className="checkbox"
                        />
                        <span>{option}</span>
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )
      )}
      {/* Botão para mostrar as opções selecionadas (aqui você pode adicionar a navegação para a próxima página) */}
      <button className="button" id="showoptions">Me surpreenda</button>{" "}
      {/* Botão para mostrar as opções selecionadas */}
    </div>
    </div>
  );
};

export default FilteringOptions;
