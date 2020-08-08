import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";

const PreviewOrder = (props) => {
    
    const { weekOrder, getDay , setWeekOrder} = props;
    const days = [0,1,2,3,4,5,6];

    useEffect(()=>{
        // console.log('PreviewOrder', weekOrder['Monday'])
    })

    const removeItem = (day) => {

    }



    return (
        <div>

            {days.map((day) => {
                const weekDay = getDay(day);
                // console.log(weekOrder[weekDay]['first']['restaurant'])
                return ( weekOrder[weekDay]['first']['restaurant'] ? 
                    <div>
                        <h4> {getDay(day)} </h4>
                        <Grid container spacing={3} style={{width:'100%'}}>
                            <Grid item xs={6}>
                                <div class="card" id='image'>
                                    <div class="card-body">
                                        <h4 class="card-title"> {weekOrder[weekDay]['first']['restaurant']} </h4>
                                        <p class="card-text"> {weekOrder[weekDay]['first']['food']} </p>
                                        <p class="card-text">
                                            <small class="text-muted">
                                                
                                                {weekOrder[weekDay]['first']['type']}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        {weekOrder[weekDay]['second']['restaurant'] ? 
                        
                        <Grid item xs={6}>
                                <div class="card" id='image'>
                                    <div class="card-body">
                                        <h4 class="card-title"> {weekOrder[weekDay]['second']['restaurant']} </h4>
                                        <p class="card-text"> {weekOrder[weekDay]['second']['food']}</p>
                                        <p class="card-text">
                                            <small class="text-muted">
                                                {weekOrder[weekDay]['second']['type']}
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