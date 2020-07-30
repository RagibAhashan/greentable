import React, { useState, useEffect, prevState } from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';





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

        setFormIncomplete(!(restaurantName && restaurantWebsiteLink && restaurantAddress && restaurantCity && firstName && lastName && email && phoneNumber));
    })

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


  return (
      <div>
          <div className='header-msg'>

            <h2 style={{textAlign:"center"}}> 
            <span style={{color:'rgb(248, 55, 255)'}}>You make</span> the food,
            <span style={{color:'#15c8ff'}}>{' We handle'}</span> the rest. </h2>

            
            <h4>Increase your customer retention while providing a personalized subscription service.
                Our trained staff, delivery expertise and logistics will drive large orders with less
                worry of when you’ll get your next order.</h4>
          </div>

    <form onSubmit={handleSubmit(onSubmit)} className='centered'>
            <div>
            <h2> RESTAURANT DETAILS </h2>
            <hr/>
              <div>
                <h6> Restaurant Name: </h6>
                <input 
                    placeholder="Enter your restaurant's name"
                    onChange={(e) => {
                        setRestaurantName(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> Restaurant Website Link: </h6>
                <input 
                    placeholder="Enter your restaurant website link"
                    onChange={(e) => {
                        setRestaurantWebsiteLink(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> Street Address: </h6>
                <input 
                    placeholder="Enter your restaurant's street address"
                    onChange={(e) => {
                        setRestaurantAddress(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> City: </h6>
                <input 
                    placeholder="Enter your City"
                    onChange={(e) => {
                        setRestaurantCity(e.target.value) 
                    }}
                />
            </div>

            <br/>
            <h2> PERSONAL DETAILS </h2>
            <hr/>
            <div>
                <h6> First Name: </h6>
                <input 
                    placeholder="Enter your first name"
                    onChange={(e) => {
                        setFirsName(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> Last Name: </h6>
                <input 
                    placeholder="Enter your last name"
                    onChange={(e) => {
                        setLastName(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> Email Address: </h6>
                <input 
                    placeholder="Enter your Email address"
                    onChange={(e) => {
                        setEmail(e.target.value) 
                    }}
                />
            </div>

            <div>
                <h6> Phone number: </h6>
                <input 
                    placeholder="Enter your phone number"
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

    
    
    </div>
  );
}

export default RegisterRestaurant;
