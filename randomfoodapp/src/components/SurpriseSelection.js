import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SurpriseSelection = () => {
  const [SurpriseSelection, setRandomRestaurant] = useState(null);  

  useEffect(() => {
    const fetchRandomRestaurant = async () => {
      console.log('fetchRandomRestaurant');
      try {
        const response = await axios.get('http://localhost:3001/api/restaurants/random');
        setRandomRestaurant(response.data);
      } catch (error) {
        console.error('Erro ao obter restaurante aleatório:', error);
      }
    };

    fetchRandomRestaurant();
  }, []);

  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/restaurants/random');
      setRandomRestaurant(response.data);
    } catch (error) {
      console.error('Erro ao obter restaurante aleatório:', error);
    }
  };

  return (
    <div>
      <h2>Seleção Surpresa</h2>
      {SurpriseSelection ? (
        <div>
          <p><strong>Nome:</strong> {SurpriseSelection.NOME}</p>
          <p><strong>Categoria:</strong> {SurpriseSelection.CATEGORIA}</p>
          <p><strong>Preço Médio:</strong> {SurpriseSelection.PREÇO_MEDIO}</p>
          <p><strong>Refeição:</strong> {SurpriseSelection.REFEIÇÃO}</p>
          <p><strong>Localização:</strong> {SurpriseSelection.LOCALIZAÇÃO}</p>
        </div>
      ) : (
        <p>Carregando restaurante aleatório...</p>
      )}
      <button onClick={handleRefresh}>Simbora!</button>
    </div>
  );
}

export default SurpriseSelection;



// import React from 'react';

// const SurpriseSelection = ({ restaurant }) => {
//   return (
//     <div>
//       <h2>Seleção Surpresa</h2>
//       {/* Exibir detalhes do restaurante */}
//       <button>Simbora!</button>
//       <button>Que tal outro?</button>
//     </div>
//   );
// }

// export default SurpriseSelection;