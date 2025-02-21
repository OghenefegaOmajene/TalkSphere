import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { FaUserNinja } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className='formBg'>
        <form className="userLoginForm">
            <div className="username">
                <label>Username </label>
                <div className="inputForm">
                    <i><FaUserNinja /></i>
                    <input type="text" className="input" placeholder="Enter your Username"/>
                </div>
            </div>    

            <div className="password">
                <label>Password </label>
                <div className="inputForm">
                    <i><IoKeySharp /></i>       
                    <input type="password" className="input" placeholder="Enter your Password"/>
                </div>
            </div>

            <div className="forgotPass">
                <span className="span">Forgot password?</span>
            </div>

            <div className="s">
                <button className="signInBtn">
                    <Link to='/Chats'>Log In</Link>
                </button>
            </div>
            
            <p className="p">
                Don't have an account? 
                <span className="signUpSpan">
                    <Link to='/SignUp'>Sign Up</Link>
                </span>

            </p>

        </form>
    </div>
  )
}

export default Login