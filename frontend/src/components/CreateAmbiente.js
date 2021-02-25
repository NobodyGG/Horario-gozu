import React, { useState, useEffect } from 'react'
import axios from 'axios';



const CreateAmbiente = () => {

    const [ambiente, setAmbiente] = useState([])

    const [editing, setEditing] = useState(false)

    const [insert, setInsertar] = useState({
        nro: '',
        piso: '',
        disponible: ''
    });

    useEffect(() => {
        obtenerAmbientes()
    }, [])

    const handleChange = e => {
        const { name, value } = e.target
        setInsertar(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(insert)
    }

    const obtenerAmbientes = async () => {
        const res = await axios.get('http://localhost:4000/api/ambientes')
        const ambientes = res.data
        setAmbiente(ambientes)
    }

    const insertarAmbiente = async () => {
        const res = await axios.post('http://localhost:4000/api/ambientes', insert)
        const inserAmbiente = await res.data
        setInsertar(inserAmbiente)
    }

    const deleteAmbiente = async (id) => {
        await axios.delete('http://localhost:4000/api/ambientes/' + id)
        const res = await axios.get('http://localhost:4000/api/ambientes');
        setAmbiente(res.data)
    }

    return (
        <div className="row">
            <div className="col-md-4">
                {
                    editing ? (

                        <div className="card card-body">
                            <h3>EDIT AMBIENTE</h3>
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
                                <button className="btn btn-primary w-100">
                                    Save
                                </button>
                            </form>
                        </div>
                    ) : (
                            <div className="card card-body">
                                <h3>CREATE AMBIENTE</h3>
                                <form >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="nro"
                                            className="form-control"
                                            placeholder="Nro ambiente: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="piso"
                                            className="form-control"
                                            placeholder="Nro piso: "
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="disponible"
                                            className="form-control"
                                            placeholder="Disponible: "
                                            onChange={handleChange}
                                            list="fin"
                                        />
                                        <datalist id="fin">
                                            <option >SI</option>
                                            <option >NO</option>
                                        </datalist>
                                    </div>                                    
                                    <button
                                        onClick={() => insertarAmbiente()} className="btn btn-primary w-100">
                                        Save
                                    </button>
                                </form>
                            </div>
                        )
                }

            </div>
            <div className="col-md-8 p-4">
                <ul className="list-group list-group-vertical">
                    <li className="list-group-item list-group-item-action" >AMBIENTES</li>
                    {
                        ambiente.map(item => (
                            <li
                                className="list-group-item list-group-item-action"
                                key={item._id}
                            >
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nro ambiente</th>
                                            <th scope="col">Nro piso</th>
                                            <th scope="col">Disponible</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.nro}</td>
                                            <td>{item.piso}</td>
                                            <td>{item.disponible}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    onClick={() => setEditing(true)}
                                    className="btn btn btn-secondary w-50"
                                >Editar
                                </button>
                                <button
                                    className="btn btn-danger w-50"
                                    onClick={() => deleteAmbiente(item._id)}
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

export default CreateAmbiente;