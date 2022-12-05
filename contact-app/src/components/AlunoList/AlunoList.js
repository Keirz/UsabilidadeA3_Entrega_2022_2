import React from "react";
import { Link } from "react-router-dom";
import AlunoCard from "../AlunoCard/AlunoCard.js"

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
    <div className="main">
      <h2>
        Aluno List
        <Link to="/addA">
          <button className="ui button blue right">Add Aluno</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderAlunoList}</div>
    </div>
  );
};

export default AlunoList;
