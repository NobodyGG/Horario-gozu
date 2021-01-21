import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import CreateMateria from './components/CreateMateria'
import CreateUser from './components/CreateUser'
import MateriasList from './components/MateriasList'

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact component={MateriasList}/>
      <Route path="/edit/:id" component={CreateMateria}/>
      <Route path="/create" component={CreateMateria}/>
      <Route path="/user" component={CreateUser}/>

    </Router>
  );
}

export default App;
