import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Config/Firebase';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMsg("Please Fill all fields");
            return;
        }
        setErrorMsg("");
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccessMsg("Login successfully")
                navigate("/");
            })
            .catch((err) => {
                setErrorMsg(err.meesage);
            });
    }
    return (
        <div>
            <h1 className='signup'>Login</h1>
            {successMsg}
            <form onSubmit={submitForm}>
                <input type="email" placeholder='Enter Your Email' required className='Input' onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <input type="password" placeholder='Enter Your Password' required className='Input' onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <input type="submit" className='submitBtn' />
                <b>{errorMsg}</b>
            </form>
        </div>
    )
}

export default Login

