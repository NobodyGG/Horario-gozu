import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
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
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/create">Create User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/materia/create">Create Materia</Link>
                                </li>
                                {/*<li className="nav-item">
                                    <Link className="nav-link" to="/">Materias</Link>
                                </li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/horarios">Horarios</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users/signin">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users/signup">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}
