import React from "react";
import "../styles/BackButton.css";
import { Link } from "react-router-dom";

const BackButton = () => {

  return (
    <div className="backButton">
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default BackButton;
