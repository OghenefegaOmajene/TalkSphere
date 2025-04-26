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

    </div>
  )
}

export default Homepage