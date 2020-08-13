import React from 'react';
import './navbar.css'

const NavBar = (props) => {
    const { homePage } = props;

    if (!homePage) {

        
        return (
            <div class='logo-trigger' >
            <div class='navBar'>

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
        );
    } else {
        return (
            <div class='' >
            <div class='navBar'>

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
}

export default NavBar;
