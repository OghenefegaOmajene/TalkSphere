import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import { FaUserNinja } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";

const SignUp = () => {
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

            <div className="s">
                <button className="signInBtn">
                    <Link to='/Chats'>Sign Up</Link>
                </button>
            </div>
            
            <p className="p">Already have an account? 
                <span className="loginSpan">
                    <Link to='/Login'>Login</Link>
                </span>

            </p>
        </form>
    </div>
  )
}

export default SignUp