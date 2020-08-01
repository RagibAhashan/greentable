import React, { useState, useEffect, prevState } from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navbar';




const RegisterRestaurant = () => {
    const history = useHistory();
    const [restaurantName, setRestaurantName] = useState(false);
    const [restaurantWebsiteLink, setRestaurantWebsiteLink] = useState(false);
    const [restaurantAddress, setRestaurantAddress] = useState(false)
    const [restaurantCity, setRestaurantCity] = useState(false)

    const [firstName, setFirsName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);



    const [formIncomplete, setFormIncomplete] = useState(true);


    useEffect(() => {
        console.log(
            '\nrestaurantName', restaurantName,
            '\nrestaurantWebsiteLink', restaurantWebsiteLink,
            '\nrestaurantAddress', restaurantAddress,
            '\nrestaurantCity' , restaurantCity,

            '\nirstName' , firstName,
            '\nlastName' , lastName,
            '\nemail' , email,
            '\nphoneNumber' , phoneNumber,
        )

        console.log(restaurantName && restaurantWebsiteLink && restaurantAddress && restaurantCity && firstName && lastName && email && phoneNumber)

        setFormIncomplete(!(restaurantName && restaurantAddress && restaurantCity && firstName && lastName && email && phoneNumber));
    })

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


  return (
      <div id='restaurant-reg'>
          {/* <NavBar/> */}
          <br/>

          <section class='view-screen'>  
          
          
        <Row style={{backgroundColor:'white', width:'90%', margin:'auto'}}>

          
            <Col>
                <div className='header-msg'>

                    <h2 style={{textAlign:"center"}}> 
                    <span style={{color:'rgb(248, 55, 255)'}}>You make</span> the food,
                    <span style={{color:'#15c8ff'}}>{' We handle'}</span> the rest. </h2>

                    
                    <h4>Increase your customer retention while providing a personalized subscription service.
                        Our trained staff, delivery expertise and logistics will drive large orders with less
                        worry of when you’ll get your next order.</h4>
                </div>
            </Col>

        <Col>
         
        <form onSubmit={handleSubmit(onSubmit)} className='centered'>
                <div>
                <h3> RESTAURANT DETAILS </h3>
                <hr/>
                <div>
                    <input 
                        placeholder="Restaurant Name"
                        onChange={(e) => {
                            setRestaurantName(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="Restaurant Website Link (Optional)"
                        onChange={(e) => {
                            setRestaurantWebsiteLink(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="Street Address"
                        onChange={(e) => {
                            setRestaurantAddress(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="City"
                        onChange={(e) => {
                            setRestaurantCity(e.target.value) 
                        }}
                    />
                </div>

                <br/>
                <h3> PERSONAL DETAILS </h3>
                <hr/>
                <div>
                    <input 
                        placeholder="First Name"
                        onChange={(e) => {
                            setFirsName(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="Last Name"
                        onChange={(e) => {
                            setLastName(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="Email Address"
                        onChange={(e) => {
                            setEmail(e.target.value) 
                        }}
                    />
                </div>

                <div>
                    <input 
                        placeholder="Phone number"
                        onChange={(e) => {
                            setPhoneNumber(e.target.value) 
                        }}
                    />
                </div>

                <Button id='register-button'
                    disabled={formIncomplete}
                    onClick={()=>{history.push("/");}}
                > 
                    Register 
                </Button>


            
            </div>
        </form>
        </Col>
    </Row>
    </section>

    
    <section class='view-screen'> More info... </section>
    </div>
  );
}

export default RegisterRestaurant;
