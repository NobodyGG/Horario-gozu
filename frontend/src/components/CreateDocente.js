import React from 'react'

const CreateDocente = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>CREATE DOCENTE</h3>
                    <form /*onSubmit={this.onSubmit}*/>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre: "
                                //value={this.state.name}
                                //onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido: "
                                //value={this.state.sigla}
                                //onChange={this.onChangeSigla}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="C.I.: "
                                //value={this.state.teacher}
                                //onChange={this.onChangeTeacher}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email: "
                                //value={this.state.grupo}
                                //onChange={this.onChangeGrupo}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateDocente;