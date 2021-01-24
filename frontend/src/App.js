import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import CreateMateria from './components/CreateMateria'
import CreateUser from './components/CreateUser'
import MateriasList from './components/MateriasList'
import Horarios from './components/Horarios'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/create" component={CreateMateria}/>
        <Route path="/edit/:id" component={CreateMateria}/>
        <Route path="/" exact component={MateriasList}/>
        <Route path="/user" component={CreateUser}/>
        <Route path="/horarios" component={Horarios}></Route>
      </div>
      
    </Router>
  );
}

export default App;
