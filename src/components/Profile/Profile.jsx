import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; 



//erro na seguranca, todos os animais estao aqui, mesmo que nao tenham sido cadastrados pelo usuario !!!!
//E EU NAO SEI O POR QUE



const Profile = () => {
  const token = localStorage.getItem('token');
  const [message, setMessage] = useState('');
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState({
    id: '',
    name: '',
    breed: '',
    age: '',
    description: '',
    city: '',
    contact: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setAnimal({
      ...animal,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigateToHome();
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pets', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAnimals(response.data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
        setMessage('Erro ao buscar animais.');
      }
    };

    fetchAnimals();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Animal deletado com sucesso!');
      setAnimals(animals.filter(animal => animal.id !== id));
    } catch (error) {
      setMessage('Erro ao deletar o animal.');
      console.error('Erro ao deletar o animal:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/pets/${animal.id}`, animal, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Animal atualizado com sucesso!');
      const response = await axios.get('http://localhost:5000/pets', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAnimals(response.data);
    } catch (error) {
      setMessage('Erro ao atualizar o animal.');
      console.error('Erro ao atualizar o animal:', error);
    }
  };

  const handleEdit = (animal) => {
    setAnimal(animal);
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <h2>Animais Cadastrados</h2>
      {message && <p className="message">{message}</p>}
      {animals.length === 0 ? (
        <p>Nenhum animal cadastrado.</p>
      ) : (
        <ul className="animal-list">
          {animals.map(animal => (
            <li key={animal.id}>
              {animal.name} - {animal.breed}
              <div>
                <button onClick={() => handleDelete(animal.id)}>Deletar</button>
                <button onClick={() => handleEdit(animal)}>Editar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isEditing && (
        <div>
          <form onSubmit={handleUpdate}>
            <input
              type="hidden"
              name="id"
              value={animal.id}
              readOnly
            />
            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={animal.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Raça:</label>
              <input
                type="text"
                name="breed"
                value={animal.breed}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Idade:</label>
              <input
                type="number"
                name="age"
                value={animal.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea
                name="description"
                value={animal.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Cidade:</label>
              <input
                type="text"
                name="city"
                value={animal.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contato:</label>
              <input
                type="text"
                name="contact"
                value={animal.contact}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">{animal.id && 'Atualizar Animal'}</button>
          </form>
        </div>
      )}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
