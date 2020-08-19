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
    const { weekOrder, getDay, history, setConfirmWeekOrders } = props;
    const classes = useStyles();
    const [timelocation, setTimelocation] = useState({
        Monday:     {location: '', time: ''},
        Tuesday:    {location: '', time: ''},
        Wednesday:  {location: '', time: ''},
        Thursday:   {location: '', time: ''},
        Friday:     {location: '', time: ''},
        Saturday:   {location: '', time: ''},
        Sunday:     {location: '', time: ''},
    })
    
    useState(() => {
        setTimelocation({
            Monday:     {location: '', time: '11:00am'},
            Tuesday:    {location: '', time: '11:00am'},
            Wednesday:  {location: '', time: '11:00am'},
            Thursday:   {location: '', time: '11:00am'},
            Friday:     {location: '', time: '11:00am'},
            Saturday:   {location: '', time: '11:00am'},
            Sunday:     {location: '', time: '11:00am'},
        })
        console.log('weekOrder', weekOrder)
    }, []);

    const DayOrder = ({Day, FirstMeal, SecondMeal}) => {
        
        if (FirstMeal.restaurant === '' && SecondMeal.restaurant === '') {
            return <div />
        }

        return (
            <div >
            <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${Day}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${FirstMeal.name}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${FirstMeal.restaurant}`}
                    </Typography>

                    {SecondMeal.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${SecondMeal.name}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${SecondMeal.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

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
                <Button
                 onClick={() => setConfirmWeekOrders(false)}
                > Change your orders </Button>
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
                <h1> Schedule your orders and edit delivery locations </h1>

            <Grid container spacing={3}>
                <Grid item xs>

                    <DayOrder Day={'Monday'}
                        FirstMeal={{name: weekOrder.Monday.first.food, restaurant: weekOrder.Monday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Monday.second.food, restaurant: weekOrder.Monday.second.restaurant}}
                    />

                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Tuesday'}
                        FirstMeal={{name: weekOrder.Tuesday.first.food, restaurant: weekOrder.Tuesday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Tuesday.second.food, restaurant: weekOrder.Tuesday.second.restaurant}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Wednesday'}
                        FirstMeal={{name: weekOrder.Wednesday.first.food, restaurant: weekOrder.Wednesday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Wednesday.second.food, restaurant: weekOrder.Wednesday.second.restaurant}}
                    />
                </Grid>
            </Grid>



            <Grid container spacing={3}>
                <Grid item xs>
                    <DayOrder Day={'Thursday'}
                        FirstMeal={{name: weekOrder.Thursday.first.food, restaurant: weekOrder.Thursday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Thursday.second.food, restaurant: weekOrder.Thursday.second.restaurant}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Friday'}
                        FirstMeal={{name: weekOrder.Friday.first.food, restaurant: weekOrder.Friday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Friday.second.food, restaurant: weekOrder.Friday.second.restaurant}}
                    />
                </Grid>
                <Grid item xs>
                    <DayOrder Day={'Saturday'}
                        FirstMeal={{name: weekOrder.Saturday.first.food, restaurant: weekOrder.Saturday.first.restaurant}}
                        SecondMeal={{name: weekOrder.Saturday.second.food, restaurant: weekOrder.Saturday.second.restaurant}}
                    />
                </Grid>
            </Grid>

                <Grid container spacing={3}>

                    <Grid item xs>
                        <DayOrder Day={'Sunday'}
                            FirstMeal={{name: weekOrder.Sunday.first.food, restaurant: weekOrder.Sunday.first.restaurant}}
                            SecondMeal={{name: weekOrder.Sunday.second.food, restaurant: weekOrder.Sunday.second.restaurant}}
                        />
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}

export default ConfirmOrders;