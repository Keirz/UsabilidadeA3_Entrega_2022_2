import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './AddAluno.css';

class AddAluno extends React.Component {
  state = {
    alunoNome: "",
    alunoSegNome: "",
    alunoCPF: "",
    alunoMatricula: "",
    alunoNota1: "",
    alunoNota2: "",
    alunoNota3: "",
    nomeTurmaAluno: "",
    moduloTurma: ""
  };

  add = (e) => {
    e.preventDefault();
     if (this.state.alunoNome === "" ||this.state.alunoCPF === "" || this.state.alunoSegNome || this.state.alunoMatricula) {
      alert("Favor preencher as informações necessárias!");
      return;
    } 
    this.props.addAlunoHandler(this.state);
    this.setState({ alunoNome: "", alunoSegNome: "", alunoCPF: "", alunoMatricula: "", alunoNota1: "",
    alunoNota2: "",
    alunoNota3: "", nomeTurmaAluno: "", moduloTurma: "" });
    this.props.history.push("/aluno");
  };
  
  render() {
    return (
      <div className="ui formMain container-fluid">
        <h2>ADICIONAR ALUNO</h2>
        <form className="ui form container-fluid" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
            required
              type="text"
              name="alunoNome"
              placeholder="Nome Aluno"
              value={this.state.alunoNome}
              onChange={(e) => this.setState({ alunoNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Sobrenome</label>
            <input
            required
              type="text"
              name="alunoSegNome"
              placeholder="Sobrenome Aluno"
              value={this.state.alunoSegNome}
              onChange={(e) => this.setState({ alunoSegNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Matrícula</label>
            <input
            required
              type="number"
              name="alunoMatricula"
              placeholder="Matricula Aluno"
              value={this.state.alunoMatricula}
              onChange={(e) => this.setState({ alunoMatricula: e.target.value })}
            />
          </div>
          <div className="field">
            <label>CPF</label>
            <input
            required
            maxLength={15}
              type="number"
              name="alunoCPF"
              placeholder="Insira o CPF do aluno"
              value={this.state.alunoCPF}
              onChange={(e) => this.setState({ alunoCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Nota Modulo 1</label>
            <input
              type="number"
              name="alunoNota1"
              placeholder="Insira a nota que o aluno tirou no modulo 1"
              value={this.state.alunoNota1}
              onChange={(e) => this.setState({ alunoNota1: e.target.value })}
            />
          </div>  <div className="field">
            <label>Nota Modulo 2</label>
            <input
              type="number"
              name="alunoNota2"
              placeholder="Insira a nota que o aluno tirou no modulo 2"
              value={this.state.alunoNota2}
              onChange={(e) => this.setState({ alunoNota2: e.target.value })}
            />
          </div>  <div className="field">
            <label>Nota Modulo 3</label>
            <input
              type="number"
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
          
          <button className="ui button blue botaoAdd">ADICIONAR</button>
        </form>
      </div>
    );
  }
}

export default AddAluno;

