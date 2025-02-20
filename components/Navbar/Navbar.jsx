import React from 'react'
import './Navbar.css'
import favicon from '../../images/favicon.png'
import cat from '../../images/cat.jpg'
// import { Link } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={favicon} alt="" className='logo'/>

        <div className="navLinks">

          <a href="">Chats</a>
          <a href="">Contacts</a>
          <a href="">FAQS</a>

            {/* <Link to=''>Chats</Link>
            <Link to=''>Contacts</Link>
            <Link to=''>FAQS</Link> */}
        </div>

        <div className="navBtn">
            <i><IoMdSettings /></i>
            <i><IoMdNotifications /></i>

            <img src={cat} alt="" className='profilePic'/>
        </div>
    </div>
  )
}

export default Navbar