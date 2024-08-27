import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:5000/pets');
      setPets(response.data);
    };
    fetchPets();
  }, []);

  return (
    <div>
      <h2>Lista de Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.breed} - {pet.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetPets;
