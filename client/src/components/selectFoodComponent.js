import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import RestaurantMenu from '../components/restaurantMenu';


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





const SelectFoodComponent = (props) => {
    const history = useHistory();
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState('');

    useEffect(()=> {
        const FakeRestaurants = {
            'id': 'f4494b15-b037-452c-933c-f7e959dcda11',
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
            'id': '636ba4c0-5796-4666-bbab-a2d0e78a0aad',
            'logoImage': 'https://cdn.mfvexpo.com/w500-h169/7/LrGa3o9t9-TE-logo.png',
            'email': 'ahashanragib@gmail.com',
            'RestaurantName': 'Thai Express',
            'RestaurantType': ['Asian', 'Healthy'],
            'Foods': {
                'Meals': [
                    {'name': 'Fried rice', 'price': '$12.00', 'Description': 'Rice that is fried.. lol', 'URL': 'https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice-1.jpg'},
                    {'name': 'Thai Chicken', 'price': '$13.00', 'Description': 'Thai chicken with rice', 'URL': 'https://ifoodreal.com/wp-content/uploads/2019/04/FG-thai-chicken-curry.jpg'},
                    {'name': 'Thai Soup', 'price': '$6.00', 'Description': 'Flavored water and noodles', 'URL': 'https://carlsbadcravings.com/wp-content/uploads/2017/03/Thai-Chicken-Noodle-Soup-14.jpg'},
                    {'name': 'Salad', 'price': '$8.00', 'Description': 'Some healthy shit',              'URL': 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1-225x225.jpg'},
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

    useEffect(()=>{
        console.log('props', props)
        console.log(history)
    })



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
                    <p class="card-text">
                        <small class="text-muted">
                            Middle Eastern • Halal • Healthy
                        </small>
                    </p>
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
                                <div onClick={()=>{
                                    setSelectedRestaurant(restaurant);
                                    history.push('/order-food/restaurant?' + restaurant.id)}}
                                >
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
        
        if (history.location.pathname === "/order-food"
            || history.location.pathname === "/order-food/") {
            return (
                <ShowRestaurants
                    allRestaurants={allRestaurants}
                    setSelectedRestaurant={setSelectedRestaurant}
                />
            )
        }
        else {
            return (
                <div>
                    <h1> {selectedRestaurant.RestaurantName} </h1>
                    <RestaurantMenu 
                        info={selectedRestaurant}
                    />
                </div>
            )
        }
    }


    return (
        <div style={{
                width:'80%',
                margin: 'auto',
                paddingTop:'100px',
                marginBottom:'100px'
            }}
        >
            <ChooseMeal />
        </div>
    );
}

export default SelectFoodComponent;