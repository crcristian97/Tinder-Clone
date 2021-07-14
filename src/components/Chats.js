import React from 'react';
import './Chats.css';
import Chat from './Chats'

const Chats = () => {
    return (
        <div className="chats">
            <Chat 
            name="Grupo X"
            message="Somos 8"
            timestamp="40 seconds"
            profilePic="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <Chat 
            name="Grupo A"
            message="Somos 4"
            timestamp="1 hour ago"
            profilePic="https://randomuser.me/api/portraits/men/9.jpg"
            />
            <Chat 
            name="Grupo Z"
            message="Somos 3"
            timestamp="1 week ago"
            profilePic="https://randomuser.me/api/portraits/men/81.jpg"
            />
            <Chat 
            name="Grupo N"
            message="Somos 5"
            timestamp="8 dias ago"
            profilePic="https://randomuser.me/api/portraits/women/76.jpg"
            />
        </div>
    )
}

export default Chats
