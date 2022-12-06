

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React,  {useState}  from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import './AlunoCard.css'

const AlunoCard = (props) => {
  const { id, alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota1,
    alunoNota2,
    alunoNota3, nomeTurmaAluno, moduloTurma } = props.aluno;

  return (
    <Link to={{ pathname: `/aluno/${id}`, state: { aluno: props.aluno } }}
    > 
    <Table striped bordered responsive hover className='table1'>
     <thead>
      <tr>
      <th>#</th>
      <th>Nome Aluno</th>
      <th>No. Matrícula</th>
      <th>CPF Aluno</th>
      <th>Nota Modulo 1</th>
      
      <th>Nota Modulo 2</th>
      
      <th>Nota Modulo 3</th>
      <th>Turma</th>
      <th>Módulo da Turma</th>
      <th>Controles</th>
      </tr>
      </thead>
      <tbody>
        <tr>
     
          <td>{id}</td>
          <td>{alunoNome} {alunoSegNome}</td>
          <td>{alunoMatricula}</td>
          <td>{alunoCPF}</td>
          <td >{alunoNota1}</td>
          <td >{alunoNota2}</td>
          <td >{alunoNota3}</td>
          <td>{nomeTurmaAluno}</td>
          <td>{moduloTurma}</td>
          <td><i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px", marginRight: "25%", marginBottom: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { aluno: props.aluno } }}>
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

export default AlunoCard;
