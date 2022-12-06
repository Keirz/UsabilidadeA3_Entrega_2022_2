import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  v4 } from "uuid";
import api from "../api/alunos";
import api2 from "../api/professors";
import "./App.css";
import Header from "./Header/Header.js";
import AddAluno from "./AddAluno/AddAluno.js";
import AlunoList from "./AlunoList/AlunoList.js";
import AlunoDetail from "./AlunoDetail/AlunoDetail.js";
import EditAluno from "./EditAluno/EditAluno.js";
import ProfessorsList from "./ProfessorsList/ProfessorsList";
import AddProfessor from "./AddProfessor/AddProfessor";
import ProfessorDetail from "./ProfessorDetail/ProfessorDetail";
import EditProfessor from "./EditProfessor/EditProfessor";
import Home from './Home/Home.js';
import FooterPage from "./FooterPage/FooterPage";

function App() {/* 
  const LOCAL_STORAGE_KEY = "alunos"; *//* 
  const LOCAL_STORAGE_KEY_2 = "professors"; */
  
  const [professors, setProfessors] = useState([]);
  const [alunos, setAlunos] = useState([]);
 

   
  //Retrieve professores
  const retrieveProfessors = async () => {
    const response = await api2.get("/professors");
    return response.data;
  };

  const addProfHandler = async (professor) => {
    console.log(professor);
    const request = {
      profId: v4(),
      ...professor,
    };
    const response = await api2.post("/professors", request);
    console.log(response);
    setProfessors([...professors, response.data]);
  };

  const updateProfessorsHandler = async (professor) => {
    const response = await api2.put(`/professors/${professor.id}`, professor);
    const {  id, professorNome, profesorSegNome, professorCPF, professorTitulo, professorTurma, professorModuloTurma } = response.data;
    setProfessors(
      professors.map((professor) => {
        return professor.id === id ? { ...response.data } : professor;
      })
    );
  };
  
  const removeProfHandler = async (id) => {
    await api2.delete(`/professores/${id}`);
    const newProfessorsList = professors.filter((professor) => {
      return professor.id !== id;
    });    
    setProfessors(newProfessorsList);
  };
   //Retrieve Alunos
   const retrieveAlunos = async () => {
    const response = await api.get("/alunos");
    return response.data;
  };
  const addAlunoHandler = async (aluno) => {
    console.log(aluno);
    const request = {
      id: v4(),
      ...aluno,
    };

    const response = await api.post("/alunos", request);
    console.log(response);
    setAlunos([...alunos, response.data]);
  };

  const updateAlunosHandler = async (aluno) => {
    const response = await api.put(`/alunos/${aluno.id}`, aluno);
    const { id, alunoNome, alunoSegNome, alunoCPF, alunoMatricula, alunoNota1,
    alunoNota2,
    alunoNota3, nomeTurmaAluno, moduloTurma } = response.data;
    setAlunos(
      alunos.map((aluno) => {
        return aluno.id === id ? { ...response.data } : aluno;
      })
    );
  };

  const removeAlunoHandler = async (id) => {
    await api.delete(`/alunos/${id}`);
    const newAlunoList = alunos.filter((aluno) => {
      return aluno.id !== id;
    });

    setAlunos(newAlunoList);
  };
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllProfs = async () => {
      const allProfessors = await retrieveProfessors();
      if (allProfessors) setProfessors(allProfessors);
    };

    getAllProfs();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [professors]);

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllAlunos = async () => {
      const allAlunos = await retrieveAlunos();
      if (allAlunos) setAlunos(allAlunos);
    };

    getAllAlunos();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [alunos]);




  return (
    <div className="ui container-fluid pageColor">
      <Router>
        <Header />
        <Switch>
        <Route
        path="/"
        exact
        render={ ()=> (
          <div>
          <Home />
          
      <FooterPage />
      </div>
        )
        }/>

       
      
          <Route
            path="/aluno"
            
            render={(props) => (
             
              <AlunoList
                {...props}
                alunos={alunos}
                getAlunosId={removeAlunoHandler} 
              />

            )}
          />
          <Route
          path="/professores"
          
          render={(props) => (       
          <ProfessorsList
            {...props}
            professors={professors}
            
            getProfId={removeProfHandler} />
          )} />
           
          <Route
            path="/addA"
            render={(props) => (
              <AddAluno {...props} addAlunoHandler={addAlunoHandler} />
            )}
          />
          <Route 
          path='/addP'
          render={(props)=>(
            <AddProfessor {...props} addProfHandler={addProfHandler} />
          )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditAluno
                {...props}
                updateAlunosHandler={updateAlunosHandler} />
            )}
          />
          <Route 
          path="/editProf"
          render={(professors) => (
            <EditProfessor 
            {...professors}
            updateProfessorsHandler={updateProfessorsHandler} />
          )}
            />
          <Route path="/aluno/:alunoCPF" component={AlunoDetail} />
          
          <Route path="/professor/:professorCPF" component={ProfessorDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
