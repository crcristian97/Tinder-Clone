import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';


const Header = ({backButton}) => {
    const history = useHistory()

    return (
        <div className="header">
            { backButton ? (
                <IconButton onClick={() => history.replace(backButton)}> 
                 <ArrowBackIosIcon 
                 fontSize="large" 
                 className="header__icon"
                 />
            </IconButton>
            ) : (
                <IconButton>
                <PersonIcon 
                fontSize="large" 
                className="header__icon"
                />
           </IconButton>
            )}
            
            <Link to ="/">
                 <img className="header__logo" src="data:image/jpeg;base64,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" alt="header"/>
            </Link>
            <Link to="/chat">
            <IconButton>
                 <ForumIcon 
                 fontSize="large" 
                 className="header__icon"
                 />
            </IconButton>
            </Link>
            
        </div>
    )
}

export default Header;
