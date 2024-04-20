import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'; // Importe o hook useLocation
import BackButton from './BackButton';


const ResultsPage = () => {
  const API = process.env.REACT_APP_URL;
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
        const response = await axios.get(`${API}/restaurants/restaurantRoute`);
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
  const atualizarPagina = () => {
    window.location.reload();
  };

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) :
          <div className="surprisePage">
            <BackButton />
            <div className="content">
              {/* <h2>Seleção Surpresa</h2> */}
              {filteredRestaurants ? (
                <div className="card">
                  <p id="nome">
                    <strong>{filteredRestaurants.NOME}</strong> 
                  </p>
                  <div className="infos">
                  <p className="info">
                    <strong>Categoria:</strong> {filteredRestaurants.Categoria}
                  </p>
                  <p className="info">
                    <strong>Preço Médio:</strong> {filteredRestaurants.Preço}
                  </p>
                  <p className="info">
                    <strong>Refeição:</strong> {filteredRestaurants.Refeição}
                  </p>
                  <p className="info">
                    <strong>Localização:</strong> {filteredRestaurants.Localização}
                  </p>
                </div>
                </div>
              ) : (
                null
              )}
              
              </div>
              <div className="buttons">
                <Link to="/">
                   <button id="go" className="button">SIMBORA!</button>
                </Link>
                  <button onClick= {atualizarPagina} className="button" id="outro">Que tal outro?</button>
              </div>
            </div>
      }
    </div>
  );

}
export default ResultsPage;







