import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            

            localStorage.setItem('token', response.data.access_token);

            setMessage('Login realizado com sucesso!');
        } catch (error) {

            setMessage('Credenciais inválidas!');
        }
    };
    const handleLogout = (e) => {
      e.preventDefault()
      localStorage.removeItem('token');

    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
            <p>{message}</p>
        </div>
    );
}

export default Login;
