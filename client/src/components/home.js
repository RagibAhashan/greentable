import React, { useEffect } from 'react';
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
import IPhone from '../assets/img/iPhone.png'

import ImageOne from '../assets/img/foodOne.jpg'
import ImageTwo from '../assets/img/foodTwo.jpg'
import ImageThree from '../assets/img/foodThree.jpg'

import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {
    const history = useHistory();
    const queryLarge = useMediaQuery('(min-width:1200px)');
    const queryMid = useMediaQuery('(min-width:900px)');
    const querySmall = useMediaQuery('(min-width:900px)');

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, []);

    const ShowStepsOrdering = () => {
        if(queryLarge) {
            return (
                <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div class='row'>
                        <div class='col' data-aos='fade-right'>
                            <div class="d-flex justify-content-center" >
                                <img src={PickFoods} alt='brouse' style={{width:'300px', marginLeft:'-170px'}} />
                            </div>
                            
                            <div style={{textAlign:'center'}}>

                                <div style={{width:'300px', marginTop:'8%'}}>
                                    <h2 > 
                                    
                                        Pick your restaurant and meals </h2>
                                </div>
                            </div>
                        </div>

                        <div class='col' style={{textAlign:'center' }} data-aos='fade-up'>
                            <div class="d-flex justify-content-center" >
                                <img src={Schedule} alt='schedule' style={{width:'470px'}}/>
                            </div>
                            <div class="d-flex justify-content-center" >
                                <h2 style={{ width:'300px', marginTop:'8%'}}> Schedule date, time and frequency of meals </h2>
                            </div>
                            <div class="d-flex justify-content-center" >
                            </div>

                        </div>

                        <div class='col' style={{textAlign:'center'}} data-aos='fade-left'>
                            <img src={GetOrder}  alt='picup' style={{width:'580px'}}/>
                            <h2 style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px', marginTop:'8%'}}> Get your order </h2>
                            {/* <p style={{ top:'60%', transform: 'translate(57%, 10%)', width:'300px'}}> 
                                We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </p> */}
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
                                    {/* <h6> 
                                    Want to order from multiple restaurants and dishes for your plan? Order the most popular dishes from our partners.
                                    </h6> */}
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
                            {/* <h6 style={{ width:'300px'}}> 
                                Mix and match the days you'd like to have your preferred meals!
                            </h6> */}
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
                            {/* <h6 style={{ width:'300px'}}> 
                            We'll shoot you a text reminding you of your order, and you'll get to enjoy your meals with no worry.
                            </h6> */}
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
            <NavBar homePage={true} />
            <section class='view-screen' >    

                    <div class='first-message'>

                        <h1 class='grand-message'>
                            {'Meal plans from your favorite restaurant.'}
                        </h1>

                        <h4 id='low-message'>
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
            <section class='view-screen' id='second-view' data-aos="fade-up" style={{backgroundColor:'#FAFAF6'}}>    
            <div class="align-middle">
                
                <div data-aos='fade-up'>
                    <div class="d-flex justify-content-center" style={{marginBottom:'8px'}} >
                        
                            <h1 style={{fontSize:'100px'}}> How it works </h1>
                    </div>
                    <div class="d-flex justify-content-center" style={{marginBottom:'100px'}} >
                            <h3> Easy, just how ordering your food should be. </h3>
                    </div>
                </div>


                <ShowStepsOrdering />
            </div>
            </section>



            <div style={{backgroundColor:'#e8ba5a', color: 'white', paddingTop:'100px', paddingBottom:'100px'}} >
                <div class="d-flex justify-content-center" data-aos='fade-in'>
                    <h1 style={{fontSize:'90px'}} > Why use Nasta? </h1>
                </div>
                <br /> 
                <div class='row' >
                    <div class='col'>
                        <div class="d-flex justify-content-center" >
                            <img src={IPhone} alt='brouse' style={{width:'30%'}} />
                        </div>
                    </div>
                    <div class='col' >
                        <div style={{paddingTop:'10%'}}>
                            <div data-aos='fade-left'>
                                <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Don’t cook, Feast </h1>
                                <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> No more browsing recipes online or wondering what you should eat everyday.
                                    Schedule your meals with Nasta and enjoy your meals. </p>
                                <br /> <br />
                            </div>

                            <div data-aos='fade-left'>
                            <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Save yourself the burden of groceries shopping </h1>
                            <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> Shop less, you’ll have more time to focus on the important things. </p>
                            <br /> <br />
                            </div>

                            <div data-aos='fade-left'>
                            <h1 style={{fontSize:'26px'}}> <span style={{color:'#519ea4'}}> √ </span> Delicious food </h1>
                            <p style={{width:'500px', fontSize:'20px', paddingLeft:'0px'}}> With Nasta, you will feast everyday, twice a day the best meals in your city. </p>
                            <br /> <br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section style={{backgroundColor:'#FAFAF6', paddingTop:'80px', paddingBottom:'12%'}}>
                <div class='row'>
                    <div class='col' style={{marginLeft:'-5%'}}>
                        <div style={{marginLeft:'30%', width:'600px', paddingTop:'10%'}} data-aos='fade-right'>
                            <h1 style={{fontSize:'90px'}} > Same meals, lower price </h1>
                            <p style={{fontSize:'25px'}}> Face it, you're probably ordering online a lot already.
                            Save money by ordering bulk from your restaurants. <a href='#' style={{color:'#e8ba5a'}}> Here's proof </a> </p>
                            
                        </div>
                    </div>
                    <div class='col' data-aos='fade-left'>
                        <img src={ImageTwo} alt='brouse' style={{width:'90%', position: 'absolute', }} />
                    </div>
                </div>
            </section>


            <section style={{backgroundColor:'#e8ba5a', paddingTop:'100px', paddingBottom:'100px'}}>
                <div class='row'>
                <div class='col' data-aos='fade-right'>
                        <img src={ImageOne} alt='brouse' style={{width:'90%',  paddingLeft:'5%'}} />
                </div>
                <div class='col' style={{marginLeft:'-5%', color: 'white'}} data-aos='fade-left'>
                    <div style={{marginLeft:'30%', width:'600px', paddingTop:'10%'}} >
                        <h1 style={{fontSize:'90px'}} > You're busy, we know that  </h1>
                        <p style={{fontSize:'25px'}}> Let the pros handle the cooking. Order ahead. Save Time. Save Money </p>
                        
                    </div>
                </div>
                    
                </div>
            </section>






            <section style={{backgroundColor:'#FAFAF6', paddingTop:'200px', paddingBottom:'200px'}}>
                <div class='row'>
                    <div class='col' >
                        <div  style={{margin:'auto', width:'700px'}}>
                            <h1 style={{fontSize:'90px'}} data-aos='fade-in'> Best meal plan you've ever had </h1>
                            <p style={{fontSize:'25px'}} data-aos='fade-in'> 
                                Gone are the days of bland meal plans. Get your favourite dishes from the best restaurants in your city
                            </p>
                            <Button 
                                data-aos='fade-in'
                                id='order-now'
                                style={{marginTop:'30px'}}
                                onClick={()=>{history.push("/order-food");}}
                            > {'Get started'} </Button>
                            
                        </div>
                    </div>
    
                </div>
            </section>


            <FooterPage />
        </div>
    ) 
}

export default HomePage;
