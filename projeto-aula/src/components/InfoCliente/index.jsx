// src\components\InfoCliente\index.jsx

import { useState } from 'react';
import './style.css'
import logo from '../../assets/images/image.png';

function InfoCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, { nome, email }]);
        setNome('');
        setEmail('');
    }

    
    return (
        <div className="info-cliente">
            <img src= {logo} alt="Logo da empresa" className="cliente-img" />    
            <h2>Informações do Cliente</h2>
            <form onSubmit={adicionarCliente}>
                <div>
                    <label>Nome: </label>
                    <input type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                    required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required />
                </div>
    
                <button type="submit">Adicionar Cliente</button>

            </form>

            <hr />

            <h3>Lista de Clientes</h3>

            <ul>
                {listaClientes.map((cliente, index) => (
                    <li key={index}>{cliente.nome} - {cliente.email}</li>
                ))}
                
            </ul>
    
        </div>      



    );
}

export default InfoCliente;