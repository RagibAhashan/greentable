import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginPage from '../../pages/loginPage';
import FooterPage from '../footerComponent'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Navbar from '../navbar';

import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

const CheckoutOrder = (props) => {
    const { isLoggedIn, setIsLoggedIn } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState({});
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [orderData, setOrderData] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        setLoggedIn(false);
        const getStartedOrders = JSON.parse(localStorage.getItem('getStartedOrders'));
        const getStartedOrdersTimes = JSON.parse(localStorage.getItem('getStartedOrdersTimes'));
        console.log(getStartedOrders, getStartedOrdersTimes);

        if(getStartedOrders && getStartedOrdersTimes) {
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
        } else {
            history.push('/');
        }

        
    }, []);


    const ListMeals = () => {
        return (
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <h2> Your Meal prep</h2>
            
                {orderData.Monday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Monday.first.food} ${orderData.Monday.second.food ? ' & ' + orderData.Monday.second.food : ''} on Mondays`} />
                    </ListItem>
                </div>
                : <div />
            }
                
                {orderData.Tuesday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Tuesday.first.food} ${orderData.Tuesday.second.food ? ' & ' + orderData.Tuesday.second.food : ''} on Tuesdays`} />
                    </ListItem>
                </div>
                : <div />
            }
            {orderData.Wednesday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Wednesday.first.food} ${orderData.Wednesday.second.food ? ' & ' + orderData.Wednesday.second.food : ''} on Wednesdays`} />
                    </ListItem>
                </div>
                : <div />
            }

            {orderData.Thursday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Thursday.first.food} ${orderData.Thursday.second.food ? ' & ' + orderData.Thursday.second.food : ''} on Thursdays`} />
                    </ListItem>
                </div>
                : <div />
            }
                {orderData.Thursday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Thursday.first.food} ${orderData.Thursday.second.food ? ' & ' + orderData.Thursday.second.food : ''} on Thursdays`} />
                    </ListItem>
                </div>
                : <div />
            }

            {orderData.Friday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Friday.first.food} ${orderData.Friday.second.food ? ' & ' + orderData.Friday.second.food : ''} on Fridays`} />
                    </ListItem>
                </div>
                : <div />
            }

            {orderData.Saturday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Saturday.first.food} ${orderData.Saturday.second.food ? ' & ' + orderData.Saturday.second.food : ''} on Saturdays`} />
                    </ListItem>
                </div>
                : <div />
            }

            {orderData.Sunday.first.food ? 
                <div> 
                    <Divider />
                    <ListItem >
                        <ListItemText primary={`${orderData.Sunday.first.food} ${orderData.Sunday.second.food ? ' & ' + orderData.Sunday.second.food : ''} on Sundays`} />
                    </ListItem>
                </div>
                : <div />
            }

                
            </List>
        )
    }

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
            <Navbar disableButtons={true}/>
            <div class="d-flex justify-content-center" style={{paddingTop:'2%'}}> 
                {!loggedIn ? 
                <div >
                    <LoginPage
                        getStarted={true}
                        setLoggedIn={setLoggedIn}
                        setUserInformation={setUserInformation}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                </div>
                : 

                <Paper elevation={4} style={{width:'90%', padding:'30px'}}>
                    <h1 style={{textAlign:'center'}}> Payment details </h1>
                    <hr />
                    <br /><br />
                    <Grid container spacing={3}>
                        <Grid item xs style={{marginRight:'0%'}}>
                            <ListMeals />
                        
                        </Grid>
                        <Grid item xs>
                        
                                <h2> Billing information </h2>
                                <br />
                                <p> {`Full Name: ${fullName}`} </p>
                                <p> {`Phone Number: ${phoneNumber}`} </p>
                                <p> {`Home Address: ${homeAddress}`} </p>

                                <TextField
                                    type='text'
                                    defaultValue={`${fullName}`}
                                    style={{width:'70%'}}
                                    label='Full Name'
                                />
                                <br /><br />

                                <TextField
                                    type='text'
                                    style={{width:'70%'}}
                                    label='Billing address'
                                />
                                <br /><br />

                                <TextField
                                    type='text'
                                    value='Montreal'
                                    disabled
                                    style={{width:'70%'}}
                                    label='City'
                                />
                                <br /><br />

                                <TextField
                                    type='text'
                                    value='Quebec'
                                    disabled
                                    style={{width:'70%'}}
                                    label='Province'
                                />
                                <br /><br />

                                <TextField
                                    type='text'
                                    // value='Quebec'
                                    // disabled
                                    style={{width:'70%'}}
                                    label='Postal Code'
                                />
                                <br /><br />

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
                                        try {
                                            await axios.post(`http://localhost:4000/user/${email}`, JSON.parse(JSON.stringify(orderData)));
                                            localStorage.removeItem('getStartedOrdersTimes');
                                            localStorage.removeItem('getStartedOrders');
                                            setOpen(true);
                                        } catch(error) {
                                            console.log(error);
                                        }

                                        setTimeout(() => {
                                            setOpen(false);
                                            history.push('/menu')
                                        }, 1000);


                                    }}
                                >
                                    Confirm orders </Button>
                                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

                        </Grid>
                        <Grid item xs>
                            <Paper elevation={0}>
                                <h2> Subscription price</h2>
                                <h2> $75.00</h2>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
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