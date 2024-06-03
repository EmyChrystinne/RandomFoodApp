import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../styles/Surprise.css";
import BackButton from "./BackButton.js";
import Footer from "./Footer";
const API = process.env.REACT_APP_URL

const SurpriseSelection = () => {
  const [SurpriseSelection, setRandomRestaurant] = useState(null); //

  useEffect(() => {
    const fetchRandomRestaurant = async () => {
      console.log("fetchRandomRestaurant");
      try {
        const response = await axios.get(
          `${API}/random`
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
        `${API}/random`
      );
      setRandomRestaurant(response.data);
    } catch (error) {
      console.error("Erro ao obter restaurante aleatório:", error);
    }
  };

  const handleGoToGoogleMaps = () => {
    if (SurpriseSelection) {
      const restaurantName = encodeURIComponent(SurpriseSelection.nome);
      window.open(`https://www.google.com.br/maps/search/${restaurantName}`, "_blank");
    }
  };

  return (
    <div className="surprisePage">
      <div className="content">
        <BackButton />
        {SurpriseSelection ? (
          <div className="card">
            <p id="nome">
              <strong>{SurpriseSelection.nome}</strong> 
            </p>
            <div className="infos">
            <p className="info">
              <strong>Categoria:</strong> {SurpriseSelection.categoria}
            </p>
            <p className="info">
              <strong>Preço Médio:</strong> {SurpriseSelection.preço}
            </p>
            <p className="info">
              <strong>Refeição:</strong> {SurpriseSelection.refeição.join(", ")}
            </p>
            <p className="info">
              <strong>Localização:</strong> {SurpriseSelection.localização.join(", ")}
            </p>
          </div>
          </div>
        ) : (
          null
        )}
        </div>
      <div className="buttons">
          <button id="go" className="button" onClick={handleGoToGoogleMaps}>SIMBORA!</button>
        <button onClick={handleRefresh} className="button" id="outro">Que tal outro?</button>
      </div>
      <Footer />
    </div>
  );
};

export default SurpriseSelection;