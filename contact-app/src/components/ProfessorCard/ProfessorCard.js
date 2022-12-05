
import Table from 'react-bootstrap/Table';
import React,  {useState}  from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ProfessorCard = (props) => {
  const {  id, professorNome, profesorSegNome, professorCPF, professorTitulo, professorTurma, professorModuloTurma } = props.professor;

  return (
    <Link to={{ pathname: `/professor/${id}`, state: { professor: props.professor } }}
    > 
    <Table striped bordered hover>
     <thead>
      <tr>
      <th>#</th>
      <th>Nome Professor</th>
      <th>CPF Professor</th>
      <th>Título Professor</th>
      <th>Turma do Professor</th>
      <th>Módulo da Turma</th>
      </tr>
      </thead>
      <tbody>
        <tr>
     
          <td></td>
          <td>{professorNome} {profesorSegNome}</td>
          <td>{professorCPF}</td>
          <td>{professorTitulo}</td>
          <td>{professorTurma}</td>
          <td>{professorModuloTurma}</td>
          <td><i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/editProf`, state: { professor: props.professor } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link></td>
      
        </tr>
   
    </tbody>
    </Table>
        </Link> 
  );
};

export default ProfessorCard;
