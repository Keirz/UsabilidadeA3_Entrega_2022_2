import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ProfessorCard from "../ProfessorCard/ProfessorCard.js";
import './ProfessorList.css'
import Table from "react-bootstrap/esm/Table.js";

const ProfessorsList = (props) => {
  console.log(props);

  const deleteProfHandler = (id) => {
    props.getProfId(id);
  };

  const renderProfessorsList = props.professors.map((professor) => {
    return (
      <ProfessorCard
      professor={professor}
        clickHander={deleteProfHandler}
        key={professor.id}
      />
    );
  });
  return (
    <div className="lista contianer-fluid">
      <div className="container-fluid listHead">
      <h2>
        Lista de Professores
      </h2>
      <Link to="/addP" className="buttonAdd">
          <button className="button blue right" >Add Professor</button>
        </Link>
      </div>
      <Table responsive bordered striped hover className="table1">{renderProfessorsList}</Table>
    </div>
  );
};

export default ProfessorsList;
