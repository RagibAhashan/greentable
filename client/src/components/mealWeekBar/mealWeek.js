import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const MealWeekComponent = (props) => {
    const { selectedDay, setSelectedDay, weekOrder } = props;
    const classes = useStyles();

    useEffect(()=>{
      Aos.init({ duration: 100});
  }, []);


    const GetOrdersOfDay = ({day}) => {
      console.log('day', weekOrder, day)
      return (
        <div>
          {weekOrder[day].first.restaurant ? 
          
            <Chip color="secondary" onDelete={() => console.log('deleted')}
              label={`${weekOrder[day].first.food} from ${weekOrder[day].first.restaurant}`}
              style={{ marginTop:'2%', padding:'0%' }} 
              data-aos={
                `${selectedDay === day ? 'fade-in' : ''}`
              }
            />
            :
            <Chip
              data-aos={
                `${selectedDay === day ? 'flip-left' : ''}`
              }
              onClick={() => setSelectedDay(day)}
              color={`${selectedDay === day ? 'primary' : "secondary" }`}
              label={`${selectedDay === day ? 'Chose your meal!' : '+Add meal'}`}
              style={{  marginTop:'2%', padding:'5%'}}
            />
          }

          {weekOrder[day].second.restaurant ? 
            <Chip
            
            color="secondary" onDelete={() => console.log('deleted')}
            label={`${weekOrder[day].second.food} from ${weekOrder[day].second.restaurant}`}
            style={{ marginTop:'5%', padding:'5%' }} />
            :
            <Chip
              variant='outlined'
              onClick={() => setSelectedDay(day)}
              color="secondary"
              label='+Add meal'
              style={{  marginTop:'5%', padding:'5%'}}
            />
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
              <GetOrdersOfDay day={'Monday'} />
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Tuesday </p>
              <GetOrdersOfDay day={'Tuesday'} />
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Wednesday </p>
              <GetOrdersOfDay day={'Wednesday'} />
          </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Thursday </p>
              <GetOrdersOfDay day={'Thursday'} />
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Friday </p>
              <GetOrdersOfDay day={'Friday'} />
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Saturday </p>
              <GetOrdersOfDay day={'Saturday'} />
          </Paper>
        </Grid>

        <Grid item xs>
            <Paper className={classes.paper} >
              <p> Sunday </p>
              <GetOrdersOfDay day={'Sunday'} />
          </Paper>
        </Grid>
      </Grid>
      </div>
        </div>
    )
}

export default MealWeekComponent;