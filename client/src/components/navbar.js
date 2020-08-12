import React from 'react';
import './navbar.css'

const NavBar = () => {
    return (
        <div class='logo-trigger'>
            <div class='navBar'>
                {/* <img class='logo' src={logo} alt='logo'/ > */}

                <div class='logo'>
                    <h1 style={{fontSize:'90px', marginBottom:'0px'}}> Nasta </h1>
                </div>

                <a href="/register-restaurant">
                    <button id='reg-partner'> For Restaurants </button>
                </a>
                <a href="/login">
                    <button id='sign-in'> Sign in </button>
                </a>

            </div>
            <div id='border' />
        </div>
    )
}

export default NavBar;
