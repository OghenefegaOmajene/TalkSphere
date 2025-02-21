import React from 'react';
import './Group.css';
import gameZone from '../../images/gameZone.jpg';

const truncateToThreeWords = (text) => {
  const words = text.split(" ");
  return words.length > 3 ? words.slice(0, 2).join(" ") + "..." : text;
};

const Group = ({ latestMessage }) => {
  return (
    <div className='group'>
      <img src={gameZone} alt="Group" />

      <div className="groupName">
        <h3>Game Zone</h3>
        <p>
          {latestMessage 
            ? `${latestMessage.user}: ${truncateToThreeWords(latestMessage.text)}` 
            : "No messages yet"}
        </p>
      </div>
    </div>
  );
};

export default Group;
