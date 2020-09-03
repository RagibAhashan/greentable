import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
          flexGrow: 1,
          maxWidth: 445,
          borderRadius: 0,
          border: 'none',
          borderBottom: '1px solid black',
          '&:hover': {
              borderBottom: '1px solid #13eba2',
          }
      },
    paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
      },
    media: {
      height: 180,
    },
  }));

const RestaurantMeals = (props) => {
    const classes = useStyles();
    const { restaurant, setSelectedRestaurant, setMealSelected } = props;

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, []);

    const Meal = ({name, cuisine, urlImage}) => {
        return (
            <Card className={classes.root} variant="outlined" disableRipple>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={urlImage}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cuisine}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }


    return (
        <div >
            <br /> <br />
            <Button
                variant='outlined'
                startIcon={<ArrowBackIcon />}
                onClick={()=> {setSelectedRestaurant('')}}
                style={{marginBottom: '50px'}}
            >
                Select a different restaurant
            </Button>

            <h1 data-aos='fade-right'> {`Select a meal from ${restaurant.RestaurantName}`} </h1>
            <Grid container spacing={5} style={{ marginTop:'10px' }} data-aos='fade-right'>
                {restaurant.Foods.Meals.map((meal) => {
                    return <Grid item xs={6} sm={3} onClick={() => {
                        console.log(meal);
                        const order = {restaurant: restaurant.RestaurantName, food: meal.name, type: 'dadas'}
                        setMealSelected(order);
                        setSelectedRestaurant('');
                    }}>
                        <Meal
                            name={meal.name}
                            cuisine={meal.Description}
                            urlImage={meal.URL}
                        />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default RestaurantMeals;