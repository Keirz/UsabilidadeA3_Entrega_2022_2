

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React,  {useState}  from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import './ProfessorCard.css'

const ProfessorCard = (props) => {
  const {  id, professorNome, profesorSegNome, professorCPF, professorTitulo, professorTurma, professorModuloTurma } = props.professor;

  return (
    <Link to={{ pathname: `/professor/${id}`, state: { professor: props.professor } }}
    > 
    <Table striped bordered responsive hover className='table1'>
     <thead>
      <tr>
      <th>Id#</th>
      <th>Nome Professor</th>
      <th>CPF Professor</th>
      <th>Título Professor</th>
      <th>Turma do Professor</th>
      <th>Módulo da Turma</th>
      <th>Controles</th>
      </tr>
      </thead>
      <tbody>
        <tr>
     
          <td>{id}</td>
          <td>{professorNome} {profesorSegNome}</td>
          <td>{professorCPF}</td>
          <td>{professorTitulo}</td>
          <td>{professorTurma}</td>
          <td>{professorModuloTurma}</td>
          <td><i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px", marginRight: "25%", marginBottom: "7px" }}
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
