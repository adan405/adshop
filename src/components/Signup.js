import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../Config/Firebase';
import { Link } from 'react-router-dom';
import './signup.css'
const Signup = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (!fullname || !email || !password) {
            setErrorMsg("Please Fill all fields");
            return;
        }
        setErrorMsg("");
        // console.log(fullname,email,password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(res) => {
                // console.log(res);
                setSuccessMsg("User sign up successfully")
                const user = res.user;
                await updateProfile(user,{
                    displayName:fullname,
                })
                navigate("/login");
            })
            .catch((err) => {
                setErrorMsg(err.meesage);
            });
    }
    return (
        <div>
            <h1 className='signup'>sign up</h1>
            {successMsg}
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Enter Your Name' required className='Input' onChange={(e) => setFullName(e.target.value)} value={fullname} /><br />
                <input type="email" placeholder='Enter Your Email' required className='Input' onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <input type="password" placeholder='Enter Your Password' required className='Input' onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <input type="submit" className='submitBtn' />
                <b>{errorMsg}</b>
            </form>
        </div>
    )
}

export default Signup
