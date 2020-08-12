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
import FirstImage from '../assets/img/landingPage.jpg'


import Busy from '../assets/img/busy.png'
import Cooking from '../assets/img/cooking.PNG'
import Delivery from '../assets/img/delivery.PNG'
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomePage = () => {
    const history = useHistory();
    const queryLarge = useMediaQuery('(min-width:1200px)');
    const queryMid = useMediaQuery('(min-width:900px)');
    const querySmall = useMediaQuery('(min-width:900px)');

    const ShowStepsOrdering = () => {
        if(queryLarge) {
            return (
                <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div class='row'>
                        <div class='col'>
                            <div class="d-flex justify-content-center" >
                                <img src={PickFoods} alt='brouse' style={{width:'300px', marginLeft:'-170px'}} />
                            </div>
                            
                            <div style={{textAlign:'center'}}>

                                <div style={{width:'300px'}}>
                                    <h2 > 
                                    
                                        Pick your restaurant and meals </h2>
                                    <h6> 
                                    Want to order from multiple restaurants and dishes for your plan? Order the most popular dishes from our partners.
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div class='col' style={{textAlign:'center'}}>
                            <div class="d-flex justify-content-center" >
                                <img src={Schedule} alt='schedule' style={{width:'470px'}}/>
                            </div>
                            <div class="d-flex justify-content-center" >
                                <h2 style={{ width:'300px'}}> Schedule date, time and frequency of meals </h2>
                            </div>
                            <div class="d-flex justify-content-center" >
                            <h6 style={{ width:'300px'}}> 
                                Mix and match the days you'd like to have your preferred meals!
                            </h6>
                            </div>

                        </div>

                        <div class='col' style={{textAlign:'center'}}>
                            <img src={GetOrder}  alt='picup' style={{width:'580px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px'}}> Get your order </h2>
                            <p style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px'}}> 
                                We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            )
        } else {
            return (
                <div>

                    <div class='row'>
                        <div class='col'>
                            <div class="d-flex justify-content-center" >
                                <img src={PickFoods} alt='brouse' style={{width:'300px'}} />
                            </div>
                        </div>
                        <div class='col'>
                            <div class="d-flex justify-content-center" >

                                <div style={{width:'300px'}}>
                                    <h2 > 
                                        Pick your restaurant and meals 
                                    </h2>
                                    <h6> 
                                    Want to order from multiple restaurants and dishes for your plan? Order the most popular dishes from our partners.
                                    </h6>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <br /><br /><br /><br />


                    <div class='row'>
                        <div class='col'>
                        <img src={Schedule} alt='schedule' style={{width:'470px'}}/>
                        </div>
                        <div class='col'>
                            <div class="d-flex justify-content-center" >
                                <h2 style={{ width:'300px'}}> Schedule date, time and frequency of meals </h2>
                            </div>
                            <div class="d-flex justify-content-center" >
                            <h6 style={{ width:'300px'}}> 
                                Mix and match the days you'd like to have your preferred meals!
                            </h6>
                            </div>
                        </div>  
                    </div>



                    <div class='row'>
                        <div class='col'>
                        <img src={GetOrder}  alt='picup' style={{width:'580px'}}/>
                        </div>
                        <div class='col'>
                            <div class="d-flex justify-content-center" >
                                <h2 style={{ width:'300px'}}> Get your order </h2>
                            </div>
                            <div class="d-flex justify-content-center" >
                            <h6 style={{ width:'300px'}}> 
                            We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </h6>
                            </div>
                        </div>  
                    </div>




                </div>
            )
        } 
    }

    return (
        <div>

            
            <div style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.5) 10%, rgba(0,0,0, 0) 100%), url(${FirstImage})`,
                backgroundRepeat: 'no-repeat',
                height:'100%'
                }}>
            <NavBar />
            <section class='view-screen' >    

                    <div class='first-message'>

                        <h1 class='grand-message'>
                            {'Meal plans from your favorite restaurant.'}
                        </h1>

                        <h4 id='low-message'>
                            {'We partner with your favorite restaurants in order to facilitate subscription based orders'}
                        </h4>
                    </div>
                        

                        <Button 
                            id='order-now'
                            onClick={()=>{history.push("/order-food");}}
                        > {'Order now'} </Button>


                {/* <div class="d-flex justify-content-center" >
                    <h1 class='grand-message' style={{position:'absolute'}}>
                        {'Meal plans from your favorite restaurant.'}
                    </h1>
                </div>
                <div class="d-flex justify-content-end">
                    <img src={LandingPageImage} alt='cow' style={{marginTop:'10%', marginRight:'25%', width:'800px'}}/>
                </div> */}
            </section>
            </div>
            <section class='view-screen' id='second-view' data-aos="fade-up">    
            <div class="d-flex justify-content-center" style={{marginBottom:'8px'}}>
                
                    <h1 style={{
                        // position: 'absolute', 
                        // left: '50%', 
                        // top: '0%',
                        // transform: 'translate(-50%, 0%)'
                    }}> It's simple. </h1>
            </div>
            <div class="d-flex justify-content-center" style={{marginBottom:'100px'}}>
                    <p style={{
                        // position: 'absolute', 
                        // left: '50%', 
                        // top: '10%',
                        // color:"rgb(0, 0, 0, 0.8)",
                        // transform: 'translate(-50%, -100%)'
                    }}> Just how ordering your food should be </p>
            </div>



                <ShowStepsOrdering />



                
            </section>

            <section 
                style={{
                marginBottom:'300px',
                marginTop:`${queryLarge ? '-500px' : ''}`
            }}
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
                            left:'10%',
                            fontSize:'60px'
                        }}
                        >
                    </h1>

                    <h2
                        style={{
                            color:'white',
                            position:'absolute',
                            top:'263%',
                            left:'10%',
                            width:'30%'
                        }}
                        >
                    </h2>
                    <div class="d-flex justify-content-center">
                        <img src={Busy}  alt='schedule' style={{
                            width:'60%'
                        }}/>
                    </div>

                    </section>
                </div>


                <div class="d-flex justify-content-center">
                    <img src={Cooking}  alt='schedule' style={{
                        paddingLeft: '0%',
                        width:'60%'
                    }}/>
                </div>


                <div class="d-flex justify-content-center">
                    <img src={Delivery}  alt='schedule' style={{
                        width:'60%',
                        height: '90%'
                    }}/>
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
