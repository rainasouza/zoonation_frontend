import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/register', {
                username,
                password
            })

    
            setMessage('Login realizado com sucesso!');
        
        } catch (error){
            setMessage('erro ao criar usuario')
        }
    }

  return (
    <div>
        <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Criar</button>
            </form>
            <p>{message}</p>
    </div>
  )
}

export default Register