import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Voltar uma página no histórico
  };

  return (
    <div className="backButton">
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default BackButton;
