import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SurpriseSelection from "./components/SurpriseSelection";
import FilteringOptions from "./components/FilteringOptions";
import FilteredOptions from "./components/FilteredOptions";


const App = () => {
  return (
    <Router>
      <div>
        {/* Configuração das rotas */}
        <Routes>
          {/* Rota para a página inicial*/}
          <Route path="/" element={<Home />} />
          {/* Rota para a página de seleção surpresa */}
          <Route path="/surprise" element={<SurpriseSelection />} />
          {/* Rota para a página de opções de filtragem */}
          <Route path="/filtering" element={<FilteringOptions />} />
          {/* Rota para a página de opções filtradas */}
          <Route path="/filtered" element={<FilteredOptions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
