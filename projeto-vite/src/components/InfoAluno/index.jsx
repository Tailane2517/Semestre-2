// src\components\Mensagem\InfoAluno\index.jsx

import './style.css';

function InfoAluno() {
    const nome = "Tailane Oliveira";
    const curso = "Desenvolvimento de sistemas";
    const periodo = "2º Semestre";

  return (
    <div className="info-aluno">
      <h2>Informações do Aluno</h2>
      <p>Nome: {nome}</p>
      <p>Curso: {curso}</p>
      <p>Período: {periodo}</p>
    </div>
  );
}

export default InfoAluno;