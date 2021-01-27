import React from 'react';

const Horarios = () => {
    return (
        <div>
            <div className="container">
                <div className="row bg-dark p-2">
                    <div className="col-sm">
                        <label className="form-label m-auto text-light">Asignatura - Sigla:</label>
                        <input type="text" className="form-input" list="materias"/>
                        <datalist id="materias">
                            <option value="QWERTY"></option>
                            <option value="PRUEBA"></option>
                        </datalist>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Grupo:</label>
                        <input type="text" className="form-input"/>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light m-auto">Grupo:</label>
                        <input type="text" className="form-input"/>
                    </div>
                    <div className="col-sm-3">
                        <label className="form-label text-light ">Dias:</label>
                        <div className="form-input">
                            <input type="checkbox" className="form-checkbox"/>
                            <label className="form-label text-light">L</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">MA</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">M</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">J</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">V</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">S</label>
                        
                            <input type="checkbox" className="form-checkbox ml-2"/>
                            <label className="form-label text-light">D</label>
                        </div>
                    </div>
                    <div className="col-sm">
                            <label className="form-label text-light">Desde:</label>
                            <label className="form-label text-light ml-3">Hasta:</label>
                            <div className="form-select-container">
                                <select name="" id="">
                                    <option disabled="disabled" value="-1" selected="selected">---</option>
                                    <option value="">07:00</option>
                                    <option value="">08:00</option>
                                </select>   
                                <select name="" id="">
                                    <option disabled="disabled" value="-1" selected="selected">---</option>
                                    <option value="">07:00</option>
                                    <option value="">08:00</option>
                                </select>
                            </div>
                    </div>
                    <div className="col-sm">
                        <label className="form-label text-light">Color:</label>
                        <div className="color-piker theme basic" >

                        </div>
                    </div>
                    </div>
                </div>
                <table class="table table-dark table-striped mt-4">
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