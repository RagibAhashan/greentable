import React, { useState, useEffect, prevState } from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navbar';
import FooterPage from '../components/footerComponent';
import axios from 'axios';



const RegisterRestaurant = (props) => {
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

    console.log(props.location.search.replace('?', ''))

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

    const registerPartner = async () => {
        try {
            const dataPackage = {
                "restaurantName": restaurantName,
                "restaurantLink": restaurantWebsiteLink,
                "streetAddress" : restaurantAddress,
                "city": restaurantCity,
                "firstName": firstName,
                "lastName" : lastName,
                "email": email,
                "phoneNumber": phoneNumber
            }
            
              const newSiteCopy = JSON.parse(JSON.stringify(dataPackage));
              const response = await axios.post('http://localhost:4000/restaurant', newSiteCopy);
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <div id='restaurant-reg'>
            <NavBar/>
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
                        onClick={async ()=>{
                            
                            try {
                                await registerPartner();
                                history.push("/");
                            } catch(error) {
                                console.log(error);
                            }
                        
                        }}
                    > 
                        Register 
                    </Button>


                
                </div>
            </form>
            </Col>
        </Row>
        </section>

        
        <section class='view-screen'> 
            More info... 
            <Row style={{ height: '30%'}}>
                <Col> Illustration Here </Col>
                <Col> Content here </Col>
            </Row>

            <Row style={{ height: '30%'}}>
                <Col> Content here </Col>
                <Col> Illustration Here </Col>
            </Row>

            <Row style={{ height: '30%'}}>
                <Col> Illustration Here </Col>
                <Col> Content here </Col>
            </Row>
        </section>
        
        <FooterPage/>

        </div>
    );
}

export default RegisterRestaurant;
