import { useState } from 'react';
import './App.css';
import CadastrarUsuario from './components/CadastrarUsuario';
import ListarUsuarios from './components/ListarUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([
    { nome: 'Ana', email: 'ana@exemplo.com', telefone: '99999-9999' },
    { nome: 'Bruno', email: 'bruno@exemplo.com', telefone: '88888-8888' },
  ]);

  return (
    <>
      <CadastrarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
      <hr />
      <ListarUsuarios usuarios={usuarios} />
      <h1>Vou te hackear</h1>
    </>
  );
}


export default App;
