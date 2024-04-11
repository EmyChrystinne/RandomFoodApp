import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Surprise.css";

//const response = await axios.get('http://192.168.137.100:3001/api/restaurants/random');


const SurpriseSelection = () => {
  const [SurpriseSelection, setRandomRestaurant] = useState(null); //

  useEffect(() => {
    const fetchRandomRestaurant = async () => {
      console.log("fetchRandomRestaurant");
      try {
        const response = await axios.get(
          "http://192.168.137.1:3001/api/restaurants/random"
        );
        setRandomRestaurant(response.data);
      } catch (error) {
        console.error("Erro ao obter restaurante aleatório:", error);
      }
    };

    fetchRandomRestaurant();
  }, []);

  const handleRefresh = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.2:3001/api/restaurants/random"
      );
      setRandomRestaurant(response.data);
    } catch (error) {
      console.error("Erro ao obter restaurante aleatório:", error);
    }
  };

  return (
    <div className="surprisePage">
      <div className="content">
        {/* <h2>Seleção Surpresa</h2> */}
        {SurpriseSelection ? (
          <div className="card">
            <p id="nome">
              <strong>{SurpriseSelection.NOME}</strong> 
            </p>
            <div className="infos">
            <p className="info">
              <strong>Categoria:</strong> {SurpriseSelection.CATEGORIA}
            </p>
            <p className="info">
              <strong>Preço Médio:</strong> {SurpriseSelection.PREÇO_MEDIO}
            </p>
            <p className="info">
              <strong>Refeição:</strong> {SurpriseSelection.REFEIÇÃO}
            </p>
            <p className="info">
              <strong>Localização:</strong> {SurpriseSelection.LOCALIZAÇÃO}
            </p>
          </div>
          </div>
        ) : (
          null
        )}
        </div>
      <div className="buttons">
        <Link to="/home">
          <button id="go" className="button">SIMBORA!</button>
        </Link>
        <button onClick={handleRefresh} className="button" id="outro">Que tal outro?</button>
      </div>
    </div>
  );
};

export default SurpriseSelection;