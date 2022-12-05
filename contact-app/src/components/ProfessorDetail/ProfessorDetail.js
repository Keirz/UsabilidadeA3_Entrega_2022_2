import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ProfessorDetail = (props) => {
  const { professorNome, profesorSegNome, professorCPF, professorTitulo, professorTurma, professorModuloTurma } = props.location.state.professor;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{professorNome}</div>
           <div className="description">{profesorSegNome}</div>
           <div className="description">{professorCPF}</div>
           <div className="description">{professorTitulo}</div>
           <div className="description">{professorTurma}</div>
           <div className="description">{professorModuloTurma}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/professores">
          <button className="ui button blue center">
            Voltar para a List de Profs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfessorDetail;
