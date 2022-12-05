import React from "react";

class EditAluno extends React.Component {
  constructor(props) {
    super(props);
    const { id, alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota,nomeTurmaAluno, moduloTurma } = props.location.state.aluno;
    this.state = {
      id,
      alunoNome,
      alunoSegNome, 
      alunoCPF,
      alunoMatricula,
      alunoNota,
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
    this.setState({ alunoNome: "", alunoSegNome: "", alunoCPF: "",  alunoMatricula: "", alunoNota: "", nomeTurmaAluno: "", moduloTurma: "" });
    this.props.history.push("/aluno");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Aluno</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>alunoNome</label>
            <input
              type="text"
              name="alunoNome"
              placeholder="alunoNome"
              value={this.state.alunoNome}
              onChange={(e) => this.setState({ alunoNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>alunoSegNome</label>
            <input
              type="text"
              name="alunoSegNome"
              placeholder="alunoSegNome"
              value={this.state.alunoSegNome}
              onChange={(e) => this.setState({ alunoSegNome: e.target.value })}
            />
          </div>   
          <div className="field">
            <label>alunoCPF</label>
            <input
              type="text"
              name="alunoCPF"
              placeholder="alunoCPF"
              value={this.state.alunoCPF}
              onChange={(e) => this.setState({ alunoCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>alunoMatricula</label>
            <input
              type="text"
              name="alunoMatricula"
              placeholder="alunoMatricula"
              value={this.state.alunoMatricula}
              onChange={(e) => this.setState({ alunoMatricula: e.target.value })}
            />
          </div>
          <div className="field">
            <label>alunoNota</label>
            <input
              type="text"
              name="alunoNota"
              placeholder="alunoNota"
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
          
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditAluno;
