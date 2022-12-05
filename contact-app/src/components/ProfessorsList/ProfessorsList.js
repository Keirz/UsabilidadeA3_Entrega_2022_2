import React from "react";
import { Link } from "react-router-dom";
import ProfessorCard from "../ProfessorCard/ProfessorCard.js";

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
    <div className="main">
      <h2>
        Professors List
        <Link to="/addP">
          <button className="ui button blue right">Add Prof</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderProfessorsList}</div>
    </div>
  );
};

export default ProfessorsList;
