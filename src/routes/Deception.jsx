import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import io from "socket.io-client";

let socket;

function Deception(props) {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{name: "ju", message: "hi"}, {name: "ju", message: "hello"}]);
  const { roomNumber } = useParams();

  // let isSentByCurrentUser = false;
  // if(user === )

  const ENDPOINT = "http://localhost:3000";

  useEffect(() => {
    setUser(props.user.id);
    setRoom(roomNumber);
    console.log(user, room);

    // socket.io(ENDPOINT);

    // socket.emit("join", { user, room }, (error) => {
    //   console.log(error);
    // });
    
  }, []);

  // useEffect(() => {
  //   // 메세지 받기
  //   socket.on("message", (message) => {
  //     setMessages([...messages, message]);
  //   });

  //   socket.on("roomUsers", ({users}) => {
  //     setUsers(users);
  //   });
  // }, [messages]);

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if(message) {
  //     socket.emit("sendMessage", message, setMessage(""));
  //   }
  // };

  const Disconnect = () => {
    socket.emit("disconnect", (user) => {
      console.log('user disconnected');
    })
  }

  return (
      <div id="deception" style={{background: 'url("img/background.webp")', backgroundSize: 'cover', width: '100%', height: '100%'}}>
        {user}님 어서오세요! #{room} 디셉션 방입니다
        <button onClick={Disconnect}><Link to="/mainpage">나가기</Link></button>
        <div style={{width: "300px", height: "600px", border: "2px solid #111"}}>
          <div style={{backgroundColor: "#eee"}}>Room : {room}</div>
          <div className="messages" style={{width: "290px", height: "540px", border: "1px solid #111"}}>
            {messages.map((message, i) => (
              <div key={i} >
                <div>{message.name} : {message.message}</div>
              </div>
            ))}
          </div>
          <input type="text" placeholder="메세지를 입력하세요" onChange={(e)=>setMessage({name: user, message: e.target.value})} />
          <button onClick={(e)=>{
            e.preventDefault();
            console.log(message);
            setMessages([...messages, message]);
            // sendMessage({name: user, message: e.target.value})
          }}>send</button>
          {/* <form id="form" action="">
            <input id="input" autocomplete="off" onChange={(event) => {
              setMessage(event.target.value);
              }} /><button >Send</button>
          </form> */}
        </div>
      </div>
    );
  }
  
  export default Deception;