// src/ChatScreen.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, onValue, push } from 'firebase/database';
import { database } from './Firebase-config';
import "./style.css"
const Chat = () => {
  const { uid1, uid2 } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const chatRoomId = generateHash(uid1, uid2);
    const chatRef = ref(database, `chats/${chatRoomId}/messages`);

    // Check if the chat room exists
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // Chat room exists, fetch messages
        setMessages(Object.values(data));
      } else {
        // Chat room does not exist, create a new chat room
        // Optionally, you can set an initial message for a new chat room
        // For demonstration, we'll add a welcome message
        const welcomeMessage = {
          text: 'Welcome to the chat!',
          timestamp: Date.now(),
          sender: 'system', // You can use a system user for special messages
        };

        // Push the welcome message to the new chat room
        push(chatRef, welcomeMessage);

        // Set the initial message in the state
        setMessages([welcomeMessage]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      // Detach the listener
    };
  }, [uid1, uid2]);


  const generateHash = (str1, str2) => {
    let room_id = str1 > str2 ? `${str1}_${str2}` : `${str2}_${str1}`;
    return room_id;
  };

  const sendMessage = () => {

    const chatRoomId = generateHash(uid1, uid2);
    const chatRef = ref(database, `chats/${chatRoomId}/messages`);
    console.log(chatRoomId, chatRef);
    // Simulate sending a message to Firebase Realtime Database
    const newMessageObject = {
      sender: uid1, // or the UID of the current user
      text: newMessage,
      timestamp: Date.now(),
    };

    // Push the new message to the chat room
    push(chatRef, newMessageObject);

    // Update the state with the new message
    setMessages([...messages, newMessageObject]);

    // Clear the input field
    setNewMessage('');
  };

  const handleBackButtonClick = () => {
    // Redirect back to the dashboard
    history('/dashboard');
  };

  return (
    <div className="chat-screen">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back to Dashboard
      </button>
      <div className="messages-container">
        <h1>user name:{uid1}</h1>
        {messages.map((message) => (
          <div
            key={message.timestamp}
            className={`message ${message.sender === uid1 ? 'sent' : 'received'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          rows="2"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

// // src/ChatScreen.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './style.css';

// const ChatScreen = () => {
//   const { uid1, uid2 } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const history = useNavigate();
//   useEffect(() => {
//     const mockMessages = [
//       { id: '1', sender: uid1, text: 'Hello!', timestamp: 1648435200000 },
//       { id: '2', sender: uid2, text: 'Hi there!', timestamp: 1648435300000 },
//     ];

//     setMessages(mockMessages);
//   }, [uid1, uid2]);

//   const sendMessage = () => {
//     // Simulate sending a message to Firebase Realtime Database
//     const newMessageObject = {
//       id: String(messages.length + 1),
//       sender: uid1, // or the UID of the current user
//       text: newMessage,
//       timestamp: Date.now(),
//     };

//     setMessages([...messages, newMessageObject]);
//     setNewMessage('');
//   };
//   const handleBackButtonClick = () => {
//     history('/dashboard');
//   };
//   return (
//     <div className="chat-screen">

//       <button className="back-button" onClick={handleBackButtonClick}>
//         Back to Dashboard
//       </button>
//       <div className="messages-container">
//         {messages.map((message) => (
//           <div key={message.id} className={`message ${message.sender === uid1 ? 'sent' : 'received'}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <textarea
//           rows="2"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatScreen;
