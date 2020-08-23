import React from 'react';
import './navBarLoggedIn.css'
import { useHistory } from 'react-router-dom';

const NavBarLoggedIn = (props) => {
    const { homePage } = props;
    const history = useHistory();

    return (
        <div className={`${homePage ? 'logo-trigger' : ''}`} style={{marginBottom: '50px'}}>
        <div className='navBar' homePage={true}>
            <div className='logo' onClick={() => {console.log('clicked!'); history.push('/')}}>
                <h1 style={{fontSize:'90px', marginBottom:'0px'}}> Nasta </h1>
            </div>


            <div>

            <h1> Welcome back Ragib! </h1>
            
            <p> We know you're hungry, we got you.</p>
            </div>
            <a href="#">
                <button id='reg-partner'> Your previous orders </button>
            </a>
            <a href="#">
                <button id='sign-in'> Checkout </button>
            </a>
        </div>
        <div id='border' />
        </div>
    );
}

export default NavBarLoggedIn;
