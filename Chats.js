//import { Chat } from '@material-ui/icons';
import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return ( 
        <div className="chats">
            <Chat
            name="Sarah"
            message="YO whats up"
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
            />
            <Chat
            name="Ellen"
            message="YO whats up"
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat
            name="Sandra"
            message="YO whats up"
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat
            name="Natasha"
            message="YO whats up"
            timestamp="40 seconds ago"
            profilePic="..."
            />
        </div>
        )
};

export default Chats;
