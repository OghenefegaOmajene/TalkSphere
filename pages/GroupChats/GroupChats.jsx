// import React from 'react'
// import './GroupChats.css'
// import { IoMdAddCircle, IoIosSend } from "react-icons/io";
// import Group from '../../components/Group/Group';
// import ChatHeader from '../../components/ChatHeader/ChatHeader';

// const GroupChats = () => {
//   return (
//     <div className='groupsBox'>
//         <div className="groups">
//             <div className="groupsHead">
//                 <h1>Groups</h1>
//                 <i><IoMdAddCircle /></i>
//             </div>
            
//             <Group></Group>
            
//         </div>

//         <div className="groupChatSpace">
//             <ChatHeader></ChatHeader>

//             <div className="sendChat">
//               <input type="text" placeholder='Type to Send'/>
//               <i><IoIosSend /></i>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default GroupChats



import React, { useState, useEffect } from "react";
import "./GroupChats.css";
import { IoMdAddCircle, IoIosSend } from "react-icons/io";
import Group from "../../components/Group/Group";
import ChatHeader from "../../components/ChatHeader/ChatHeader";

const GroupChats = () => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userName = localStorage.getItem("userName") || "Anonymous"; // Get stored username

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");
  
    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };
  
    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
  
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };
  
    socket.onclose = (event) => {
      console.log("WebSocket Disconnected", event.reason);
      setTimeout(() => {
        console.log("Reconnecting...");
        setWs(new WebSocket("ws://localhost:4000")); // ✅ Auto-reconnect
      }, 3000);
    };
  
    setWs(socket);
  
    return () => {
      socket.close();
    };
  }, []);
  

  const sendMessage = () => {
    if (ws && message.trim()) {
      const chatMessage = { user: userName, text: message };
      ws.send(JSON.stringify(chatMessage)); // Send to WebSocket
      setMessages((prevMessages) => [...prevMessages, chatMessage]); // Show own message
      setMessage(""); // Clear input
    }
  };

  return (
    <div className="groupsBox">
      <div className="groups">
        <div className="groupsHead">
          <h1>Groups</h1>
          <i><IoMdAddCircle /></i>
        </div>
        <Group />
      </div>

      <div className="groupChatSpace">
        <ChatHeader />

        <div className="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="sendChat">
          <input
            type="text"
            placeholder="Type to Send"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <i onClick={sendMessage}><IoIosSend /></i>
        </div>
      </div>
    </div>
  );
};

export default GroupChats;
