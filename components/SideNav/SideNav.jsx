import React from 'react'
import './SideNav.css'
import favicon from '../../images/favicon.png'
import pic from '../../images/pic.png'
// import { Link } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";

const SideNav = () => {
  return (
    <div className='sideNav'>
        {/* <img src={favicon} alt="" className='logo'/> */}
        <h3 className='logo'>
          TalkSphere
        </h3>

        <div className="sideNavLinks">

          <i><IoChatboxEllipsesOutline /></i>
          <i><MdOutlineGroups2 /></i>
          <i><RiRobot3Line /></i>

        </div>

        <div className="sideNavBtn">
            <i><IoMdSettings /></i>
            <img src={pic} alt="" className='profilePic'/>
        </div>
    </div>
  )
}

export default SideNav