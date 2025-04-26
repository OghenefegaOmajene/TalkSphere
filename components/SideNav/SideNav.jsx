import React from 'react'
import './SideNav.css'
// import favicon from '../../images/favicon.png'
import logo from '../../images/talksphere.png'
import anya from '../../images/anya.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";

const SideNav = () => {

  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");  // Check if user is logged in

  const handleGroupChatClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/SignUp");  // Redirect to login if not authenticated
    }
  };

  return (
    <div className='sideNav'>
        {/* <img src={favicon} alt="" className='logo'/> */}
        <h3 className='logo'>
          <Link to='/Body'>
            <img src={logo} alt="" className='sidenavlogoimg'/>
          </Link>
        </h3>

        <div className="sideNavLinks">

          <Link to=''>
            <i><IoChatboxEllipsesOutline /></i>
          </Link>
          
          <Link to={isLoggedIn ? "/GroupChats" : "/SignUp"} onClick={handleGroupChatClick}>
            <i><MdOutlineGroups2 /></i>
          </Link>

          <i><RiRobot3Line /></i>

        </div>

        <div className="sideNavBtn">
            <i><IoMdSettings /></i>
            <img src={anya} alt="" className='profilePic'/>
        </div>
    </div>
  )
}

export default SideNav