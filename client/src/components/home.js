import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css'
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageImage from '../assets/img/deliveringFood.png'


import GetOrder from '../assets/img/getorder.png';
import PickFoods from '../assets/img/pickFoods.png';
import Schedule from '../assets/img/schedule.png';

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
                            Meal plans from your favorite restaurant.
                        </h1>

                        <h4 id='low-message'>
                            We partner with your favorite restaurants in order to facilitate subscription based orders
                        </h4>
                        
                        <div id='container'>
                            <Button id='order-now'
                            > Order now </Button>
                        </div>

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
                    }}> It's simple. </h1>

                    <p style={{
                        position: 'absolute', 
                        left: '50%', 
                        top: '10%',
                        color:"rgb(0, 0, 0, 0.8)",
                        transform: 'translate(-50%, 90%)'
                    }}> Just how ordering your food should be </p>
                </Row>

                <div style={{display: 'flex', justifyContent: 'center'}}>

                
                <Row style={{  transform: 'translate(0%, 60%)', paddingTop:'0%', textAlign:'center', width:'1800px'}} >

                        <Col >
                            <img src={PickFoods} class="col-image" alt='brouse'/>
                            
                            
                            <div style={{textAlign:'center'}}>

                                <div style={{width:'300px'}}>
                                    <h2 
                                    style={{ top:'60%', transform: 'translate(47%, 0%)' ,width:'300px'}} 
                                    > 
                                    
                                    Pick your restaurant and meals </h2>
                                    <h6 
                                    style={{ top:'60%', transform: 'translate(47%, 0%)', width:'300px'}}
                                    > 
                                    Want to order from multiple restaurants and dishes for your plan? Order the most popular dishes from our partners.
                                    </h6>
                                </div>

                            
                            </div>




                        </Col>
                        <Col 
                        // style={{ top:'60%', transform: 'translate(30%, 0%)'}}
                        > 
                            <img src={Schedule} class="col-image" alt='schedule' style={{width:'470px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(57%, 0%)', width:'300px'}}> Schedule date, time and frequency of meals </h2>
                            <h6 style={{ top:'60%', transform: 'translate(57%, 0%)', width:'300px'}}> 
                            Mix and match the days you'd like to have your preferred meals!
                            </h6>
                        </Col>
                        <Col 
                            // style={{ top:'60%', transform: 'translate(20%, 0%)', width:'50px'}}
                            > 
                            <img src={GetOrder} class="col-image" alt='picup' style={{width:'580px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(57%, 0%)', width:'300px'}}> Get your order </h2>
                            <p style={{ top:'60%', transform: 'translate(57%, 20%)', width:'300px'}}> 
                                We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </p>
                        </Col>
                </Row>
                </div>



                <div id='container'>
                    <Button id='notified-btn'> Get notified </Button>
                </div>
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
