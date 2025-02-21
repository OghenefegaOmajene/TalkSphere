// import React from 'react'
// import './SignUp.css'
// import { Link } from 'react-router-dom';
// import { FaUserNinja } from "react-icons/fa";
// import { IoKeySharp } from "react-icons/io5";

// const SignUp = () => {
//   return (
//     <div className='formBg'>
//         <form className="userLoginForm">
//             <div className="username">
//                 <label>Username </label>
//                 <div className="inputForm">
//                     <i><FaUserNinja /></i>
//                     <input type="text" className="input" placeholder="Enter your Username" required/>
//                 </div>
//             </div>    

//             <div className="password">
//                 <label>Password </label>
//                 <div className="inputForm">
//                     <i><IoKeySharp /></i>       
//                     <input type="password" className="input" placeholder="Enter your Password" required/>
//                 </div>
//             </div>

//             <div className="s">
//                 <button className="signInBtn">
//                     <Link to='/Chats'>Sign Up</Link>
//                 </button>
//             </div>
            
//             <p className="p">Already have an account? 
//                 <span className="loginSpan">
//                     <Link to='/Login'>Login</Link>
//                 </span>

//             </p>
//         </form>
//     </div>
//   )
// }

// export default SignUp



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FaUserNinja } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        navigate('/GroupChats'); // Redirect on success
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed");
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
    </div>
  );
};

export default SignUp;
