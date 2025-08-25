// projeto\src\components\ListadeProdutos\index.js

import React from "react";
import './styles.css';

const ListadeProdutos = ({ itens = [] }) => {
    return (
        <ul className="lista-produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}    
        </ul>
    );
}

export default ListadeProdutos;