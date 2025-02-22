import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
import phone1 from '../../images/phone1.png'
import greenphone from '../../images/greenphone.png'

const Body = () => {
  return (
    <div className='body'>
        <h1 className='welcomeTxt'>Build Your Own Space, Chat Your Way.</h1>

        <div className="imgBox">
            <img src={greenphone} alt="" className='phone1'/>
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