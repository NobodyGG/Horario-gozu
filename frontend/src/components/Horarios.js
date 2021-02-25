import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Horarios = () => {


    useEffect(() => {
        obtenerDocentes()
        obtenerMaterias()
        obtenerAmbientes()
    }, [])

    const [docente, setDocente] = useState([])
    console.log(docente)
    const [materia, setMateria] = useState([])
    console.log(materia)
    const [ambiente, setAmbiente] = useState([])
    console.log(ambiente)
    const obtenerDocentes = async () => {
        const res = await axios.get('http://localhost:4000/api/docentes')
        const docentes = await res.data
        setDocente(docentes)
    }

    const obtenerMaterias = async () => {
        const res = await axios.get('http://localhost:4000/api/materias')
        const materias = await res.data
        setMateria(materias)
    }

    const obtenerAmbientes = async () => {
        const res = await axios.get('http://localhost:4000/api/ambientes')
        const ambientes = await res.data
        setAmbiente(ambientes)
    }

    //CREAR HORARIO..



    return (
        <div>
            <div className="container">
                <div className="row bg-dark p-2">
                    <div className="col-sm">
                        <Form.Label className="form-label text-light m-auto w-100">SEMESTRE:</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </Form.Control>
                    </div>                    
                    <div className="col-sm">
                        <label className="form-label text-light m-auto w-100">GRUPO:</label>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>                            
                        </Form.Control>
                    </div>
                    <div className="col-sm">                        
                        <Button variant="primary" block>Create</Button>
                    </div>
                </div>

            </div>
            <Table responsive striped bordered hover>
                <thead >
                    <tr>
                        <th>HORAS</th>
                        <th>LUNES</th>
                        <th>MARTES</th>
                        <th>MIERCOLES</th>
                        <th>JUEVES</th>
                        <th>VIERNES</th>
                        <th>SABADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>08:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>09:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>10:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>11:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>12:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>13:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>14:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>15:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>16:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                    <tr>
                        <th>17:00</th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Horarios;


/*
<div className="col-sm">
    <label className="form-label text-light m-auto">Semestre:</label>
    <input type="text" className="form-input" list="semestre" />
    <datalist id="semestre">
        {
            materia.map(item=>(
                 <option key={item._id} value={item.semestre}></option>
            ))
        }
    </datalist>
</div>


*/