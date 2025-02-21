import React from 'react'
import './ChatHeader.css'
import gameZone from '../../images/gameZone.jpg'

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
        <img src={gameZone} alt="" />
        
        <div className="chatName">
            <h3>Game Zone</h3>

            <div className="friends">
                <p>Zee</p>
                <p>Raizel</p>
                <p>Anya</p>
            </div>
           
        </div>
    </div>
  )
}

export default ChatHeader