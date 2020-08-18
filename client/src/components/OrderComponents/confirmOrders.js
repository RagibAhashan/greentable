import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TimePicker from 'react-bootstrap-time-picker';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FooterPage from '../footerComponent'


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ConfirmOrders = (props) => {
    const { weekOrder, getDay, history } = props;
    const classes = useStyles();

    
    useState(() => {
        history.push(window.location.pathname)
        console.log('weekOrder', weekOrder)
    }, []);

    const or = {
        Monday:    {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Tuesday:   {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Wednesday: {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Thursday:  {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Friday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Saturday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Sunday:    {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: 'restaurant', food: '', type: ''}},
    }





    const DayOrder = ({Day, FirstMeal, SecondMeal}) => {
        return (
            <div >

            
            <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${Day}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`1. ${FirstMeal.name}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${FirstMeal.restaurant}`}
                    </Typography>


                    <Typography variant="h5" component="h2">
                    {`2. ${SecondMeal.name}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {`from ${SecondMeal.restaurant}`}
                    </Typography>

                    <br />
                    <p> Select Delivery time</p>
                    <TimePicker start="12:00" end="21:00" step={30} style={{width:'100%', backgroundColor: '#faf8b4'}}/>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                    /> 


                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </div>
        )
    }


    return (
        <div >

                
            <div style={{width:'90%', margin:'auto', marginBottom:'100px'}}>
            
            <div class="d-flex justify-content-start">
                    <h1> Schedule your orders and edit delivery locations </h1>
                </div>
                <div class="d-flex justify-content-end">
                    <Button style={{
                            width:'32.5%',
                            height:'80px',
                            color: 'white',
                            backgroundColor: 'rgb(93, 227, 93)',
                            borderRadius:'0px',
                            fontSize:'20px',
                            padding:'10px'
                        }}>
                        Confirm your order!
                    </Button>
                </div>

            <Grid container spacing={3}>
                <Grid item xs>

                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />

                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />
                </Grid>
            </Grid>



            <Grid container spacing={3}>
                <Grid item xs>
                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Monday'}
                        FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                    />
                </Grid>
            </Grid>

                <Grid container spacing={3}>

                    <Grid item xs>
                        <DayOrder Day={'Monday'}
                            FirstMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                            SecondMeal={{name:'asdasd', restaurant:'asdjkfhadfjkh'}}
                        />
                    </Grid>

                </Grid>
            </div>

            <FooterPage  />
        </div>
    )
}

export default ConfirmOrders;