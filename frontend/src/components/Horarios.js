import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Horarios = () => {

    
    useEffect(() => {
        obtenerDocentes()
        obtenerMaterias()
    }, [])

    const [docente, setDocente] = useState([])

    const [materia, setMateria] = useState([])

    const obtenerDocentes = async ()=>{
        const res = await axios.get('http://localhost:4000/api/docentes')
        const docentes = await res.data
        setDocente(docentes)
    }

    const obtenerMaterias = async () =>{
        const res = await axios.get('http://localhost:4000/api/materias')
        const materias = await res.data
        setMateria(materias)
    }


    return (
        <div>
            <div className="container">
                <div className="row bg-dark p-2">
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Docente:</label>
                        <input type="text" className="form-input" list="docente" />                        
                        <datalist id="docente">
                            {
                                docente.map(item=>(
                                    <option key={item._id} value={item.nombres}></option>
                                ))
                            }                            
                        </datalist>
                    </div>
                    <div className="col-sm">
                        <label className="form-label m-auto text-light">Asignatura - Sigla:</label>
                        <input type="text" className="form-input" list="materias" />
                        <datalist id="materias">
                            {
                                materia.map(item=>(
                                    <option key={item._id} >{item.name} - {item.sigla}</option>        
                                ))
                            }                                    
                        </datalist>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Semestre:</label>
                        <input type="text" className="form-input" list="semestre" />
                        <datalist id="semestre">
                            <option value="QWERTY"></option>
                            <option value="PRUEBA"></option>
                        </datalist>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Grupo:</label>
                        <input type="text" className="form-input" list="grupo" />
                        <datalist id="grupo">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                        </datalist>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Ambiente:</label>
                        <input type="text" className="form-input" list="ambiente" />
                        <datalist id="ambiente">
                            <option value="QWERTY"></option>
                            <option value="PRUEBA"></option>
                        </datalist>
                    </div>                    
                </div>
                <div className="row bg-dark p-2">
                    <div className="col-sm">
                        <label className="form-label text-light">Desde:</label>
                        <div className="form-select-container">
                            <select name="" id="">
                                <option disabled="disabled" value="-1" selected="selected">---</option>
                                <option value="0">07:00</option>
                                <option value="1">08:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light ml-3">Hasta:</label>
                        <div className="form-select-container">
                            <select name="" id="">
                                <option disabled="disabled" value="-1" selected="selected">---</option>
                                <option value="0">07:00</option>
                                <option value="1">08:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light">Color:</label>
                        <div className="color-piker theme basic" >

                        </div>
                    </div>
                    <div className="col sm-3">
                        <button className="btn btn-primary">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
            <table className="table table-dark table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">HORAS</th>
                        <th scope="col">LUNES</th>
                        <th scope="col">MARTES</th>
                        <th scope="col">MIERCOLES</th>
                        <th scope="col">JUEVES</th>
                        <th scope="col">VIERNES</th>
                        <th scope="col">SABADO</th>
                        <th scope="col">DOMINGO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">07:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">08:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">09:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">10:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">11:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">12:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">13:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">14:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">15:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">16:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">17:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">18:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">19:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Horarios;