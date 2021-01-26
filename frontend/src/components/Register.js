import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../context/UserContext'
import axios from 'axios'
const Register = () => {
    const [username, setUserName] = useState();
    const [email, setEmaill] = useState();
    const [password, setpasswordd] = useState();
    const [confPassword, setConfPassword] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory()

    const submit = async (e) =>{ 
        e.preventDefault();
        const newUser = {username, email, password, confPassword}
        await axios.post("http://localhost:4000/api/signup", newUser)
        const loginRes = await axios.post("http://localhost:4000/api/signin",{
            email,
            password,
        })
        setUserData({
            //token: loginRes.data.token,
            user: loginRes.data.user
        })
        localStorage.setItem("auth-token", "")
        history.push("/")
    }

    return(
        <div className="row">   
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-header">
                        Account Register
                    </div>
                    <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                name="usernamee" placeholder="UserName"
                                onChange={(e)=> setUserName(e.target.value)}
                                />
                            </div> 
                            <div className="form-group">
                                <input type="email" className="form-control" 
                                name="emaill" placeholder="Email"
                                onChange={(e) => setEmaill(e.target.value)}                               
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" 
                                name="passwordd" placeholder="Password"
                                onChange={(e)=>setpasswordd(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" 
                                name="confirm_passwordd" placeholder="Confirm Password"
                                onChange={(e)=>setConfPassword(e.target.value)}
                                />
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

export default Register;