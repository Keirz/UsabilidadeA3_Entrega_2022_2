import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import AlunoCard from "../AlunoCard/AlunoCard.js"
import './AlunoList.css'
import Table from "react-bootstrap/esm/Table.js";

const AlunoList = (props) => {
  console.log(props);

  const deleteAlunoHandler = (id) => {
    props.getAlunosId(id);
  };

  const renderAlunoList = props.alunos.map((aluno) => {
    return (
      <AlunoCard
      aluno={aluno}
        clickHander={deleteAlunoHandler}
        key={aluno.id}
      />
    );
  });
  return (
    <div className="lista contianer-fluid">
      <div className="container-fluid listHead">
      <h2>
        Lista de Alunos
        </h2>
        <Link to="/addA" className="buttonAdd">
          <button className="button blue right">Add Aluno</button>
        </Link>
      
      </div>
      <Table responsive bordered striped hover className="table1">{renderAlunoList}</Table>
    </div>
  );
};

export default AlunoList;
