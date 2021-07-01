import React from 'react';
import Avatar from "@material-ui/core/Avatar";

function Chat({name, message, profilePic, timetamp}) {
    return <div className="chat"> 
    <Avatar className="chat__image" alt={name} src={profilePic} />
    
    </div>;
}

export default Chat;
