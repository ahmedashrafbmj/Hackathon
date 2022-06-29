import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logFunc } from "../../store/action/userAction";
import { useNavigate } from 'react-router-dom'
import './user.css'

function Login() {
    const dispatch = useDispatch()
    let navigate= useNavigate()
    const {isAuthenticated} = useSelector(state => state.userReducer)
    const [logData, setLogData] = useState({
        email: "",
        password: ""
    })
    let setField = (e, propname) => {
        setLogData({ ...logData, [propname]: e })
    }
    let login = (e) => {
        e.preventDefault();
        dispatch(logFunc(logData.email, logData.password,navigate))
    }
    useEffect(()=>{
        if(localStorage.getItem('login')){
            alert("Already Logged In")
            navigate("/account")
        }else{
            navigate("/login")
        }
    },[])
    return (
        <div className="logSignContainer">
                <h3>Login</h3>
                <form className="loginForm">
                        <input type="email" placeholder="Email" required value={logData.email} onChange={(e) => setField(e.target.value, "email")} />
                        <input type="password" placeholder="Password" required value={logData.password} onChange={(e) => setField(e.target.value, "password")} />
                        <button type="submit" onClick={(e) => login(e)}>Login</button>
                </form>
        </div >
    )
}
export default Login