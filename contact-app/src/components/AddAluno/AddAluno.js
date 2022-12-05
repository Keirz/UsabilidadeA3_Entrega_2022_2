import React from "react";

class AddAluno extends React.Component {
  state = {
    alunoNome: "",
    alunoSegNome: "",
    alunoCPF: "",
    alunoMatricula: "",
    alunoNota: "",
    nomeTurmaAluno: "",
    moduloTurma: ""
  };

  add = (e) => {
    e.preventDefault();
     if (this.state.alunoNome === "" ||this.state.alunoCPF === "") {
      alert("ALl the fields are mandatory!");
      return;
    } 
    this.props.addAlunoHandler(this.state);
    this.setState({ alunoNome: "", alunoSegNome: "", alunoCPF: "", alunoMatricula: "", alunoNota: "", nomeTurmaAluno: "", moduloTurma: "" });
    this.props.history.push("/aluno");
  };
  
  render() {
    return (
      <div className="ui main">
        <h2>Add Aluno</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
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
              type="text"
              name="alunoMatricula"
              placeholder="Matricula Aluno"
              value={this.state.alunoMatricula}
              onChange={(e) => this.setState({ alunoMatricula: e.target.value })}
            />
          </div>
          <div className="field">
            <label>CPF</label>
            <input
              type="text"
              name="alunoCPF"
              placeholder="Insira o CPF do aluno"
              value={this.state.alunoCPF}
              onChange={(e) => this.setState({ alunoCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Nota</label>
            <input
              type="text"
              name="alunoNota"
              placeholder="Insira a nota que o aluno tirou"
              value={this.state.alunoNota}
              onChange={(e) => this.setState({ alunoNota: e.target.value })}
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
          
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddAluno;

