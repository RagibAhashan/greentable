import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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

const timeSelections = [
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
]

const ConfirmOrders = (props) => {
    const { weekOrder, getDay, history, setConfirmWeekOrders, schedule, setSchedute, meals, setMeals } = props;
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
            Monday:     {location: '', time: '12:00 PM'},
            Tuesday:    {location: '', time: '12:00 PM'},
            Wednesday:  {location: '', time: '12:00 PM'},
            Thursday:   {location: '', time: '12:00 PM'},
            Friday:     {location: '', time: '12:00 PM'},
            Saturday:   {location: '', time: '12:00 PM'},
            Sunday:     {location: '', time: '12:00 PM'},
        });
    }, []);


    useEffect(() => console.log(timelocation));


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

                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                    onChange={(e) => {
                        const TIME = timelocation[Day];
                        setTimelocation({...timelocation, [Day]:
                            {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation[Day];
                            setTimelocation({...timelocation, [Day]:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
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
                        }}
                        onClick={() => {
                            localStorage.setItem('getStartedOrders', JSON.stringify(weekOrder))
                            localStorage.setItem('getStartedOrdersTimes', JSON.stringify(timelocation))
                            setSchedute(timelocation);
                            setMeals(weekOrder);
                            history.push('/pricing')
                        }}
                    >
                        Confirm your order!
                    </Button>
                </div>
                <h1> Schedule your orders and edit delivery locations </h1>

            <Grid container spacing={3}>
                <Grid item xs>

            {!weekOrder.Monday.first.restaurant ? <div />  : 
            <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Monday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Monday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Monday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Monday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Monday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Monday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                    style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Monday'];
                            setTimelocation({...timelocation, ['Monday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Monday'];
                            setTimelocation({...timelocation, ['Monday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }

                </Grid>
                <Grid item xs>


                {!weekOrder.Tuesday.first.restaurant ? <div />  : 
            <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Tuesday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Tuesday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Tuesday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Tuesday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Tuesday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Tuesday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Tuesday'];
                            setTimelocation({...timelocation, ['Tuesday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>
                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Tuesday'];
                            setTimelocation({...timelocation, ['Tuesday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }


                </Grid>
                <Grid item xs>
                {!weekOrder.Wednesday.first.restaurant ? <div />  : 
                <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Wednesday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Wednesday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Wednesday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Wednesday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Wednesday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Wednesday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Wednesday'];
                            setTimelocation({...timelocation, ['Wednesday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Wednesday'];
                            setTimelocation({...timelocation, ['Wednesday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }
                </Grid>
            </Grid>



            <Grid container spacing={3}>
                <Grid item xs>
                {!weekOrder.Thursday.first.restaurant ? <div />  : 
                <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Thursday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Thursday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Thursday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Thursday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Thursday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Thursday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Thursday'];
                            setTimelocation({...timelocation, ['Thursday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Thursday'];
                            setTimelocation({...timelocation, ['Thursday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }
                </Grid>
                <Grid item xs>
                {!weekOrder.Friday.first.restaurant ? <div />  : 
                <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Friday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Friday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Friday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Friday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Friday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Friday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Friday'];
                            setTimelocation({...timelocation, ['Friday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Friday'];
                            setTimelocation({...timelocation, ['Friday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }
                </Grid>
                <Grid item xs>
                {!weekOrder.Saturday.first.restaurant ? <div />  : 
                <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Saturday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Saturday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Saturday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Saturday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Saturday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Saturday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                    style={{backgroundColor:'#00000000'}}
                        onChange={(e) => {
                            const TIME = timelocation['Saturday'];
                            setTimelocation({...timelocation, ['Saturday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Saturday'];
                            setTimelocation({...timelocation, ['Saturday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }
                </Grid>
            </Grid>

                <Grid container spacing={3}>

                {!weekOrder.Sunday.first.restaurant ? <div />  : 
                
                
                <Card className={classes.root} style={{backgroundColor: '#faf8b4', padding:'10px', marginTop:'30px'}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${'Sunday'}'s Meals`}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {`#1. ${weekOrder.Sunday.first.food}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Sunday.first.restaurant}`}
                    </Typography>

                    {weekOrder.Sunday.first.restaurant ? 
                    <div>
                        <Typography variant="h5" component="h2">
                        {`#2. ${weekOrder.Sunday.first.food}`}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {`from ${weekOrder.Sunday.first.restaurant}`}
                        </Typography>
                    </div>
                    : <div />}

                    <br />
                    <p> Select Delivery time</p>
                    <select style={{backgroundColor:'#00000000', width:'300px', borderColor:'#00000080', padding:'5px', marginBottom:'10px'}}
                        onChange={(e) => {
                            const TIME = timelocation['Sunday'];
                            setTimelocation({...timelocation, ['Sunday']:
                                {location: TIME.location,  time: e.target.value}
                        })
                    }}>
                        {
                            timeSelections.map((time) => {
                                return <option value={time}>{time}</option>
                            })
                        }
                    </select>

                    <br />
                    <TextField
                        label='Delivery Address'
                        defaultValue='Home'
                        placeholder={'Enter your Address'}
                        style={{width: '100%'}}
                        onChange={(e) => {
                            const TIME = timelocation['Sunday'];
                            setTimelocation({...timelocation, ['Sunday']:
                                {location: e.target.value,  time: TIME.time}
                            })
                        }}
                    />
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            }
                </Grid>
            </div>

        </div>
    )
}

export default ConfirmOrders;