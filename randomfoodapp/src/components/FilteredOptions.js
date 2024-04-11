import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Importe o hook useLocation
import FilteredOptions from './FilteredOptions';

const ResultsPage = ({ userName }) => {
  const location = useLocation(); // Obtenha a localização usando useLocation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedParams = location.state.selectedParams; // Acesse os parâmetros selecionados da localização

    const fetchFilteredRestaurants = async () => {
      try {
        const response = await axios.get('http://192.168.0.2:3001/api/restaurants/filter', {
          params: selectedParams
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
      ) : (
        <FilteredOptions userName={userName} recommendation={filteredRestaurants[0]} otherOptions={filteredRestaurants.slice(1)} />
      )}
    </div>
  );
}

export default ResultsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FilteredOptions from './FilteredOptions';

// const ResultsPage = ({ userName, selectedOptions }) => {
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFilteredRestaurants = async () => {
//       try {
//         const response = await axios.get('http://192.168.0.13:3001/api/restaurants/filter?', {
//           params: selectedOptions
//         });
//         setFilteredRestaurants(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Erro ao obter restaurantes filtrados:', error);
//       }
//     };

//     fetchFilteredRestaurants();
//   }, [selectedOptions]);

//   return (
//     <div>
//       {loading ? (
//         <p>Carregando...</p>
//       ) : (
//         <FilteredOptions userName={userName} recommendation={filteredRestaurants[0]} otherOptions={filteredRestaurants.slice(1)} />
//       )}
//     </div>
//   );
// }

// export default ResultsPage;




