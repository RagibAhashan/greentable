import React, { useState, useEffect } from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navbar';
import FooterPage from '../components/footerComponent';
import axios from 'axios';



const UserGetStarted = (props) => {
    const history = useHistory();

    const [user_id, setUserID] = useState('');
    const [passwordOne, setPasswordOne] = useState('');

    const [userData, setUserData] = useState(false);
    const [dataFound, setDataFound] = useState(false);

    


    useEffect(() => {

        setUserID(props.location.search.replace('?', ''));

        if (!dataFound) {
            try {
                axios.get(`http://localhost:4000/user/sign-up-user/` + user_id)
                .then((response)=>{
                    setUserData(response.data.user_info);
                    setDataFound(true);
                    axios.delete(`http://localhost:4000/user/sign-up-user/` + user_id)
                    .then(() => {
                        if(localStorage.getItem('getStartedOrders')) {
                            history.push('/checkout');
                        }
                    })
                });

                
            } catch(error) {
                console.log('USER NOT FOUND!')
            }

        }

        console.log(user_id, passwordOne)
    })

    const { handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const signIn = async () => {
        try {
            const dataPackage = {
                "email": userData.email,
                "password": passwordOne,
            }
            console.log(dataPackage)
            const data = JSON.parse(JSON.stringify(dataPackage));
            const response = await axios.post('http://localhost:4000/user/sign-in-user/', data);
            console.log(response);
            history.push('/');
        } catch (error) {
            window.alert('Wrong Email or Password.')
            console.log(error);
        }
    }



    return (
        <div id='restaurant-reg'>
            {/* <NavBar/> */}
            <br/>

            <section class='view-screen'>  
            
            
            <Row style={{backgroundColor:'white', width:'50%', margin:'auto', paddingTop:'8%'}}>



            
            <form onSubmit={handleSubmit(onSubmit)} className='centered'
                style={{borderColor: '#000000', borderRadius:'0px', borderWidth:'1px'}}
            >
                    <div>
                    <h3> { `Welcome back, ${userData.firstName}!`} </h3>
                    <h5> {`Sign in and get started!`} </h5>
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

                    <button id='sign-in'
                        style={{width:'100%', margin:'auto'}}
                        onClick={async ()=>{
                            
                            try {
                                await signIn();
                            } catch(error) {
                                console.log(error);
                            }
                        
                        }}
                    > 
                        Sign in
                    </button>


                
                </div>
            </form>

        </Row>
        </section>
        
        <FooterPage/>

        </div>
    );
}

export default UserGetStarted;
