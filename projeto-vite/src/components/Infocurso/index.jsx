// src\components\Infocurso\index.jsx

import './style.css';

function Infocurso() {
    const dadosCurso = "Desenvolvimento de Sistemas"; 
    const nome = "Tailane Oliveira";
    const cargaHoraria = "1200 horas";
    const local = "Dendezeiros - BA";
    const dataInicio = "03/02/2025";
    const dataTermino = "20/12/2026";

    return (
        <div className="info-curso">
        <h2>Informações do curso</h2>
        <p>Curso: {dadosCurso}</p>
        <p>Nome: {nome}</p>
        <p>Carga Horária: {cargaHoraria}</p>
        <p>Local: {local}</p>
        <p>Data de Início: {dataInicio}</p>
        <p>Data de Término: {dataTermino}</p>
      </div>
    );
}

export default Infocurso;