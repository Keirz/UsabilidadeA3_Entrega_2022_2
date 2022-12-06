import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const AlunoDetail = (props) => {
  const { alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota1,
    alunoNota2,
    alunoNota3, nomeTurmaAluno, moduloTurma } = props.location.state.aluno;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{alunoNome}</div>
           <div className="description">{alunoSegNome}</div>
           <div className="description">{alunoCPF}</div>
           <div className="description">{alunoMatricula}</div>
           <div className="description">{alunoNota1}</div>
           <div className="description">{alunoNota2}</div>
           <div className="description">{alunoNota3}</div>
           <div className="description">{nomeTurmaAluno}</div>
           <div className="description">{moduloTurma}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/aluno">
          <button className="ui button blue center">
            Voltar para a Lista de Alunos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlunoDetail;
