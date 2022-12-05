
import Table from 'react-bootstrap/Table';
import React,  {useState}  from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const AlunoCard = (props) => {
  const { id, alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota, nomeTurmaAluno, moduloTurma } = props.aluno;

  return (
    <Link to={{ pathname: `/aluno/${id}`, state: { aluno: props.aluno } }}
    > 
    <Table striped bordered hover>
     <thead>
      <tr>
      <th>#</th>
      <th>Nome Aluno</th>
      <th>No. Matrícula</th>
      <th>CPF Aluno</th>
      <th>Nota</th>
      <th>Turma</th>
      <th>Módulo da Turma</th>
      </tr>
      </thead>
      <tbody>
        <tr>
     
          <td></td>
          <td>{alunoNome} {alunoSegNome}</td>
          <td>{alunoMatricula}</td>
          <td>{alunoCPF}</td>
          <td>{alunoNota}</td>
          <td>{nomeTurmaAluno}</td>
          <td>{moduloTurma}</td>
          <td><i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
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
