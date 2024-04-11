import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SurpriseSelection from './components/SurpriseSelection';
import FilteringOptions from './components/FilteringOptions';
import FilteredOptions from './components/FilteredOptions';
import UserInfo from './components/UserInfo';

const App = () => {
  const userName = "Emylle";
  // Suponha que o nome do usuário seja obtido de alguma fonte (por exemplo, Firebase)
  return (
    <Router>
      <div>
        {/* Configuração das rotas */}
        <Routes>
          {/* Rota para a página de login */}
          <Route path="/" element={<Login />} />
          {/* Rota para a página inicial, passando o nome do usuário como propriedade */}
          <Route path="/home" element={<Home userName={userName} />} />
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
}

export default App;


