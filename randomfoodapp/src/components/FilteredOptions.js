import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, useLocation } from 'react-router-dom'; // Importe o hook useLocation
import FilteredOptions from './FilteredOptions';
import route from './FilteringOptions'

const ResultsPage = ({ userName }) => {
  const location = useLocation(); // Obtenha a localização usando useLocation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedParams = location.state.selectedParams; // Acesse os parâmetros selecionados da localização

    const fetchFilteredRestaurants = async () => {
      try {
        const response = await axios.get('http://192.168.0.2:3001/api/restaurants/restaurantRoute', {
          params: {route}
        });
        setFilteredRestaurants(response.data);
        setLoading(false);
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
              {FilteredOptions ? (
                <div className="card">
                  <p id="nome">
                    <strong>{FilteredOptions.NOME}</strong> 
                  </p>
                  <div className="infos">
                  <p className="info">
                    <strong>Categoria:</strong> {FilteredOptions.CATEGORIA}
                  </p>
                  <p className="info">
                    <strong>Preço Médio:</strong> {FilteredOptions.PREÇO_MEDIO}
                  </p>
                  <p className="info">
                    <strong>Refeição:</strong> {FilteredOptions.REFEIÇÃO}
                  </p>
                  <p className="info">
                    <strong>Localização:</strong> {FilteredOptions.LOCALIZAÇÃO}
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







