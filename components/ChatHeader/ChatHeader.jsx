// import React from 'react'
// import './ChatHeader.css'
// import gameZone from '../../images/gameZone.jpg'
// import { BsThreeDotsVertical } from "react-icons/bs";

// const ChatHeader = () => {
//   return (
//     <div className='chatHeader'>
//         <img src={gameZone} alt="" />
        
//         <div className="chatName">
//             <h3>Game Zone</h3>

//             <div className="friends">
//                 <p>Zee</p>
//                 <p>Raizel</p>
//                 <p>Anya</p>
//             </div>
//         </div>

//         <div className="chatHeadIcon">
//             <BsThreeDotsVertical />
//         </div>
//     </div>
//   )
// }

// export default ChatHeader

import React, { useEffect, useState } from 'react';
import './ChatHeader.css';
import gameZone from '../../images/gameZone.jpg';
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatHeader = ({ ws }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "onlineUsers") {
        setOnlineUsers(data.users);
      }
    };
  }, [ws]);

  return (
    <div className='chatHeader'>
      <img src={gameZone} alt="Game Zone" />

      <div className="chatName">
        <h3>Game Zone</h3>

        <div className="friends">
          {onlineUsers.length > 0 ? (
            onlineUsers.map((user, index) => <p key={index}>{user}</p>)
          ) : (
            <p>No users online</p>
          )}
        </div>
      </div>

      <div className="chatHeadIcon">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ChatHeader;
