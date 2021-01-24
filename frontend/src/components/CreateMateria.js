import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMateria extends Component {
    
    state = {
        materias: [],
        name: ''
    }
    async componentDidMount(){
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({materias: res.data})
        console.log(this.state.materias)
    }
    /*
    getMateriass = async() => {
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({materias: res.data})
    }*/

    onChangeName = (e) =>{
        this.setState({
            name: e.target.value 
        })
    }
    
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/materias', {
            name: this.state.name 
        })
        this.setState({name: ''})
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({materias: res.data})
        
    }

    deleteMateria = async(id) => {
        await axios.delete('http://localhost:4000/api/materias/' + id)
        //this.getMaterias();
        const res = await axios.get('http://localhost:4000/api/materias');
        this.setState({materias: res.data})
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
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                        </form>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
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
                                    <table class="table table-dark table-striped">
                                    <tr>
                                        <td>Sigla</td>
                                        <td>Teacher</td>
                                        <td>Grupo</td>
                                    </tr>
                                    <tr>
                                        <td>{materias.sigla}</td>
                                        <td>{materias.teacher}</td>
                                        <td>{materias.grupo}</td>
                                    </tr>
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
