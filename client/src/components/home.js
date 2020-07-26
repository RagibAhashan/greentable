import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css'
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageImage from '../assets/img/Cow.PNG'
import Foods from '../assets/img/foods.png';
import AOS from 'aos';

const HomePage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div>
            <NavBar/>
            <section class='view-screen'>    
                <Row>
                    <Col>
                        <h1 class='grand-message'>
                            Bring the farm
                        </h1>
                        <h2 id='mid-message'>
                            To your door.
                        </h2>

                        <h4 id='low-message'>
                            We partner with local suppliers to bring fresh foods to you.
                        </h4>

                    </Col>
                    <Col> 
                        <img src={LandingPageImage} alt='cow' class='front-image'/>
                    </Col>
                </Row>
            </section>

            <section class='view-screen' id='second-view' data-aos="fade-up">    
                <Row>
                    <h1 style={{
                        position: 'absolute', 
                        left: '50%', 
                        top: '10%',
                        transform: 'translate(-50%, -50%)'
                    }}> Support local Businesses </h1>
                </Row>

                <Row style={{ top:'60%', transform: 'translate(0%, 30%)'}}>
                    <Col style={{ top:'60%', transform: 'translate(40%, 0%)'}}> 
                        <img src={Foods} class="col-image" alt='brouse'/>
                        <h2> Brouse Inventory </h2>
                        <h6 style={{ top:'60%', transform: 'translate(-10%, 0%)', width:'300px'}}> Whatever item you need, you'll find the freshest produce all in one place</h6>
                    </Col>
                    <Col style={{ top:'60%', transform: 'translate(30%, 0%)'}}> 
                        <img src={Foods} class="col-image" alt='brouse'/>
                        <h2> Place your order </h2>
                        <h6 style={{ top:'60%', transform: 'translate(-10%, 0%)', width:'300px'}}> Pick all your necessities on our ordering page and place an order! </h6>
                        <Button id='notified-btn'> Get notified </Button>
                    </Col>
                    <Col style={{ top:'60%', transform: 'translate(20%, 0%)', width:'50px'}}> 
                        <img src={Foods} class="col-image" alt='brouse'/>
                        <h2> Get your food </h2>
                        <h6 style={{ top:'60%', transform: 'translate(-10%, 0%)', width:'300px'}}> We'll shoot you a text confirming your order, and you'll get to enjoy your fresh groceries in no time. </h6>
                    </Col>
                </Row>
            </section>

            <section class='view-screen' id='third-view'>    
                <Row>  
                    <h1 style={{position: 'absolute', left: '50%', top: '10%',
                    transform: 'translate(-50%, -50%)'}}> Support local Businesses </h1>
                </Row>
            </section>

            
        </div>
    ) 
}

export default HomePage;
