import React from 'react'
//import logo from './logo192.png'

const signin = () => {

    return (
        <div className="row">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        Account Login
                    </div>
                    {/*<img src="/logo192.png" className="rounded-circle mx-auto d-block m-4 logo" />*/}
                    <div className="card-body">
                        <form action="/users/signin" method="POST">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <button className="btn btn-primary btn-block">
                                Signin
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signin;