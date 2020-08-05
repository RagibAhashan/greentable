import React, { useState, useEffect } from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navbar';
import FooterPage from '../components/footerComponent';
import axios from 'axios';



const RestaurantGetStarted = (props) => {
    const history = useHistory();
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [user_id, setUserID] = useState('');

    const [userData, setUserData] = useState(false);
    const [dataFound, setDataFound] = useState(false);



    const [formIncomplete, setFormIncomplete] = useState(false);

    console.log(props.location.search.replace('?', ''))


    useEffect(() => {

        setUserID(props.location.search.replace('?', ''));
        // if (!user_id) {
            
            console.log('user_id', user_id);
            console.log('Get request....');

            if (!dataFound) {
                axios.get(`http://localhost:4000/restaurant/sign-up-user/` + user_id)
                .then((response)=>{
                    console.log('response', response.data.user_info);
                    setUserData(response.data.user_info);
                    setDataFound(true);
                })
            }


        // }

        console.log('userData', userData)


        setFormIncomplete((passwordOne === passwordTwo) && passwordOne && passwordTwo);

    })

    const { handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const signUp = async () => {
        try {
            const dataPackage = {
                "user_id": user_id,
                "password": passwordOne,
            }

            
            
              const data = JSON.parse(JSON.stringify(dataPackage));
              await axios.post('http://localhost:4000/restaurant/sign-up-restaurant-owner/', data);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div id='restaurant-reg'>
            <NavBar/>
            <br/>

            <section class='view-screen'>  
            
            
            <Row style={{backgroundColor:'white', width:'50%', margin:'auto'}}>



            
            <form onSubmit={handleSubmit(onSubmit)} className='centered'>
                    <div>
                    <h3> { `Welcome back, ${userData.firstName}!`} </h3>
                    <h5> {`Let's register your account and get started!`} </h5>
                    <hr/>
                    <div>
                        <input 
                            placeholder=""
                            value={userData.email}
                            disabled={true}
                        />
                    </div>

                    <div>
                        <input 
                            placeholder="Enter your password"
                            type='password'
                            onChange={(e) => {
                                setPasswordOne(e.target.value) 
                            }}
                        />
                    </div>

                    <div>
                        <input 
                            placeholder="Re-enter your password"
                            type='password'
                            onChange={(e) => {
                                setPasswordTwo(e.target.value) 
                            }}
                        />
                    </div>


                    <Button id='register-button'
                        disabled={!formIncomplete}
                        onClick={async ()=>{
                            
                            try {
                                await signUp();
                                history.push("/");
                            } catch(error) {
                                console.log(error);
                            }
                        
                        }}
                    > 
                        Sign up! 
                    </Button>


                
                </div>
            </form>

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

export default RestaurantGetStarted;
