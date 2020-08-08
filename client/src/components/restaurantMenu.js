import React, { useState, useEffect } from 'react'
import Grid from "@material-ui/core/Grid";

const RestaurantMenu = (props) => {

    const [cart, setCart] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(props['info'])

    useEffect(()=>{
        // console.log('MenuProps', props)
        setRestaurantInfo(props['info']);
        console.log(restaurantInfo)
    }, [restaurantInfo]);




    const ShowFood = ({foodURL, name, description}) => {
        return (
            <div class="card" id='image'>
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

                {!restaurantInfo ? <div /> : restaurantInfo.Foods['Meals'].map((meal)=>{
                    return (
                        <Grid item xs={2} id='food'>
                            <div>
                                <ShowFood
                                    foodURL={meal.URL}
                                    name={meal.name}
                                    // price={meal.price}
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