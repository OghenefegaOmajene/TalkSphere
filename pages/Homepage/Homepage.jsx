import React from 'react'
import talksphere from '../../images/talksphere2.png'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="navbar">

            <div className="navlogo">
                <img src={talksphere} alt="" />
            </div>

            <div className="navlinks">
                <button className='login'>Log In</button>
                <button className='download'>Download</button>
            </div>

        </div>

        <div className="heroSection">
            <h1>Download Talksphere</h1>
            <h2>Connect with anyone around the globe, Talk within your sphere.</h2>
            <h3>Seamless cross-platform collaboration across your devices.</h3>
            <p>By installing Talksphere, you agree to our <a href="">Terms & Privacy Policy.</a></p>
            <button className='download'>Download</button>
        </div>
    </div>
  )
}

export default Homepage