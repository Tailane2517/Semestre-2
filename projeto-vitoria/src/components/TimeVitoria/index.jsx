// src\components\TimeVitoria\index.jsx
import { useState } from 'react'
import './style.css'


function TimeVitoria() {
    const [jogadores, setJogadores] = useState('');
    const [camisa, setCamisa] = useState('');

    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, {jogadores, camisa}]);
        setJogadores('');
        setCamisa('');
    }

    return (
        <div className="time-vitoria">
            <h2>Time do Vitória</h2>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome do Jogador:</label>
                    <input type="text"
                    value={jogadores}
                    onChange={(e) => setJogadores(e.target.value)} 
                    required />
                </div>
                 <div>
                    <label>Número da Camisa:</label>
                    <input type="numero" 
                    value={camisa}
                    onChange={(e) => setCamisa(e.target.value)} 
                    required />
                </div>
    
                <button type="submit">Adicionar Jogadores</button>

            </form>

            <hr />

            <h3>Lista de Jogadores</h3>

            <ul>
                {listaJogadores.map((vitoria, index) => (
                    <li key={index}>{vitoria.jogadores} - {vitoria.camisa}</li>
                ))}
                
            </ul>
    
        </div>      



    );
}

export default TimeVitoria;