import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signFunc } from '../../store/action/userAction'
function Sign() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const { isAuthenticated, user } = useSelector(state => state.userReducer)
    const [signData, setSignData] = useState({
        name: "",
        email: "",
        password: "",
    })
    let setField = (e, propname) => {
        setSignData({ ...signData, [propname]: e })
    }
    let signup = (e) => {
        e.preventDefault();
        dispatch(signFunc(signData.name, signData.email, signData.password,navigate))
    }
    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigate("/account")
            alert("Already Signed")
        } else {
            navigate("/signup")
        }
    }, [])

    return (
        <div className="logSignContainer">
            <div className="logSignToggle">
                <h3>Register</h3>
            </div>
            <form className="loginForm">
                <div className="loginName">
                    <input type="text" placeholder="Name" required value={signData.name} onChange={(e) => setField(e.target.value, "name")} />
                </div>
                <div className="loginEmail">
                    <input type="email" placeholder="Email" required value={signData.email} onChange={(e) => setField(e.target.value, "email")} />
                </div>
                <div className="loginPassword">
                    <input type="password" placeholder="Password" required value={signData.password} onChange={(e) => setField(e.target.value, "password")} />
                </div>
                {/* <div style={{display:'flex',alignItems:'center'}} className="register-Image">
                    <img style={{width:30,height:30,display:'flex'}} src={avatarPreview} alt="avatar" />
                    <input type="file" name="avatar" accept='image/' onChange={(e)=>setField(e)}/>
                </div> */}
                <div>
                    <button type="submit" onClick={(e) => signup(e)}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default Sign