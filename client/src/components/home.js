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
                backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8) 20%, rgba(0,0,0, 0) 100%), url(${FirstImage})`,
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
                            {/* {'We partner with your favorite restaurants in order to facilitate subscription based orders'} */}
                            Eat delicious meals today, tomorrow and everyday from your favorite places
                        </h4>
                        

                        <Button 
                            id='order-now'
                            style={{marginTop:'30px'}}
                            onClick={()=>{history.push("/order-food");}}
                            > {'Get started'} </Button>
                    </div>
            </section>
            </div>
            <section class='view-screen' id='second-view' data-aos="fade-up">    
            <div class="align-middle">
                <div class="d-flex justify-content-center" style={{marginBottom:'8px'}}>
                    
                        <h1 style={{fontSize:'100px'}}> How it works </h1>
                </div>
                <div class="d-flex justify-content-center" style={{marginBottom:'100px'}}>
                        <h3> Easy, just how ordering your food should be. </h3>
                </div>
                <ShowStepsOrdering />
            </div>
            </section>


            <div style={{backgroundColor:'#e8ba5a', color: 'white', paddingTop:'100px', paddingBottom:'100px'}} >
                <div class="d-flex justify-content-center" >
                    <h1 style={{fontSize:'90px'}}> Why use Nasta? </h1>
                </div>
                <br /> 
                <div class='row' >
                    <div class='col'>
                        <div class="d-flex justify-content-center" >
                            <img src={PickFoods} alt='brouse' style={{width:'40%'}} />
                        </div>
                    </div>
                    <div class='col' >
                        <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Don’t cook, Feast </h1>
                        <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> No more browsing recipes online or wondering what you should eat everyday.
                            Schedule your meals with Nasta and enjoy your meals. </p>
                        <br /> <br />


                        <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Save yourself the burden of groceries shopping </h1>
                        <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> Shop less, you’ll have more time to focus on the important things. </p>
                        <br /> <br />


                        <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Delicious food </h1>
                        <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> With Nasta, you will feast everyday, twice a day the best meals in your city. </p>
                        <br /> <br />

                    </div>
                </div>
            </div>

            {/* <section 
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

                

            </section> */}

            <div id='container' 
                style={{
                    backgroundColor:'white',
                    marginTop:'0px'
                }}
            >
                <Button id='notified-btn' style={{marginTop:'50px', marginBottom:'120px', borderColor:'black'}}> {'Order now!'} </Button>
            </div>


            <FooterPage />
        </div>
    ) 
}

export default HomePage;
