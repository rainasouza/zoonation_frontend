import { useState } from "react";
import React from 'react';
import axios from "axios";
import './PostAnimal.css';


const PostAnimal = () => {
    const [animal, setAnimal] = useState({
        name: '',
        breed: '',
        age: '',
        description: '',
        city: '',
        contact: ''
    });
    const [message, setMessage] = useState("");




    const handleChange = (e) => {
        setAnimal({
            ...animal,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/pets', animal);
            setMessage("Animal Adicionado");
        } catch (error) {
            console.error('Erro ao adicionar o animal:', error);
            setMessage('Erro ao adicionar o animal.');
        }
    };

    return (
        <div className="post-animal-container">
            <div className="form-container">
                <h2>Adicionar Animal</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Adicionar Animal</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default PostAnimal;
