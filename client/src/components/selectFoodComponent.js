import React, { useState, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary
    }
}));





const SelectFoodComponent = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState('');

    useEffect(()=> {
        const FakeRestaurants = {
            'logoImage': 'https://ih0.redbubble.net/image.222605779.1524/flat,1000x1000,075,f.jpg',
            'email': 'ahashanragib@gmail.com',
            'RestaurantName': 'Boustan',
            'RestaurantType': ['Middle Eastern', 'Healthy'],
            'Foods': {
                'Meals': [
                    {'name': 'Shawarma', 'price': '$12.00'},
                    {'name': 'Shawarma Miste', 'price': '$13.00'},
                    {'name': 'Sandwhich', 'price': '$6.00'},
                    {'name': 'Kababs', 'price': '$8.00'},
                ],
    
                'Drinks': [
                    {'name': 'Pepsi', 'price': '$1.00'},
                    {'name': 'Coke', 'price': '$2.00'},
                    {'name': 'Nestle', 'price': '$1.50'}
                ]
            }
        }


        const FakeRestaurants2 = {
            'logoImage': 'https://cdn.mfvexpo.com/w500-h169/7/LrGa3o9t9-TE-logo.png',
            'email': 'ahashanragib@gmail.com',
            'RestaurantName': 'Thai Express',
            'RestaurantType': ['Middle Eastern', 'Healthy'],
            'Foods': {
                'Meals': [
                    {'name': 'Shawarma', 'price': '$12.00'},
                    {'name': 'Shawarma Miste', 'price': '$13.00'},
                    {'name': 'Sandwhich', 'price': '$6.00'},
                    {'name': 'Kababs', 'price': '$8.00'},
                ],
    
                'Drinks': [
                    {'name': 'Pepsi', 'price': '$1.00'},
                    {'name': 'Coke', 'price': '$2.00'},
                    {'name': 'Nestle', 'price': '$1.50'}
                ]
            }
        }
        
        
        setAllRestaurants([FakeRestaurants, FakeRestaurants2]);
    }, []);



    const classes = useStyles();



    const [firstMeal, setFirstMeal] = useState('');
    const [secondMeal, setSecondMeal] = useState('');

    const PostRestaurant = ({logoURL, name}) => {
        
        return (
            <div class="card" id='image'>
                <img class="card-img-top" src={logoURL} alt="Card image cap" 
                    style={{
                        flexShrink:'0',
                        minWidth:'100%',
                        minHeight:'100%'
                    }} 
                    // onClick={()=>{setSelectedRestaurant(name)}}
                />
                <div class="card-body">
                    <h5 class="card-title"> {name} </h5>
                    <p class="card-text"> </p>
                    <p class="card-text"><small class="text-muted">Middle Eastern • Halal • Healthy </small> </p>
                </div>
            </div>
        )
    }

    const ShowRestaurants = ({allRestaurants}) => {

        
        return (
            <div>
                <Grid container spacing={3} style={{width:'75%'}}>

                    {allRestaurants.map((restaurant)=>{
                        return (
                            <Grid item xs={4}>
                                <div onClick={()=>{setSelectedRestaurant(restaurant); console.log(selectedRestaurant)}}>
                                    <PostRestaurant 
                                        logoURL={restaurant.logoImage}
                                        name={restaurant.RestaurantName}
                                    />
                                </div>
                            </Grid>
                        )
                    })}
                    
                </Grid>
            </div>
        )
    }


    const ChooseMeal = () => {
        if (selectedRestaurant.RestaurantName === undefined ) 
        return (<ShowRestaurants
            allRestaurants={allRestaurants}
            setSelectedRestaurant={setSelectedRestaurant}
        />)
        else {
            return (
                <div>
                    <h1> {selectedRestaurant.RestaurantName} </h1>
                    <Button onClick={()=> setSelectedRestaurant({})}> Back to restaurant selection. </Button>
                </div>
            )
        }
    }


    return (
        <div style={{width:'80%', margin: 'auto', paddingTop:'100px', marginBottom:'100px'}}>
            {/* <ShowRestaurants
                allRestaurants={allRestaurants}
                setSelectedRestaurant={setSelectedRestaurant}
            /> */}

            <ChooseMeal />
        </div>
    );
}

export default SelectFoodComponent;