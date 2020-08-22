import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginPage from '../../pages/loginPage';
import FooterPage from '../footerComponent'
import axios from 'axios';

const CheckoutOrder = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState({});
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        setLoggedIn(false);
        const getStartedOrders = JSON.parse(localStorage.getItem('getStartedOrders'));
        const getStartedOrdersTimes = JSON.parse(localStorage.getItem('getStartedOrdersTimes'));
        console.log(getStartedOrders, getStartedOrdersTimes);

        getStartedOrders.Monday.location = getStartedOrdersTimes.Monday.location;
        getStartedOrders.Tuesday.location = getStartedOrdersTimes.Tuesday.location;
        getStartedOrders.Wednesday.location = getStartedOrdersTimes.Wednesday.location;
        getStartedOrders.Thursday.location = getStartedOrdersTimes.Thursday.location;
        getStartedOrders.Friday.location = getStartedOrdersTimes.Friday.location;
        getStartedOrders.Saturday.location = getStartedOrdersTimes.Saturday.location;
        getStartedOrders.Sunday.location = getStartedOrdersTimes.Sunday.location;

        getStartedOrders.Monday.time = getStartedOrdersTimes.Monday.time;
        getStartedOrders.Tuesday.time = getStartedOrdersTimes.Tuesday.time;
        getStartedOrders.Wednesday.time = getStartedOrdersTimes.Wednesday.time;
        getStartedOrders.Thursday.time = getStartedOrdersTimes.Thursday.time;
        getStartedOrders.Friday.time = getStartedOrdersTimes.Friday.time;
        getStartedOrders.Saturday.time = getStartedOrdersTimes.Saturday.time;
        getStartedOrders.Sunday.time = getStartedOrdersTimes.Sunday.time;

        setOrderData(getStartedOrders);

        console.log(getStartedOrders, getStartedOrdersTimes);


        
    }, []);

    useEffect(() => {
        console.log(userInformation.userData);
        if (userInformation.userData) {
            setFullName(userInformation.userData.firstName + ' ' + userInformation.userData.lastName);
            setPhoneNumber(userInformation.userData.phoneNumber);
            setHomeAddress(userInformation.userData.email);
            setEmail(userInformation.userData.email);
        }
    }, [userInformation]);


    return (
        <div>
            <div class="d-flex justify-content-center" style={{paddingTop:'10%'}}> 
                {!loggedIn ? 
                <LoginPage
                    getStarted={true}
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                />
                : 

                <Paper elevation={4} style={{width:'50%', padding:'30px'}}>
                    <h1 style={{textAlign:'center'}}> Payment details </h1>
                    <hr />
                    <br /><br />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        
                                <h2> Billing information </h2>
                                <br />
                                <p> {`Full Name ${fullName}`} </p>
                                <p> {`Phone Number: ${phoneNumber}`} </p>
                                <p> {`Home Address: ${homeAddress}`} </p>


                                <TextField
                                    type='password'
                                    style={{width:'70%'}}
                                    label='Credit Card Number (Visa)'
                                />
                                <br /><br />
                                <Button
                                    variant="outlined"
                                    style={{width:'40%', color:'green'}}
                                    onClick={async () => {
                                        await axios.post(`http://localhost:4000/user/${email}`,
                                        JSON.parse(JSON.stringify(orderData))
                                        )
                                    }}
                                >
                                    Confirm orders </Button>

                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={0}>
                                <h2 style={{textAlign:'right'}}> Subscription price</h2>
                                <h2 style={{textAlign:'right'}}> $74.99</h2>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                {/* <hr /> */}
                                {/* <h1 style={{textAlign:'right'}}> Total $74.99 </h1> */}
                            </Paper>
                        </Grid>
                    </Grid>
                    
                </Paper>
                }

            </div>
            {loggedIn ? <div style={{marginTop:'10%'}}> <FooterPage  /> </div> : <div />}
        </div>
    )
}

export default CheckoutOrder;