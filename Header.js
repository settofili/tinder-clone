import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function Header() {
    return (
        // BEM 
        <div className="header">
            
            <Link to="/profile">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
           
           <Link to="/">
            <img 
                className="header__logo"
                src="https://i.imgur.com/sdVXJXS.jpg" alt=""/>
            </Link>
            
            <Link to= "/chat">
                <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header
