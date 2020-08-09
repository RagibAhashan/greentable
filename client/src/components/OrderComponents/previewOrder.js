import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';

const PreviewOrder = (props) => {
    
    const { weekOrder, getDay , setWeekOrder} = props;
    const days = [0,1,2,3,4,5,6];



    const removeItem = (day, firstOrder) => {
        console.log('firstOrder', firstOrder);

        
        const MEALS = weekOrder[day];
        if (firstOrder) {
            setWeekOrder({...weekOrder, [day]:
                {first: MEALS.second,  second: {restaurant: '', food: '', type: ''}}
            })
        } else {
            setWeekOrder({...weekOrder, [day]:
                {first: MEALS.first,  second: {restaurant: '', food: '', type: ''}}
            })
        }
        console.log('MEALS', MEALS)

    }



    return (
        <div>

            {days.map((day) => {
                const weekDay = getDay(day);

                return ( weekOrder[weekDay]['first']['restaurant']? 
                    <div>
                        <h4> {getDay(day)} </h4>
                        <Grid container spacing={3} style={{width:'100%'}}>
                            <Grid item xs={6}>
                                <div class="card" id='image'>
                                    <div class="card-body">
                                        <h4 class="card-title"> {weekOrder[weekDay]['first']['food']}  </h4>
                                        <p class="card-text"> {weekOrder[weekDay]['first']['restaurant']} </p>
                                        <p class="card-text">
                                            <small class="text-muted">
                                            <Button 
                                                size="small" 
                                                color="secondary"
                                                onClick={() => removeItem(weekDay, true)}
                                            > Remove </Button>
                                                {/* {weekOrder[weekDay]['first']['type']} */}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                        
                            </Grid>
                        {weekOrder[weekDay]['second']['restaurant'] ? 
                        
                        <Grid item xs={6}>
                                <div class="card" id='image'>
                                    <div class="card-body">
                                        <h4 class="card-title"> {weekOrder[weekDay]['second']['food']} </h4>
                                        <p class="card-text"> {weekOrder[weekDay]['second']['restaurant']} </p>
                                        <p class="card-text">
                                            <small class="text-muted">
                                            <Button 
                                                size="small" 
                                                color="secondary"
                                                onClick={() => removeItem(weekDay, false)}
                                            > Remove </Button>
                                                {/* {weekOrder[weekDay]['second']['type']} */}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        : <div />}
                        </Grid>
                        <hr />
                    </div>
                    : <div />
                )
        })}

            


            
        </div>
    )
}

export default PreviewOrder;