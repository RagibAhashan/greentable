import React from 'react'

const ConfirmOrders = (props) => {
    const { weekOrder, getDay } = props;

    const or = {
        Monday:    {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Tuesday:   {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Wednesday: {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Thursday:  {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Friday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Saturday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
        Sunday:    {first: {restaurant: 'restaurant', food: 'food', type: ''},  second: {restaurant: 'restaurant', food: '', type: ''}},
    }

    const PreviewWeekOneOrder = ({getDay}) => {
        const days = [0,1,2,3,4,5,6];
        return (
            <div class='row'>
                {days.map((day) => {
                    return (
                        <div className='col'> 
                            <div class="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                                {getDay(day)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


    const PreviewWeekTwoOrder = ({getDay}) => {
        const days = [0,1,2,3,4,5,6];
        return (
            <div class='row'>
                {days.map((day) => {
                    return (
                        <div className='col'> 
                            <div class="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                                {getDay(day)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }





    return (
        <div>
            <h1 style={{marginLeft:'10%', marginTop:'3%'}}> Confirm your order </h1>
            <div className='shadow p-3 mb-5 bg-white rounded'
                style={{width:'97%', margin:'auto', height:'100%', marginTop:'100px'}}
            >
                <div class="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                    <h2>
                        {`Week of ${new Date().toDateString()}`} 
                    </h2>    
                </div>

                <PreviewWeekOneOrder getDay={getDay}/>
                <br /><br /><br /><br /><br /><br />
            </div>
            <div className='shadow p-3 mb-5 bg-white rounded'
                style={{width:'97%', margin:'auto', height:'100%', marginTop:'100px'}}
            >
                <div class="d-flex justify-content-center" style={{marginBottom:'20px'}}>
                    <h2>
                        {`Week of ${new Date().toDateString()}`} 
                    </h2>    
                </div>
                <PreviewWeekTwoOrder style={{marginTop:'100px'}} getDay={getDay}/>
                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default ConfirmOrders;