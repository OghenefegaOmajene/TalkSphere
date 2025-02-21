import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FaUserNinja } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.userName); // Store the token

        // Show success toast
        toast.success('🎉 Sign up successful!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        // Delay navigation to allow the toast to be seen
        setTimeout(() => navigate('/GroupChats'), 2000);
      } else {
        setError(data.message || "Sign Up failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className='formBg'>
      <form className="userLoginForm" onSubmit={handleSubmit}>
        <div className="username">
          <label>Username </label>
          <div className="inputForm">
            <i><FaUserNinja /></i>
            <input 
              type="text" 
              className="input" 
              placeholder="Enter your Username" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </div>
        </div>    

        <div className="password">
          <label>Password </label>
          <div className="inputForm">
            <i><IoKeySharp /></i>       
            <input 
              type="password" 
              className="input" 
              placeholder="Enter your Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="s">
          <button type="submit" className="signInBtn">Sign Up</button>
        </div>
        
        <p className="p">
          Already have an account? 
          <span className="loginSpan">
            <a href='/Login'>Login</a>
          </span>
        </p>
      </form>

      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default SignUp;
