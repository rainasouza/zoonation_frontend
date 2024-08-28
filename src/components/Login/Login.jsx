import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importe o arquivo CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });

            localStorage.setItem('token', response.data.access_token);
            setMessage('Login realizado com sucesso!');
            navigateToHome();
        } catch (error) {
            setMessage('Credenciais inválidas!');
        }
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                            <button type="submit">Entrar</button>
                        </div>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default Login;
