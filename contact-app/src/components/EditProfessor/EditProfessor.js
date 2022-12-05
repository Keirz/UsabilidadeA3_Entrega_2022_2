import React from "react";

class EditProfessor extends React.Component {
  constructor(props) {
    super(props);
    const { id, professorNome, profesorSegNome, professorCPF, professorTitulo, professorTurma, professorModuloTurma } = props.location.state.professor;
    this.state = {
      id,
      professorNome,
      profesorSegNome,
      professorCPF,
      professorTitulo, 
      professorTurma, 
      professorModuloTurma 
    };
  }

  update = (e) => {
    e.preventDefault();
     if (this.state.professorNome === "" || this.state.professorCPF === "" || this.state.professorTurma === ""  )
      {
      alert("All the fields are mandatory!");
      return;
    } 
    this.props.updateProfessorsHandler(this.state);
    this.setState({ professorNome: "", profesorSegNome: "", professorCPF: "",  professorTitulo: "", professorTurma: "", professorModuloTurma: ""});
    this.props.history.push("/professores");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Professor</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>professorNome</label>
            <input
              type="text"
              name="professorNome"
              placeholder="professorNome"
              value={this.state.professorNome}
              onChange={(e) => this.setState({ professorNome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>profesorSegNome</label>
            <input
              type="text"
              name="profesorSegNome"
              placeholder="profesorSegNome"
              value={this.state.profesorSegNome}
              onChange={(e) => this.setState({ profesorSegNome: e.target.value })}
            />
          </div>   
          <div className="field">
            <label>professorCPF</label>
            <input
              type="text"
              name="professorCPF"
              placeholder="professorCPF"
              value={this.state.professorCPF}
              onChange={(e) => this.setState({ professorCPF: e.target.value })}
            />
          </div>
          <div className="field">
            <label>professorTitulo</label>
            <input
              type="text"
              name="professorTitulo"
              placeholder="professorTitulo"
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
          
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditProfessor;
