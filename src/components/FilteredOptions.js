import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import Footer from "./Footer";

const FilteredOptions = () => {
  const location = useLocation(); // Obtenha a localização usando useLocation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Estado para armazenar restaurantes filtrados
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    const fetchFilteredRestaurants = async () => {
      try {
        const { route } = location.state || {};
        if (route) {
          const response = await axios.get(route);
          console.log("Resposta da API:", response.data); // Log para depuração

          // Verifica se a resposta é um array
          if (Array.isArray(response.data)) {
            setFilteredRestaurants(response.data);
          } else if (
            typeof response.data === "object" &&
            response.data !== null
          ) {
            setFilteredRestaurants([response.data]);
          } else {
            setFilteredRestaurants([]);
            console.error(
              "Resposta inesperada da API, esperado um array ou objeto:",
              response.data
            );
          }

          setLoading(false);
        } else {
          alert("Parâmetros de filtro ausentes.");
          window.history.back();
        }
      } catch (error) {
        if (error.response) {
          // Erro de resposta da API com código de status
          if (error.response.status === 404) {
            alert(
              "Desculpe, não encontramos nenhum restaurante que corresponda aos seus critérios de filtro. Por favor, tente novamente com diferentes opções."
            );
          } else if (error.response.status === 500) {
            alert(
              "Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde."
            );
          } else {
            alert(
              "Algo deu errado ao buscar os restaurantes. Por favor, tente novamente."
            );
          }
        } else if (error.request) {
          // Erro de requisição feita, mas sem resposta recebida
          console.error("Erro de requisição:", error.request);
          alert(
            "Não foi possível obter uma resposta do servidor. Por favor, verifique sua conexão com a internet e tente novamente."
          );
        } else {
          // Erro de configuração do Axios ou erro geral
          console.error("Erro:", error.message);
          alert(
            "Algo deu errado ao processar sua solicitação. Por favor, tente novamente."
          );
        }
        setFilteredRestaurants([]); // Garante que filteredRestaurants seja um array em caso de erro
        setLoading(false);
      }
    };

    fetchFilteredRestaurants();
  }, [location.state]);

  const handleGoToGoogleMaps = (restaurantName) => {
    const encodedName = encodeURIComponent(restaurantName);
    window.open(
      `https://www.google.com.br/maps/search/${encodedName}`,
      "_blank"
    );
  };

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="surprisePage">
          <BackButton />
          <div className="content">
            {filteredRestaurants.length === 0 ? (
              <div className="noResultsMessage">
                <p>
                  Não há resultados para esse filtro! Tente outras opções e/ou 
                  <a
                    href="https://forms.gle/2pqxMnoXfJqF5ftCA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  sugira um estabelecimento para gente!
                  </a>{" "}
                </p>
              </div>
            ) : (
              filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="card">
                  <p id="nome">
                    <strong>{restaurant.nome}</strong>
                  </p>
                  <div className="infos">
                    <p className="info">
                      <strong>Categoria:</strong> {restaurant.categoria}
                    </p>
                    <p className="info">
                      <strong>Preço Médio:</strong> {restaurant.preco}
                    </p>
                    <p className="info">
                      <strong>Refeição:</strong>{" "}
                      {Array.isArray(restaurant.refeicao)
                        ? restaurant.refeicao.join(", ")
                        : restaurant.refeicao}
                    </p>
                    <p className="info">
                      <strong>Localização:</strong>{" "}
                      {Array.isArray(restaurant.localizacao)
                        ? restaurant.localizacao.join(", ")
                        : restaurant.localizacao}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="buttons">
            {filteredRestaurants.length > 0 && (
              <button
                onClick={() =>
                  handleGoToGoogleMaps(filteredRestaurants[0].nome)
                }
                className="button"
                id="go"
              >
                SIMBORA!
              </button>
            )}
            <Link to="/filtering">
              <button className="button" id="outro">
                Que tal outro?
              </button>
            </Link>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default FilteredOptions;
