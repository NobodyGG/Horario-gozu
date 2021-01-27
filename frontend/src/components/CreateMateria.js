import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMateria extends Component {

    state = {
        materias: [],
        name: ''
    }
    async componentDidMount() {
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({ materias: res.data })
        console.log(this.state.materias)
    }
    /*
    getMateriass = async() => {
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({materias: res.data})
    }*/

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onChangeSigla = (e) => {
        this.setState({
            sigla: e.target.value
        })
    }
    onChangeTeacher = (e) => {
        this.setState({
            teacher: e.target.value
        })
    }
    onChangeGrupo = (e) => {
        this.setState({
            grupo: e.target.value
        })
    }
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/materias', {
            name: this.state.name,
            sigla: this.state.sigla,
            teacher: this.state.teacher,
            grupo: this.state.grupo
        })
        this.setState({
            name: '',
            sigla: '',
            teacher: '',
            grupo: ''
        })
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({ materias: res.data })

    }

    deleteMateria = async (id) => {
        await axios.delete('http://localhost:4000/api/materias/' + id)
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({ materias: res.data })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>CREATE MATERIA</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Asignatura"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Sigla"
                                    value={this.state.sigla}
                                    onChange={this.onChangeSigla}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Teacher"
                                    value={this.state.teacher}
                                    onChange={this.onChangeTeacher}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Grupo"
                                    value={this.state.grupo}
                                    onChange={this.onChangeGrupo}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8 p-4">
                    <ul className="list-group list-group-vertical">
                        <li className="list-group-item list-group-item-action" >MATERIAS</li>
                        {
                            this.state.materias.map(materias =>
                                <li
                                    className="list-group-item list-group-item-action"
                                    key={materias._id}
                                    onDoubleClick={() => this.deleteMateria(materias._id)}
                                >
                                    {materias.name}
                                    <table className="table table-dark table-striped">
<<<<<<< HEAD
                                        <thead>
                                            <tr>
                                                <th scope="col">Sigla</th>
                                                <th scope="col">Teacher</th>
                                                <th scope="col">Grupo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>                                                
                                                <td>{materias.sigla}</td>
                                                <td>{materias.teacher}</td>
                                                <td>{materias.grupo}</td>
                                            </tr>
                                        </tbody>
=======
                                    <tbody>
                                        <th>Sigla</th>
                                        <th>Teacher</th>
                                        <th>Grupo</th>
                                    </tbody>
                                    <tbody>
                                        <td>{materias.sigla}</td>
                                        <td>{materias.teacher}</td>
                                        <td>{materias.grupo}</td>
                                    </tbody>
>>>>>>> origin/master
                                    </table>
                                </li>
                            )
                        }
                    </ul>
                </div>
                </div>
        )
    }
}
