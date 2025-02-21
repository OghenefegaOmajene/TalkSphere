import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
import phone1 from '../../images/phone1.png'
import phone2 from '../../images/phone2.png'

const Body = () => {
  return (
    <div className='body'>
        <h1>Build Your Own Space, Chat Your Way.</h1>

        <div className="imgBox">
            <img src={phone1} alt="" className='phone1'/>
            {/* <img src={phone2} alt="" className='phone2'/> */}
        </div>

        <button className='signIn'>
          <Link to='/SignUp'>
            <b><i>Sign up to start chatting!</i></b>
          </Link>
        </button>
    </div>
  )
}

export default Body