import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css'
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageImage from '../assets/img/deliveringFood.png'
import FooterPage from '../components/footerComponent'

import GetOrder from '../assets/img/getorder.png';
import PickFoods from '../assets/img/pickFoods.png';
import Schedule from '../assets/img/schedule.png';

import Busy from '../assets/img/busy.png'
import Cooking from '../assets/img/cooking.PNG'
import Delivery from '../assets/img/delivery.PNG'

const HomePage = () => {

    return (
        <div>
            <NavBar/>
            <section class='view-screen'>    
                <Row>
                    <Col>
                        <h1 class='grand-message'>
                            {'Meal plans from your favorite restaurant.'}
                        </h1>

                        <h4 id='low-message'>
                            {'We partner with your favorite restaurants in order to facilitate subscription based orders'}
                        </h4>
                        
                        <div id='container'>
                            <Button id='order-now'
                            > {'Order now'} </Button>
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
                        top: '0%',
                        transform: 'translate(-50%, -50%)'
                    }}> It's simple. </h1>

                    <p style={{
                        position: 'absolute', 
                        left: '50%', 
                        // top: '10%',
                        color:"rgb(0, 0, 0, 0.8)",
                        transform: 'translate(-50%, -100%)'
                    }}> Just how ordering your food should be </p>
                </Row>

                <div style={{display: 'flex', justifyContent: 'center'}}>

                
                <Row style={{  transform: 'translate(0%, 20%)', paddingTop:'0%', textAlign:'center', width:'80%'}} >

                        <Col >
                            <img src={PickFoods} alt='brouse'
                                style={{width:'300px'}}
                            />
                            
                            
                            <div style={{textAlign:'center'}}>

                                <div style={{width:'300px'}}>
                                    <h2 
                                    style={{ top:'60%', transform: 'translate(47%, 10%)' ,width:'300px'}} 
                                    > 
                                    
                                    Pick your restaurant and meals </h2>
                                    <h6 
                                    style={{ top:'60%', transform: 'translate(47%, 10%)', width:'300px'}}
                                    > 
                                    Want to order from multiple restaurants and dishes for your plan? Order the most popular dishes from our partners.
                                    </h6>
                                </div>
                            </div>

                        </Col>
                        <Col 
                        // style={{ top:'60%', transform: 'translate(30%, 0%)'}}
                        > 
                            <img src={Schedule} alt='schedule' style={{width:'470px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(45%, 10%)', width:'300px'}}> Schedule date, time and frequency of meals </h2>
                            <h6 style={{ top:'60%', transform: 'translate(45%, 10%)', width:'300px'}}> 
                                Mix and match the days you'd like to have your preferred meals!
                            </h6>
                        </Col>
                        <Col 
                            // style={{ top:'60%', transform: 'translate(20%, 0%)', width:'50px'}}
                            > 
                            <img src={GetOrder}  alt='picup' style={{width:'580px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px'}}> Get your order </h2>
                            <p style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px'}}> 
                                We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </p>
                        </Col>
                </Row>
                </div>



                <div id='container'>
                    <Button id='notified-btn' style={{marginTop:'50px', borderColor:'black'}}> {'Secure your spot on our wait list'} </Button>
                </div>
            </section>

            <section 
            // class='view-screen'
            style={{
                // backgroundColor:'grey',
                marginBottom:'300px',
                marginTop:'-200px'}}
            >    
                

                
                <div style={{
                    margin:'auto',
                }}>
                    <section>

                    <h1
                        style={{
                            color:'white',
                            position:'absolute',
                            top:'255%',
                            left:'15%',
                            fontSize:'60px'
                        }}
                        >
                        You're busy, we know that
                    </h1>

                    <h2
                        style={{
                            color:'white',
                            position:'absolute',
                            top:'263%',
                            left:'15%',
                            width:'30%'
                        }}
                        >
                        More time to focus on the important things by eliminating groceries.
                    </h2>
                    <img src={Busy}  alt='schedule' style={{
                        left: '50%',
                        width:'100%',
                        height: '110%'
                    }}/>

                    </section>
                </div>


                <Row>
                

                    <Col>
                    <img src={Cooking}  alt='schedule' style={{
                        paddingLeft: '10%',
     
                    }}/>
                    </Col>

                    <Col>
                        <h1
                            style={{ marginTop:'200px', marginLeft: '100px', fontSize:'60px'}}
                        >
                            Sit back and relax
                        </h1>

                        <h2 style={{ marginLeft: '100px'}}>
                            Let us worry about cooking, your own personal chef
                        </h2>
                    </Col>
                </Row>




                <div style={{
                    margin:'auto',
                    marginTop:'-130px'
                }}>
                    <section>

                    <h1
                        style={{
                            color:'white',
                            position:'absolute',
                            top:'430%',
                            left:'15%',
                            fontSize:'60px'
                        }}
                        >
                        We'll have your food ready
                    </h1>

                    <h2
                        style={{
                            color:'white',
                            position:'absolute',
                            top:'440%',
                            left:'15%',
                            width:'30%'
                        }}
                        >
                        We know when you want and how you want it
                    </h2>
                    <img src={Delivery}  alt='schedule' style={{
                        left: '50%',
                        width:'100%',
                        height: '110%'
                    }}/>

                    </section>
                </div>
                

            </section>

            <div id='container' 
                style={{
                    backgroundColor:'#FD488E',
                    marginTop:'-200px'
                }}
            >
                <Button id='notified-btn' style={{marginTop:'50px', marginBottom:'120px', borderColor:'black'}}> {'Order now!'} </Button>
            </div>


            <FooterPage />
        </div>
    ) 
}

export default HomePage;
