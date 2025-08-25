import React, {useState} from 'react';
import './App.css';
import logo  from '../src/assets/images/logo_senai.png';

import AdicionarProduto from './components/AdicionarProduto';
import ListadeProdutos from './components/ListadeProdutos';

function App() {
  const [produtos, setProdutos] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarUsuario = (nome) => {
    const produto = nome.trim();

    if (produtos.includes(produto)) {
      alert('Produto já existe na lista!');
      return;
    } 

    setProdutos([...produtos, produto]);
  };

  
  return (
    <div className="App">
      <img src={logo} className="logo" alt="Logo do Senai"/>
      <h1>Produtos</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      <hr />
      <h2>Lista de Produtos</h2>
      <ListadeProdutos itens={produtos} />
    </div>
  );
}

export default App;