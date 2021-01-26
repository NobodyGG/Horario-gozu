import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import Navigation from './components/Navigation'
import CreateMateria from './components/CreateMateria'
import CreateUser from './components/CreateUser'
import Home from './components/Home'
import Horarios from './components/Horarios'
import signin from './components/signin'
import Register from './components/Register'
import UserContext from './context/UserContext'


function App() {

  const [userData, setUserData]  = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() =>{
    const checkLoggedIn = async() => {
      let token = localStorage.getItem("auth-token")
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = ""
      }
      const tokenRes = await axios.post(
        'http://localhost:4000/api/tokenIsValid', 
        null,
        {headers: {'x-access-token': token}}
      )
      if(tokenRes.data){
        const userRes = await axios.get("http://localhost:4000/api/profile",{
          headers: {"x-access-token": token},
        })
        setUserData({
          token, 
          user: userRes.data,
        })
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{userData, setUserData}}>
        <Navigation/>
        <div className="container p-4">
          <Route path="/users/signin" component={signin}></Route>
          <Route path="/users/signup"><Register/></Route>
          {/*<Route path="/users/signup" component={signup}></Route>*/}
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
