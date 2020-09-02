import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      border: 'solid 1px',
      '&:hover': {
        border: '1px solid #13eba2',
      }
    },
    
}));

const MealWeekComponent = () => {
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
        
    }, [])


    return (
        <div>
            <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs>
          <Paper className={classes.paper} >
              <p> Monday </p>
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Tuesday </p>
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Wednesday </p>
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Thursday </p>
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Friday </p>
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Saturday </p>
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Sunday </p>
          </Paper>
        </Grid>
      </Grid>
      </div>
        </div>
    )
}

export default MealWeekComponent;