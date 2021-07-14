import React, {useState} from 'react'
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router';
const ChatScreen = () => {
    const { person } = useParams();
    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: 'Grupo X',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
            message: 'Como estas'
        },
        {
            message: 'Previa?'
        },
    ])

    const handleSend = e => {
        e.preventDefault()
        setMessage([...message, {message: input}])
        setInput('')
    }
    
    return (
        <div className="chatScreen">
            <p className="chatScreen__time"> {`you  matched with ${person.toUpperCase()} on${new Date().toLocaleDateString()}`}</p>
            {message.map(item => (
                item.name ? (
                    <div className="chatScreen_message">
                    <Avatar className="chatScreen__image" alt={item} src={item.image}/>
                    <p className="chatScreen__text">{item.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                     <p className="chatScreen__textUser">{item.message}</p>
                    </div>
                )
               
            ))}
            <form className="chatScreen__input">
                <input 
                type="text"
                className="chatScreen__inputField"
                placeholder="Type a messege..."
                value={input}
                onChange={e => setInput(e.target.value) }
                >
                </input>
                <button className="chatScreen__inputButton" onClick={handleSend} type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
