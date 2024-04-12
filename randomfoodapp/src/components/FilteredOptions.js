import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Importe o hook useLocation

const ResultsPage = ({ userName }) => {
  const location = useLocation(); // Obtenha a localização usando useLocation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const selectedParams = location.state.selectedParams; // Acesse os parâmetros selecionados da localização

    console.log({
      selectedParams
    })

    
    const fetchFilteredRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/restaurants/restaurantRoute');
        setFilteredRestaurants(response.data);
        setLoading(false);
        if (response.data.length === 0) {
          alert('Nenhum restaurante encontrado com os filtros selecionados.');
          window.history.back(); // Retorna à página anterior
        }
      } catch (error) {
        console.error('Erro ao obter restaurantes filtrados:', error);
      }
    };

    fetchFilteredRestaurants();
  }, [location]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) :
          <div className="surprisePage">
            <div className="content">
              {/* <h2>Seleção Surpresa</h2> */}
              {filteredRestaurants ? (
                <div className="card">
                  <p id="nome">
                    <strong>{filteredRestaurants.NOME}</strong> 
                  </p>
                  <div className="infos">
                  <p className="info">
                    <strong>Categoria:</strong> {filteredRestaurants.CATEGORIA}
                  </p>
                  <p className="info">
                    <strong>Preço Médio:</strong> {filteredRestaurants.PREÇO_MEDIO}
                  </p>
                  <p className="info">
                    <strong>Refeição:</strong> {filteredRestaurants.REFEIÇÃO}
                  </p>
                  <p className="info">
                    <strong>Localização:</strong> {filteredRestaurants.LOCALIZAÇÃO}
                  </p>
                </div>
                </div>
              ) : (
                null
              )}
              </div>
            </div>
      }
    </div>
  );

}
export default ResultsPage;







