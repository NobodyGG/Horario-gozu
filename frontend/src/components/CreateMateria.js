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
    onChangeSemestre = (e) => {
        this.setState({
            semestre: e.target.value
        })
    }
    onChangeGrupo = (e) => {
        this.setState({
            grupo: e.target.value
        })
    }
    onChangeDia = (e) => {
        this.setState({
            dia: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/materias', {
            name: this.state.name,
            sigla: this.state.sigla,
            semestre: this.state.semestre,
            grupo: this.state.grupo,
            dia: this.state.dia
        })
        this.setState({
            name: '',
            sigla: '',
            semestre: '',
            grupo: '',
            dia: ''
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
                                    placeholder="Semestre"
                                    value={this.state.semestre}
                                    onChange={this.onChangeSemestre}
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
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dia"
                                    value={this.state.dia}
                                    onChange={this.onChangeDia}
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
                                >
                                    {materias.name}
                                    <table className="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sigla</th>
                                                <th scope="col">Semestre</th>
                                                <th scope="col">Grupo</th>
                                                <th scope="col">Dia</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{materias.sigla}</td>
                                                <td>{materias.semestre}</td>
                                                <td>{materias.grupo}</td>
                                                <td>{materias.dia}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button
                                        className="btn btn btn-secondary w-50"

                                    >Editar
                                </button>
                                    <button
                                        className="btn btn-danger w-50"
                                        onClick={() => this.deleteMateria(materias._id)}
                                    >Eliminar
                                </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
