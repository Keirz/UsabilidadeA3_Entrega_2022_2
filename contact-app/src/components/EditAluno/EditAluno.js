import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './EditAluno.css'

class EditAluno extends React.Component {
  constructor(props) {
    super(props);
    const { id, alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota1,
      alunoNota2,
      alunoNota3,nomeTurmaAluno, moduloTurma } = props.location.state.aluno;
    this.state = {
      id,
      alunoNome,
      alunoSegNome, 
      alunoCPF,
      alunoMatricula,
      alunoNota1,
      alunoNota2,
      alunoNota3,
      nomeTurmaAluno,
      moduloTurma
    };
  }

  update = (e) => {
    e.preventDefault();
     if (this.state.alunoNome === "" || this.state.alunoMatricula === "" || this.state.alunoCPF === ""  )
      {
      alert("All the fields are mandatory!");
      return;
    } 
    this.props.updateAlunosHandler(this.state);
    this.setState({ alunoNome: "", alunoSegNome: "", alunoCPF: "",  alunoMatricula: "", alunoNota1: "",
    alunoNota2: "",
    alunoNota3: "", nomeTurmaAluno: "", moduloTurma: "" });
    this.props.history.push("/aluno");
  };
  render() {
    return (
      <div className="ui formMain container-fluid">
        <h2>Editar Aluno</h2>
        <form className="ui form container-fluid" onSubmit={this.update}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="alunoNome"
              placeholder="alunoNome"
              value={this.state.alunoNome}
              onChange={(e) => this.setState({ alunoNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Sobrenome</label>
            <input
              type="text"
              name="alunoSegNome"
              placeholder="alunoSegNome"
              value={this.state.alunoSegNome}
              onChange={(e) => this.setState({ alunoSegNome: e.target.value })}
            />
          </div>   
          <div className="field">
            <label>CPF</label>
            <input
              type="text"
              name="alunoCPF"
              placeholder="alunoCPF"
              value={this.state.alunoCPF}
              onChange={(e) => this.setState({ alunoCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Matricula</label>
            <input
              type="text"
              name="alunoMatricula"
              placeholder="alunoMatricula"
              value={this.state.alunoMatricula}
              onChange={(e) => this.setState({ alunoMatricula: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Nota Modulo 1</label>
            <input
              type="text"
              name="alunoNota1"
              placeholder="Insira a nota que o aluno tirou no modulo 1"
              value={this.state.alunoNota1}
              onChange={(e) => this.setState({ alunoNota1: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Nota Modulo 2</label>
            <input
              type="text"
              name="alunoNota2"
              placeholder="Insira a nota que o aluno tirou no modulo 2"
              value={this.state.alunoNota2}
              onChange={(e) => this.setState({ alunoNota2: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Nota Modulo 3</label>
            <input
              type="text"
              name="alunoNota3"
              placeholder="Insira a nota que o aluno tirou no modulo 3"
              value={this.state.alunoNota3}
              onChange={(e) => this.setState({ alunoNota3: e.target.value })}
            />
          </div>
           <div className="field">
            <label>Turma</label>
            <select value={this.state.nomeTurmaAluno} onChange={(e) => this.setState({ nomeTurmaAluno: e.target.value })}
             >
              <option></option>
              <option value="Portugues">Portugues</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Ingles">Ingles</option>
              <option value="Matematica">Matematica</option>
             </select>
          </div><div className="field">
            <label>Modulo da Turma</label>
            <select value={this.state.moduloTurma} onChange={(e) => this.setState({ moduloTurma: e.target.value })}
             >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
             </select>
          </div>
          
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditAluno;
