// import React, { useState, useEffect, useRef} from "react";
// import "./GroupChats.css";
// import { IoMdAddCircle, IoIosSend } from "react-icons/io";
// import Group from "../../components/Group/Group";
// import ChatHeader from "../../components/ChatHeader/ChatHeader";

// const GroupChats = () => {
//   const [ws, setWs] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const chatMessagesRef = useRef(null);

//   const userName = localStorage.getItem("userName") || "Anonymous"; 
  
//   // console.log("Current User:", userName); 

  
//   // useEffect(() => {
//   //   const socket = new WebSocket("ws://localhost:4000");
  
//   //   socket.onopen = () => {
//   //     console.log("Connected to WebSocket");
//   //   };
  
//   //   socket.onerror = (error) => {
//   //     console.error("WebSocket Error:", error);
//   //   };
  
//   //   socket.onmessage = (event) => {
//   //     const receivedMessage = JSON.parse(event.data);
//   //     setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//   //   };
  
//   //   socket.onclose = (event) => {
//   //     console.log("WebSocket Disconnected", event.reason);
//   //     setTimeout(() => {
//   //       console.log("Reconnecting...");
//   //       setWs(new WebSocket("ws://localhost:4000")); // ✅ Auto-reconnect
//   //     }, 3000);
//   //   };
  
//   //   setWs(socket);
  
//   //   return () => {
//   //     socket.close();
//   //   };
//   // }, []);
  

//   useEffect(() => {
//     let socket = new WebSocket("ws://localhost:4000");
  
//     socket.onopen = () => {
//       console.log("Connected to WebSocket");
//       setWs(socket);
//     };
  
//     socket.onerror = (error) => {
//       console.error("WebSocket Error:", error);
//     };
  
//     socket.onmessage = async (event) => {
//       if (event.data instanceof Blob) {
//         const text = await event.data.text(); // Convert Blob to string
//         try {
//           const receivedMessage = JSON.parse(text); // Parse the JSON string
//           setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//         } catch (error) {
//           console.error("Error parsing WebSocket message:", error);
//         }
//       } else {
//         try {
//           const receivedMessage = JSON.parse(event.data);
//           setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//         } catch (error) {
//           console.error("Error parsing WebSocket message:", error);
//         }
//       }
//     };
    
  
//     socket.onclose = (event) => {
//       console.log("WebSocket Disconnected", event.reason);
//       setTimeout(() => {
//         console.log("Reconnecting...");
//         setWs(new WebSocket("ws://localhost:4000"));
//       }, 3000);
//     };
  
//     return () => {
//       socket.close();
//     };
//   }, []);
  

//   // const sendMessage = () => {
//   //   if (ws && message.trim()) {
//   //     const chatMessage = { user: userName, text: message };
//   //     ws.send(JSON.stringify(chatMessage)); // Send to WebSocket
//   //     setMessages((prevMessages) => [...prevMessages, chatMessage]); // Show own message
//   //     setMessage(""); // Clear input
//   //   }
//   // };
//   const sendMessage = () => {
//     if (ws && message.trim()) {
//       const chatMessage = { user: userName, text: message };
//       ws.send(JSON.stringify(chatMessage)); // Send to WebSocket
//       setMessage(""); // Clear input
//     }
//   };
  

//   return (
//     <div className="groupsBox">
//       <div className="groups">
//         <div className="groupsHead">
//           <h1>Groups</h1>
//           <i><IoMdAddCircle /></i>
//         </div>

//         <div className="InputContainer">
//           <input placeholder="Search.." id="input" className="input" name="text" type="text" />
//         </div>

//         <Group latestMessage={messages.length > 0 ? messages[messages.length - 1] : null} />

//       </div>

//       <div className="groupChatSpace">
//         <ChatHeader />

//         {/* <div className="chatMessages">
//           {messages.map((msg, index) => (
//             <div key={index} className="message">
//               <strong>{msg.user}:</strong> {msg.text}
//             </div>
//           ))}
//         </div> */}

//         <div className="chatMessages">
//           <div style={{ flexGrow: 1 }}></div>
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.user === userName ? "sent" : "received"}`}>
//               <div className="messageContent">
//                 <strong className="userName">{msg.user}:</strong>
//                 <p className="messageText">{msg.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//         <div className="sendChat">
//           <input
//             type="text"
//             placeholder="Type to Send"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <i onClick={sendMessage}><IoIosSend /></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupChats;




import React, { useState, useEffect, useRef } from "react";
import "./GroupChats.css";
import { IoMdAddCircle, IoIosSend } from "react-icons/io";
import Group from "../../components/Group/Group";
import ChatHeader from "../../components/ChatHeader/ChatHeader";

const GroupChats = () => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatMessagesRef = useRef(null); // Ref for chat container

  const userName = localStorage.getItem("userName") || "Anonymous"; 

  useEffect(() => {
    let socket = new WebSocket("ws://localhost:4000");

    socket.onopen = () => {
      console.log("Connected to WebSocket");
      setWs(socket);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socket.onmessage = async (event) => {
      const text = event.data instanceof Blob ? await event.data.text() : event.data;

      try {
        const receivedMessage = JSON.parse(text);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);

        // Auto-scroll if user is at the bottom
        if (chatMessagesRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = chatMessagesRef.current;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // Check if user is near the bottom

          if (isAtBottom) {
            setTimeout(() => {
              chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
            }, 100);
          }
        }

      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onclose = (event) => {
      console.log("WebSocket Disconnected", event.reason);
      setTimeout(() => {
        console.log("Reconnecting...");
        setWs(new WebSocket("ws://localhost:4000"));
      }, 3000);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && message.trim()) {
      const chatMessage = { user: userName, text: message };
      ws.send(JSON.stringify(chatMessage)); // Send to WebSocket
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

        <div className="InputContainer">
          <input placeholder="Search.." id="input" className="input" name="text" type="text" />
        </div>

        <Group latestMessage={messages.length > 0 ? messages[messages.length - 1] : null} />
      </div>

      <div className="groupChatSpace">
        <ChatHeader />

        {/* Chat Messages Container */}
        <div className="chatMessages" ref={chatMessagesRef}>
          <div style={{ flexGrow: 1 }}></div>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user === userName ? "sent" : "received"}`}>
              <div className="messageContent">
                <strong className="userName">{msg.user}:</strong>
                <p className="messageText">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Send Message Input */}
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
