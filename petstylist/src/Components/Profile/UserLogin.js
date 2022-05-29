import React from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';
import {useState} from 'react';

const UserLogin = () => {

    const Navigate = useNavigate();
    
    const[user, setUser] = useState({
        email: "",
        password: "",
    })

    
const loginChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = { ...user };
    tempUser[name]= value;
   
    setUser(tempUser)
    


}

const loginSubmitHandler = (event) => {
    event.preventDefault()
    axios.post('/login',user)
    .then(
        (response) => {

        localStorage.setItem("loggedInUser", response.data.id)

        Navigate("/Profile")
        
    }).catch((error) => {
    console.log();
    });
}
    return(
        <div className=''>
                <div className=''>
                    <div className='container'>
                        <br />
                        <form>
                            <h2>Please Login</h2>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={user.email} onChange={loginChangeHandler}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={user.password} onChange={loginChangeHandler}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Save Password</label>
                        </div>
                            <button type="button" className="btn btn-primary" id="button"onClick={loginSubmitHandler}> Login</button>
                        </form>
                    </div>
                </div>
             </div>
           

    )
}

export default UserLogin;