import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Navigation() {

    const { userData, setUserData } = useContext(UserContext);
    //const history = useHistory();
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        HorariosAPP
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav ml-auto md-auto">
                            {userData.user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/user/create">Create User</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/materia/create">Create Materia</Link>
                                    </li>
                                    {/*<li className="nav-item">
                                    <Link className="nav-link" to="/">Materias</Link>
                                    </li>*/}
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/horarios">Horarios</Link>
                                    </li>
                                </>
                            ) : ("")}

                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {userData.user ? (
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link" to="/">Logout</Link>
                                </li>
                            ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/users/signin">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/users/signup">Register</Link>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
