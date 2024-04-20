import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Surprise.css";
import BackButton from "./BackButton.js";

const SurpriseSelection = () => {
  const API = process.env.REACT_APP_URL
  const [SurpriseSelection, setRandomRestaurant] = useState(null); //

  useEffect(() => {
    const fetchRandomRestaurant = async () => {
      console.log("fetchRandomRestaurant");
      try {
        const response = await axios.get(
          `${API}/restaurants/random`
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
        `${API}/restaurants/random`
      );
      setRandomRestaurant(response.data);
    } catch (error) {
      console.error("Erro ao obter restaurante aleatório:", error);
    }
  };

  return (
    <div className="surprisePage">
      <div className="content">
        <BackButton />
        {SurpriseSelection ? (
          <div className="card">
            <p id="nome">
              <strong>{SurpriseSelection.NOME}</strong> 
            </p>
            <div className="infos">
            <p className="info">
              <strong>Categoria:</strong> {SurpriseSelection.Categoria}
            </p>
            <p className="info">
              <strong>Preço Médio:</strong> {SurpriseSelection.Preço}
            </p>
            <p className="info">
              <strong>Refeição:</strong> {SurpriseSelection.Refeição}
            </p>
            <p className="info">
              <strong>Localização:</strong> {SurpriseSelection.Localização}
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
        <button onClick={handleRefresh} className="button" id="outro">Que tal outro?</button>
      </div>
    </div>
  );
};

export default SurpriseSelection;