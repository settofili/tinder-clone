import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function Header() {
    return (
        // BEM 
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.jpg" alt=""/>
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
