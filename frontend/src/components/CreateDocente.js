import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateDocente = () => {

    const [docente, setDocente] = useState([])

    const [getdocente, setGetdocente] = useState([])
    
    //const [materia, setMateria] = useState([])

    const [editing, setEditing] = useState(false)
    
    
    

    const [insert, setInsertar] = useState({
        nombres: '',
        apellidos: '',
        ci: '',
        email: '',
        telefono: '',
        horasTrabajo: ''
    });

    
    useEffect(() => {
        obtenerDocentes()
    }, [])

    const handleChange = e => {
        const { name, value } = e.target
        setInsertar(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(insert) 
    }

    const obtenerDocentes = async () => {
        const res = await axios.get('http://localhost:4000/api/docentes')
        const docentes = await res.data
        setDocente(docentes)
        //console.log(docentes)
    }

    //CREAR DOCENTE
    const insertarDocente = async () => {
        const res = await axios.post('http://localhost:4000/api/docentes', insert)
        const inserDocente = await res.data
        setInsertar(inserDocente)
    }

    /*  GET MATERIA
    const obtenerMaterias = async () => {
        const res = await axios.get('http://localhost:4000/api/materias')
        const materias = await res.data
        setMateria(materias)
    }*/

    //ELIMINAR
    const deleteDocente = async (id) =>{
        await axios.delete('http://localhost:4000/api/docentes/'+ id)
        const res = await axios.get('http://localhost:4000/api/docentes');
        setDocente(res.data)
    }
    //OBTENER 1 DOCENTE
    const obtenerDocente = async (id) =>{
        const res = await axios.get('http://localhost:4000/api/docentes/'+ id)
        const docent = await res.data
        setGetdocente(docent)
        
    }

    //EDITAR    
    const cardEditar = () =>{
        setEditing(!editing)
    }

    const selecDocente = (docen) =>{
        setInsertar(docen)
        cardEditar()
    }
    

    const editarDocente = async()=>{        
        const res = await axios.put('http://localhost:4000/api/docentes/'+getdocente._id, insert)
        const editDoc = await res.data
        setInsertar(editDoc)
    }

    

    return (
        <div className="row">
            <div className="col-md-4">
                {
                    editing ? (                        
                        <div className="card card-body">
                            <h3>EDIT DOCENTE</h3>                           
                            <form >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="nombres"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={getdocente && getdocente.nombres}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="apellidos"
                                        className="form-control"                                        
                                        defaultValue={getdocente && getdocente.apellidos}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="ci"
                                        className="form-control"                                        
                                        defaultValue={getdocente && getdocente.ci}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"                                        
                                        defaultValue={getdocente && getdocente.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="telefono"
                                        className="form-control"                                        
                                        defaultValue={getdocente && getdocente.telefono}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="horasTrabajo"
                                        className="form-control"                                        
                                        defaultValue={getdocente && getdocente.horasTrabajo}
                                        onChange={handleChange}
                                    />
                                </div>         
                                <button onClick={()=>editarDocente()} className="btn btn-primary w-100">
                                    Save
                                </button>
                            </form>
                        </div>
                    ) : (
                            <div className="card card-body">
                                <h3>CREATE DOCENTE</h3>
                                <form >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="nombres"
                                            className="form-control"
                                            placeholder="Nombre: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="apellidos"
                                            className="form-control"
                                            placeholder="Apellido: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="ci"
                                            className="form-control"
                                            placeholder="C.I.: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="telefono"
                                            className="form-control"
                                            placeholder="Telefono: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="horasTrabajo"
                                            className="form-control"
                                            placeholder="Horas de Trabajo: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button onClick={()=>insertarDocente()} className="btn btn-primary w-100">
                                        Save
                                    </button>
                                </form>
                            </div>
                        )
                }

            </div>
            <div className="col-md-8 p-4">
                <ul className="list-group list-group-vertical">
                    <li className="list-group-item list-group-item-action" >DOCENTES</li>
                    {
                        docente.map(item => (
                            <li
                                className="list-group-item list-group-item-action"
                                key={item._id}
                            //onDoubleClick={() => this.deleteMateria(materias._id)}
                            >
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombres</th>
                                            <th scope="col">Apellidos</th>
                                            <th scope="col">C.I:</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Horas</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.nombres}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.ci}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefono}</td>
                                            <td>{item.horasTrabajo}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button 
                                        
                                        className="btn btn btn-secondary w-50"
                                        onClick={
                                            () =>{selecDocente(); obtenerDocente(item._id)}
                                        }     
                                    >Editar
                                </button>
                                <button 
                                        
                                        className="btn btn-danger w-50"
                                        onClick={
                                            () =>{deleteDocente(item._id)}
                                        }     
                                    >Eliminar
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>




        </div>
    )
}

export default CreateDocente;