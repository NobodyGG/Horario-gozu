import React from 'react'

const signup = () => {
    return(
        <div className="row">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        Account Register
                    </div>
                    <div className="card-body">
                        <form action="/users/signup" method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="UserName"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password"/>
                            </div>
                            <button className="btn btn-primary btn-block">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;