import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
import { useEffect } from 'react';
import { auth,database } from '../Config/Firebase'
import { signOut } from 'firebase/auth';
const Navbar = () => {
  const navigate = useNavigate();
  const state = { clicked: false }
  const [clickBtn, setClickBtn] = useState(false)
  const toggle = () => {
    setClickBtn(!clickBtn);
  }
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        // setUserName(user.displayName);

      if (user) {
        setUserName(user.displayName);
      }
      else {
        setUserName("")
      }
    })
  }, [])
  const SignOutForm = () =>{
    signOut(auth).then(()=>{
      navigate("/");
    })
  }
  return (
    <>
      <div className="header">
        <div>
          <Link to='/' className='logo'>Ad's Shop</Link>
        </div>
        <div className="navLinks">
          <ul className={clickBtn ? "navLinks_ul active_nav" : "navLinks_ul"}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="buttons">
          {!userName&&<>
            <Link to="signup" className='nav-link signupBtn'>Sign up</Link>
            <Link to="login" className='nav-link loginBtn'> Login</Link>
            <i className='fas fa-bars' id='menu_btn' onClick={toggle}></i>
          </>
          }
          {userName&&<>
          <div className="navbar_right">
            <h2 className='username'>{userName} here</h2>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div className="cart_counting_box">3</div>
            <button className='nav-link signoutBtn' onClick={SignOutForm}> Sign Out</button>
            </div>
          </>
          }
        </div>
      </div>
      {/* <h1>Welcome {userName}</h1> */}
    </>
  )
}

export default Navbar;
