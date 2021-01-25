import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import CreateMateria from './components/CreateMateria'
import CreateUser from './components/CreateUser'
import Home from './components/Home'
import Horarios from './components/Horarios'
import signin from './components/signin'
import signup from './components/signup'
import UserContext from './context/UserContext'

function App() {
  return (
    <Router>
      <UserContext.Provider>
        <Navigation/>
        <div className="container p-4">
          <Route path="/users/signin" component={signin}></Route>
          <Route path="/users/signup" component={signup}></Route>
          <Route path="/user/create" component={CreateUser}/>
          <Route path="/materia/create" component={CreateMateria}/>
          {/*<Route path="/edit/:id" component={CreateMateria}/>*/}
          <Route path="/horarios" component={Horarios}></Route>
          <Route path="/" exact component={Home}/>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
