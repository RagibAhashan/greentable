import React from 'react';
// import {Button, Container, Jumbotron, Card, Toast, Row} from 'react-bootstrap'
import './navbar.css'
import logo from '../assets/img/logo.PNG'

const NavBar = () => {
    return (
        <div class='navBar'>
            <img class='logo' src={logo} alt='logo'/>
            <nav>
                <ul class='nav__links'>
                    <li class='tab'><a href='#' class='tab_link'> <button class='tab_btn_link'> Home </button> </a></li>
                    <li class='tab'><a href='#' class='tab_link'> For Restaurants </a></li>
                    <li class='tab'><a href='#' class='tab_link'> For suppliers </a></li>
                </ul>
            </nav>
            <a href="#">
                <button id='sign-in'> Sign in </button>
            </a>
        </div>
    )
}

export default NavBar;
