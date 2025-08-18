import React, { useState } from 'react';
import './App.css';

function App() {
    //Cria uma variavel e um setter (forma de adicionar dados)para usuário.
    const [usuario, setUsuario] = useState('');

    //Cria uma variável e um setter (forma de adicionar dados) para os usuários.
    //Inicializa com uma lista de usuários pré-definidas.
    const [usuarios, setUsuarios] = useState(['Marta', 'João', 'Ana', 'Carlos']);

    //Função pára verificar se o usuário já existe e adicioná-lo à lista.
    const adicionarUsuario = () => {

      //Se o usuário já existir, exibe um alerta.
      if (usuarios.includes(usuario)) {
        alert('Usuário já existe!');
        return;
      }

        //Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
        //Adiciona todos os usuários já existentes e novo usuário.
        setUsuarios([...usuarios, usuario]);
        setUsuario('');
      };

return (
  <div className="App">
    <h1>Adicionar usuários</h1>
      <input
        type = "text"
        value = {usuario}
        onChange = {(e) => setUsuario(e.target.value)}
        placeholder = "Digite o nome do usuário"
      />
      <button onClick = {adicionarUsuario}>Adicionar</button>

      <hr />
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index} > {user} </li>
            )) }
        </ol>
        </div>
       );
}
//ol colocar em lista númerica com ul é em forma de bolinha

export default App;
