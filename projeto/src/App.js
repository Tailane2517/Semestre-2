import React, {useState} from 'react';
import './App.css';

function App() {
    const [compra, setCompra] = useState('');
    const [compras, setCompras] = useState(['Feijão', 'Arroz', 'Macarrão']);
  
    const adicionarLista = () => {
      if(compras.includes(compra)) {
        alert('Já existe essa lista!');
        return;
      }
      
      setCompras([...compras, compra]);
      setCompra('');
    };

return (
  <div className="App">
    <h1>Adicionar itens de compra</h1>
      <input
        type = "text"
        value = {compra}
        onChange = {(e) => setCompra(e.target.value)}
        placeholder = "Digite suas compras"
      />
      <button onClick = {adicionarLista}>Adicionar</button>
      <hr />
      <h2>Lista de compra</h2>
      <ol>
        {compras.map((item, index) => (
          <li key={index}>{item} </li>
        )) }
      </ol>
  </div>
);
}

export default App;
