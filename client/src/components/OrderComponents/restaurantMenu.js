import React, { useState, useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import './restaurantMenu.css'


const RestaurantMenu = (props) => {
    const { info, weekOrder, setWeekOrder, day, getDay } = props;


    const selectFood = (item) => {
        console.log('ITEM', item)
        const DAY = getDay(day);

        console.log('weekOrder[DAY].first.restaurant', weekOrder[DAY].first.restaurant)
        if (!weekOrder[DAY].first.restaurant && !weekOrder[DAY].second.restaurant) {

            setWeekOrder({...weekOrder, [DAY]: 
                {first: {restaurant: info.RestaurantName, food: item.name, type: 'Asian • Healthy'},  second: {restaurant: '', food: '', type: ''}},
            })
        }

        if (weekOrder[DAY].first.restaurant && !weekOrder[DAY].second.restaurant) {
            const firstMeal = weekOrder[DAY].first;

            console.log('First meal is : ', firstMeal)

            setWeekOrder({...weekOrder, [DAY]:
                {first: firstMeal,  second: {restaurant: info.RestaurantName, food: item.name, type: 'Asian • Healthy'}},
            })
        }


    }

    const ShowFood = ({foodURL, name, description}) => {
        return (
            <div class="card" >
                <img class="card-img-top" src={foodURL} alt="Card image cap" 
                    style={{
                        flexShrink:'0',
                        minWidth:'100%',
                        minHeight:'100%'
                    }} 
                />
                <div class="card-body">
                    <h5 class="card-title"> {name} </h5>
                    <p class="card-text">
                        <small class="text-muted">
                            {description}
                        </small>
                    </p>
                </div>
            </div>
        )
    }


    return (
        <div>
            <Grid container spacing={3} style={{width:'100%'}}>

                {!info ? <div /> : info.Foods['Meals'].map((meal)=>{
                    return (
                        <Grid item xs={2} >
                            <div
                                id='food'
                                onClick={() => selectFood(meal)}
                            >
                                <ShowFood
                                    foodURL={meal.URL}
                                    name={meal.name}
                                    description={meal.Description}
                                />
                            </div>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

export default RestaurantMenu;