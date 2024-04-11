import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import UserInfo from "./UserInfo"; // Importe o componente UserInfo
import "../styles/FilteringOptions.css"; // Importe o arquivo CSS

const FilteringOptions = () => {
  const navigate = useNavigate(); // Inicialize o hook useNavigate
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (category, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [category]: {
        ...(prevState[category] || {}),
        [option]: !prevState[category]?.[option],
      },
    }));
  };

  const showOptionsHandler = () => {
    const selectedParams = Object.keys(selectedOptions).reduce(
      (acc, category) => {
        const selectedOpts = Object.keys(selectedOptions[category]).filter(
          (opt) => selectedOptions[category][opt]
        );
        if (selectedOpts.length > 0) {
          acc[category] = selectedOpts;
        }
        return acc;
      },
      {}
    );

    const queryParams = Object.entries(selectedParams)
      .map(([category, options]) => options.map((opt) => `${category}=${opt}`))
      .flat()
      .join("&");

    const route = `http://192.168.0.2:3001/api/restaurants/filter?${queryParams}`; // Caminho completo para o backend
    console.log("Rota montada:", route);

    navigate("/filtered", { state: { route } }); // Passa a rota como uma propriedade para o componente ResultsPage
  };

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
      name: "category",
      options: [
        "Boteco",
        "Cafeteria",
        "Fast-food",
        "LANCHONETE",
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
        {categories.map((category) => (
          <div key={category.id} className="categories">
            <div className="category">
              <h3>{category.name}</h3>
              <div className="options">
                {category.options.map((option) => (
                  <div key={option} className="option">
                    <label className="checkbox-input">
                      <input
                        type="checkbox"
                        checked={selectedOptions[category.name]?.[option]}
                        onChange={() => handleOptionSelect(category.name, option)}
                        className="checkbox"
                      />
                      <span>{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Botão para mostrar as opções selecionadas */}
        <button className="button" id="showoptions" onClick={showOptionsHandler}>
          Me surpreenda
        </button>
      </div>
    </div>
  );
};

export default FilteringOptions;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate
// import UserInfo from "./UserInfo"; // Importe o componente UserInfo
// import "../styles/FilteringOptions.css"; // Importe o arquivo CSS

// const FilteringOptions = () => {
//   const navigate = useNavigate(); // Inicialize o hook useNavigate

//   const [selectedOptions, setSelectedOptions] = useState({});

//   const handleOptionSelect = (category, option) => {
//     setSelectedOptions((prevState) => ({
//       ...prevState,
//       [category]: {
//         ...(prevState[category] || {}),
//         [option]: !prevState[category]?.[option],
//       },
//     }));
//   };

//   const showOptionsHandler = () => {
//     const selectedParams = Object.keys(selectedOptions).reduce(
//       (acc, category) => {
//         const selectedOpts = Object.keys(selectedOptions[category]).filter(
//           (opt) => selectedOptions[category][opt]
//         );
//         if (selectedOpts.length > 0) {
//           acc[category] = selectedOpts;
//         }
//         return acc;
//       },
//       {}
//     );

//     const queryParams = Object.entries(selectedParams)
//       .map(([category, options]) => options.map((opt) => `${category}=${opt}`))
//       .flat()
//       .join("&");

//     const route = `/filter,?${queryParams}`;
//     console.log("Rota montada:", route);

//     navigate("/filtered", { state: { route } }); // Passa a rota como uma propriedade para o componente ResultsPage
//   };

//   const categories = [
//     { id: 1, name: "Refeição", options: ["Café da manhã", "Almoço", "Jantar"] },
//     {
//       id: 2,
//       name: "Preço Médio",
//       options: ["Até R$50", "R$50 - R$100", "R$100 - R$200", "Acima de R$200"],
//     },
//     { id: 3, name: "Localização", options: ["Parte Baixa", "Parte Alta"] },
//     {
//       id: 4,
//       name: "category",
//       options: [
//         "Boteco",
//         "Cafeteria",
//         "Fast-food",
//         "LANCHONETE",
//         "Padaria",
//         "Restaurante",
//         "Rodízio",
//         "Sorveteria",
//         "Outro",
//       ],
//     },
//   ];

//   return (
//     <div className="FilteringOptions">
//       <UserInfo />
//       <div className="options">
//         <h2>Personalize suas opções</h2>
//         {categories.map((category) => (
//           <div key={category.id} className="categories">
//             <div className="category">
//               <h3>{category.name}</h3>
//               <div className="options">
//                 {category.options.map((option) => (
//                   <div key={option} className="option">
//                     <label className="checkbox-input">
//                       <input
//                         type="checkbox"
//                         checked={selectedOptions[category.name]?.[option]}
//                         onChange={() => handleOptionSelect(category.name, option)}
//                         className="checkbox"
//                       />
//                       <span>{option}</span>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* Botão para mostrar as opções selecionadas */}
//         <button className="button" id="showoptions" onClick={showOptionsHandler}>
//           Me surpreenda
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilteringOptions;


