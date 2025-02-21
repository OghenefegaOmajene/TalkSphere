import React from 'react'
import './Group.css'
import gameZone from '../../images/gameZone.jpg'

const Group = () => {
  return (
    <div className='group'>
        <img src={gameZone} alt="" />

        <div className="groupName">
            <h3>Game Zone</h3>
            <p>Zee: I agree tbh</p>
        </div>
    </div>
  )
}

export default Group