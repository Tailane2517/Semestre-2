// projeto\src\components\AdicionarProduto\index.js

import React, { useState} from 'react';
import './style.css';

const AdicionarProduto = ({ onAdd }) => {
    const [texto,setTexto] = useState('');

    const enviar = (e) => {
        // Previne o comportamento padrão do formulário
        // que é recarregar a página
        e.preventDefault();
        //Adiciona o produto se o texto não estiver vazio
        if(texto.trim()) {
            //Chama a função onAdd passada via props
            // Props são os parâmentros que um componente recebe
            onAdd(texto);
            //Limpa o campo de texto
            setTexto('');
        }
    };

    return (
        <form className="form" onSubmit={enviar}>
            <input
                type="text"
                placeholder="Adicionar produto..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit">Adicionar</button> 
               
        </form>
    );   
}

export default AdicionarProduto;