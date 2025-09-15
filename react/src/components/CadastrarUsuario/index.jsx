// src\components\CadastrarUsuario\index.jsx
import { useState } from 'react';
import './styles.css';

function CadastrarUsuario({ usuarios, setUsuarios }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function adicionarUsuario(event) {
    event.preventDefault();

    const novoUsuario = { nome, email, telefone };
    setUsuarios([...usuarios, novoUsuario]);

    setNome('');
    setEmail('');
    setTelefone('');
  }

  return (
    <div className="container">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={adicionarUsuario}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            required
          />
        </div>

        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  );
}

export default CadastrarUsuario;
