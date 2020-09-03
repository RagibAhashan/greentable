import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      height: '160px'
    },
    
}));

const MealWeekComponent = (props) => {
    const { setSelecterDay } = props;
    const classes = useStyles();

    const [weekOrder, setWeekOrder] = useState({
        Monday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Tuesday:   {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Wednesday: {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Thursday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Friday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Saturday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Sunday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
    });

    useEffect(() => {
        console.log(weekOrder);
    }, []);

    const getOrdersOfDay = (day) => {
      return (
        <div>
          {weekOrder[day].first.restaurant ? 
            <Chip color="secondary" onDelete={() => console.log('deleted')} label='Shawarma' style={{ marginTop:'5%', padding:'5%' }} />
            :
            <Chip variant='outlined' onClick={() => setSelecterDay(day)} color="secondary" label='Add meal' style={{  marginTop:'5%', padding:'5%'}} />
          }

          {weekOrder[day].second.restaurant ? 
            <Chip color="secondary" onDelete={() => console.log('deleted')} label='Shawarma' style={{ marginTop:'5%', padding:'5%' }} />
            :
            <Chip variant='outlined' onClick={() => setSelecterDay(day)} color="secondary" label='Add meal' style={{  marginTop:'5%', padding:'5%'}} />
          }
            
        </div>
      )
    }


    return (
        <div>
            <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs>
          <Paper className={classes.paper} >
              <p> Monday </p>
              {getOrdersOfDay('Monday')}
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Tuesday </p>
              {getOrdersOfDay('Tuesday')}
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Wednesday </p>
              {getOrdersOfDay('Wednesday')}
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Thursday </p>
              {getOrdersOfDay('Thursday')}
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Friday </p>
              {getOrdersOfDay('Friday')}
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Saturday </p>
              {getOrdersOfDay('Saturday')}
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Sunday </p>
              {getOrdersOfDay('Sunday')}
          </Paper>
        </Grid>
      </Grid>
      </div>
        </div>
    )
}

export default MealWeekComponent;