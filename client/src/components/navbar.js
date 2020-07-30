import React from 'react';
import './navbar.css'
import logo from '../assets/img/logo.PNG'

const NavBar = () => {
    return (
        <div class='navBar'>
            <img class='logo' src={logo} alt='logo'/ >
            <nav>
                <ul class='nav__links'>
                    <li class='tab'><a href='/register-restaurant' class='tab_link'> For Restaurants </a></li>
                </ul>
            </nav>
            <a href="/register-partner">
                <button id='reg-partner'> Sign up to deliver </button>
            </a>
            <a href="/login">
                <button id='sign-in'> Sign in </button>
            </a>
        </div>
    )
}

export default NavBar;
