import axios from 'axios';
import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                username,
                password
            });

            setMessage('Usuário criado com sucesso!');
        } catch (error) {
            setMessage('Erro ao criar usuário.');
        }
    };

    return (
        <div className="register-container">
            <div className="form-container">
                <h2>Criar Conta</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-grid">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <button type="submit">Criar Conta</button>
                        </div>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default Register;
