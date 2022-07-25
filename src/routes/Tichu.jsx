import React, { useState, useEffect } from 'react';
import io  from "socket.io-client";
import { useParams } from "react-router-dom";

const socket = io();

function Tichu(props) {

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const { roomNumber } = useParams();

    return (
      <div id="tichu" style={{background: 'url("img/background.webp")', backgroundSize: 'cover', height: '100vh'}}>
        {props.user.id}님 어서오세요! #{roomNumber} 티츄 방입니다
      </div>
    );
  }
  
  export default Tichu;