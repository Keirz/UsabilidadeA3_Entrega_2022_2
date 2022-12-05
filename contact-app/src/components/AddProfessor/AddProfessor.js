import React from "react";

class AddProfessor extends React.Component {
  state = {
    professorNome: "", 
    profesorSegNome: "", 
    professorCPF :"", 
    professorTitulo:"", 
    professorTurma:"", 
    professorModuloTurma:"" 
  };

  add = (e) => {
    e.preventDefault();
     if (this.state.professorNome === "" ||this.state.professorCPF === "") {
      alert("ALl the fields are mandatory!");
      return;
    } 
    this.props.addProfHandler(this.state);
    this.setState({  professorNome: "", 
    profesorSegNome: "", 
    professorCPF :"", 
    professorTitulo:"", 
    professorTurma:"", 
    professorModuloTurma:""  });
    this.props.history.push("/professores");
  };
  
  render() {
    return (
      <div className="ui main">
        <h2>Add Prof</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="professorNome"
              placeholder="Nome Professor"
              value={this.state.professorNome}
              onChange={(e) => this.setState({ professorNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Sobrenome</label>
            <input
              type="text"
              name="profesorSegNome"
              placeholder="Sobrenome Profesor"
              value={this.state.profesorSegNome}
              onChange={(e) => this.setState({ profesorSegNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>CPF</label>
            <input
              type="text"
              name="professorCPF"
              placeholder="Insira o CPF do Professor"
              value={this.state.professorCPF}
              onChange={(e) => this.setState({ professorCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Título</label>
            <input
              type="text"
              name="professorTitulo"
              placeholder="Insira Titulo do professor"
              value={this.state.professorTitulo}
              onChange={(e) => this.setState({ professorTitulo: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Turma</label>
            <select value={this.state.professorTurma} onChange={(e) => this.setState({ professorTurma: e.target.value })}
             >
              <option></option>
              <option value="Portugues">Portugues</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Ingles">Ingles</option>
              <option value="Matematica">Matematica</option>
             </select>
          </div><div className="field">
            <label>Modulo da Turma</label>
            <select value={this.state.professorModuloTurma} onChange={(e) => this.setState({ professorModuloTurma: e.target.value })}
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

export default AddProfessor;

