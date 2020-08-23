import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
    const { homePage, disableButtons } = props;
    const history = useHistory();

    return (
        <div class={`${homePage ? 'logo-trigger' : ''}`}>
        <div class='navBar' homePage={true}>
            <div class='logo' onClick={() => history.push('/')}>
                <h1 style={{fontSize:'90px', marginBottom:'0px'}}> Nasta </h1>
            </div>
            {disableButtons ? 
            <div /> :
            <div>
                <a href="/register-restaurant">
                    <button id='reg-partner'> For Restaurants </button>
                </a>
                <a href="/login">
                    <button id='sign-in'> Sign in </button>
                </a>
            </div>
            }
        </div>
        <div id='border' />
        </div>
    );
}

export default NavBar;
