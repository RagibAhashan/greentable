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
    const { selectedDay, setSelectedDay, weekOrder } = props;
    const classes = useStyles();

    const getOrdersOfDay = (day) => {
      return (
        <div>
          {weekOrder[day].first.restaurant ? 
            <Chip color="secondary" onDelete={() => console.log('deleted')}
              label={`${weekOrder[day].first.food} from ${weekOrder[day].first.restaurant}`}
              style={{ marginTop:'2%', padding:'0%' }} />
            :
            <Chip

              onClick={() => setSelectedDay(day)}
              color="secondary"
              label='+Add meal'
              style={{  marginTop:'2%', padding:'5%'}}
            />
          }

          <br />

          {weekOrder[day].second.restaurant ? 
            <Chip color="secondary" onDelete={() => console.log('deleted')}
            label={`${weekOrder[day].second.food} from ${weekOrder[day].second.restaurant}`}
            style={{ marginTop:'5%', padding:'5%' }} />
            :
            <Chip variant='outlined' onClick={() => setSelectedDay(day)} color="secondary" label='+Add meal' style={{  marginTop:'5%', padding:'5%'}} />
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