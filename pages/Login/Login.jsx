// import React from 'react'
// import './Login.css'
// import { Link } from 'react-router-dom';
// import { FaUserNinja } from "react-icons/fa";
// import { IoKeySharp } from "react-icons/io5";
// import { FaGoogle } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

// const Login = () => {
//   return (
//     <div className='formBg'>
//         <form className="userLoginForm">
//             <div className="username">
//                 <label>Username </label>
//                 <div className="inputForm">
//                     <i><FaUserNinja /></i>
//                     <input type="text" className="input" placeholder="Enter your Username"/>
//                 </div>
//             </div>    

//             <div className="password">
//                 <label>Password </label>
//                 <div className="inputForm">
//                     <i><IoKeySharp /></i>       
//                     <input type="password" className="input" placeholder="Enter your Password"/>
//                 </div>
//             </div>

//             <div className="forgotPass">
//                 <span className="span">Forgot password?</span>
//             </div>

//             <div className="s">
//                 <button className="signInBtn">
//                     <Link to='/Chats'>Log In</Link>
//                 </button>
//             </div>
            
//             <p className="p">
//                 Don't have an account? 
//                 <span className="signUpSpan">
//                     <Link to='/SignUp'>Sign Up</Link>
//                 </span>

//             </p>

//         </form>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUserNinja, FaGoogle, FaApple } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });
  

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store the token
        toast.success('🎉 Logged In successfully!', {
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
        // const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className='formBg'>
      <form className="userLoginForm" onSubmit={handleLogin}>
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

        <div className="forgotPass">
          <span className="span">Forgot password?</span>
        </div>

        <div className="s">
          <button type="submit" className="signInBtn">Log In</button>
        </div>
        
        <p className="p">
          Don't have an account? 
          <span className="signUpSpan">
            <a href='/SignUp'>Sign Up</a>
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

export default Login;
