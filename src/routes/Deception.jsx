import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import io from "socket.io-client";

let socket;

function Deception(props) {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { roomNumber } = useParams();

  let isSentByCurrentUser = false;
  if(user === )

  const ENDPOINT = "http://localhost:3000";

  useEffect(() => {
    setUser(props.user.id);
    setRoom(roomNumber);
    console.log(user, room);

    socket.io(ENDPOINT);

    socket.emit("join", { user, room }, (error) => {
      console.log(error);
    });
    
  }, [ENDPOINT]);

  useEffect(() => {
    // 메세지 받기
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomUsers", ({users}) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) {
      socket.emit("sendMessage", message, setMessage(""));
    }
  };

  return (
      <div id="deception" style={{background: 'url("img/background.webp")', backgroundSize: 'cover', width: '100%', height: '100%'}}>
        {user}님 어서오세요! #{room} 디셉션 방입니다
        <div style={{width: "300px", height: "600px", border: "2px solid #111"}}>
          <div className="messages" style={{height: "550px"}}>
            {messages.map((message, i) => {
              <div key={i}>
                <p>{user}</p>
                <p>{message}</p>
              </div>
            })}
          </div>
          <form id="form" action="">
            <input id="input" autocomplete="off" onChange={(event) => {
              setMessage(event.target.value);
              }} /><button onClick={ sendMessage }>Send</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Deception;