import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateDocente = () => {

    const [docente, setDocente] = useState([])

    const [materia, setMateria] = useState([])

    const [editing, setEditing] = useState(false)

    

    const [insert, setInsertar] = useState({
        nombres: '',
        apellidos: '',
        ci: '',
        email: '',
        telefono: '',
        materia: ''
    });

    useEffect(() => {
        obtenerDocentes()
        obtenerMaterias()
    }, [])

    const obtenerDocentes = async () => {
        const res = await axios.get('http://localhost:4000/api/docentes')
        const docentes = await res.data
        //console.log(docentes)
        setDocente(docentes)
    }

    const insertarDocente = async () => {
        const res = await axios.post('http://localhost:4000/api/docentes', insert)
        const inserDocente = await res.data
        setInsertar(inserDocente)
    }


    const handleChange = e => {
        const { name, value } = e.target
        setInsertar(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(insert)
    }

    const obtenerMaterias = async () => {
        const res = await axios.get('http://localhost:4000/api/materias')
        const materias = await res.data
        setMateria(materias)
    }

    /*const editarDocente = async()=>{
        const res = await axios.put('http://localhost:4000/api/docentes/'+insert._id, insert)
        var editDoc = res.data
        editDoc.map(doc=>{
            if(insert._id===doc._id){
                doc.nombres=insert.nombres;
                doc.apellidos=insert.apellidos;
            }
        })
        setDocente(editDoc) 
    }*/

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
                                        placeholder="Nombre: "
                                        value="xd"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="apellidos"
                                        className="form-control"
                                        placeholder="Apellido: "
                                        value="xd"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="ci"
                                        className="form-control"
                                        placeholder="C.I.: "
                                        value={insert && insert.ci}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email: "
                                        value={insert && insert.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="telefono"
                                        className="form-control"
                                        placeholder="Telefono: "
                                        value={insert && insert.telefono}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="materia"
                                        className="form-control"
                                        placeholder="Materia: "
                                        value={insert && insert.materia}
                                        onChange={handleChange}
                                        list="materias"
                                    />
                                    <datalist id="materias">
                                        {
                                            materia.map(item => (
                                                <option value={item.name}></option>
                                            ))
                                        }
                                    </datalist>
                                </div>
                                <button onClick={()=>insertarDocente()} className="btn btn-primary w-100">
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
                                            name="materia"
                                            className="form-control"
                                            placeholder="Materia: "
                                            onChange={handleChange}
                                            list="materias"
                                        />
                                        <datalist id="materias">
                                            {
                                                materia.map(item => (
                                                    <option key={item._id} value={item.name}></option>
                                                ))
                                            }
                                        </datalist>
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
                                            <th scope="col">Materia</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.nombres}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.ci}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefono}</td>
                                            <td>{item.materia}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button 
                                        className="btn btn btn-secondary w-100"
                                        onClick={
                                            () =>{setEditing(true)}
                                        }
                                    >Editar
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