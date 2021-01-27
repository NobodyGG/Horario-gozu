import React,{useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../context/UserContext'
import axios from 'axios'

const Login = () =>{

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {setUserData} = useContext(UserContext)
    const history = useHistory()

    const submit = async (e) =>{
        //e.preventDefault()
        const loginUser = {email, password}
        const loginRes = await axios.post('http://localhost:4000/api/signin',loginUser)
        setUserData({
            token: loginRes.data.token,
            //user: loginRes.data.user
        })
        localStorage.setItem('auth-token', loginRes.data.token)
        history.push('/');
    }
    
    

    return(
        <div className="row">
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        Account Login
                    </div>
                    {/*<img src="/logo192.png" className="rounded-circle mx-auto d-block m-4 logo" />*/}
                    <div className="card-body">
                        <form onSubmit={submit} className="form">
                            <div className="form-group">
                                <input type="email" className="form-control" 
                                name="email" placeholder="Email" 
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" 
                                name="password" placeholder="Password" 
                                onChange={(e)=>setPassword(e.target.value)}
                                />
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

export default Login;