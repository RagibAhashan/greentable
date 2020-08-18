import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navbar';
import FooterPage from '../components/footerComponent';
import SelectFoodComponent from '../components/OrderComponents/selectFoodComponent';
import PreviewOrder from '../components/OrderComponents/previewOrder';
import OrderExplainModal from '../components/OrderComponents/orderExplainModal';
import ConfirmOrders from '../components/OrderComponents/confirmOrders';

import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './orderFood.css';



const OrderFood = () => {
    const history = useHistory();
    const [day, setDay] = useState(0);
    const [ordersComplete, setOrderComplete] = useState(false);
    const [showExplaination, setShowExplaination] = useState(false);
    const [confirmWeekOrders, setConfirmWeekOrders] = useState(false);


    const [weekOrder, setWeekOrder] = useState({
      Monday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Tuesday:   {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Wednesday: {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Thursday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Friday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Saturday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
      Sunday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}},
    });


    useEffect(() => {
      setTimeout(()=> {
        setShowExplaination(true);
      }, 300)
    }, [])

    useEffect(()=>{
      let orders = 0;
      for(let i=0; i<7; i++) {
        if(weekOrder[getDay(i)].first.restaurant) {
          orders++;
        }
        if(weekOrder[getDay(i)].second.restaurant) {
          orders++;
        }
      }
      setOrderComplete(orders === 6)
      console.log('Day', getDay(day), 'orders', orders)


    })


    const getDay = (dayNum) => {
      switch (dayNum) {
        case 0: return 'Monday'
        case 1: return 'Tuesday'
        case 2: return 'Wednesday'
        case 3: return 'Thursday'
        case 4: return 'Friday'
        case 5: return 'Saturday'
        case 6: return 'Sunday'
        default: return 'Monday'
         
      }
    }

    const decrementDay = () => {
      const d = (day - 1)%7;
      setDay(d);
      history.push('/order-food');
    }


    const incrementDay = () => {
      const d = (day + 1)%7;
      setDay(d);
      history.push('/order-food');
    }


    const OrderComplete = () => {
      let orders = 0;
      for(let i=0; i<7; i++) {
        if(weekOrder[getDay(i)].first.restaurant) {
          orders++;
        }
        if(weekOrder[getDay(i)].second.restaurant) {
          orders++;
        }
      }

      if (ordersComplete) {   
          return (
            <Button
              style={{width:'100%', height:'100%', fontSize:'20px', backgroundColor:'#5de35d', color:'white'}}
              onClick={() => setConfirmWeekOrders(true)}  
            >
              Order Food!
            </Button>
          )
      } else {
        return <Button disabled={true} style={{width:'100%', height:'100%', fontSize:'20px'}}>
        {`Items remaining: ${orders} / 14`}</Button>
      }
    }






    return (
        <div >
          <OrderExplainModal showExplaination={showExplaination} setShowExplaination={setShowExplaination}/>
            <NavBar />

            { !confirmWeekOrders ?
              <div class="row" style={{height:'100%', width:'97%', margin:'auto'}}>
                <div class="col-8" style={{backgroundColor:'white', height:'100%'}}>
                <div className='shadow p-3 mb-5 bg-white rounded'>
                      <div class="d-flex justify-content-center" >
                          <div class="d-flex justify-content-between">
                          <Button
                            color="primary" 
                            startIcon={<ArrowBackIosRoundedIcon />} 
                            style={{borderRadius:'100px', marginRight:'10px'}}
                            disableRipple={true}
                            onClick={()=>decrementDay()}
                            disabled={day === 0}
                          />


                          </div>
                            <h3> {getDay(day)} </h3>
                          <div class="d-flex justify-content-between"> 
                          <Button
                            color="primary" 
                            startIcon={<ArrowForwardIosRoundedIcon />} 
                            style={{borderRadius:'100px', marginLeft:'10px'}}
                            onClick={()=>incrementDay()}
                            disabled={day === 6}
                          />
                          </div>
                      </div>
                      <hr />
                        <SelectFoodComponent
                          day={day}
                          getDay={getDay}
                          setWeekOrder={setWeekOrder}
                          weekOrder={weekOrder}
                        />
                  </div>
                </div>


                <div class="col-4" style={{backgroundColor:'white'}}>
                  <div class="shadow p-3 mb-5 bg-white rounded">
                    <div class='row'>
                      <div class='col'>
                        <h1> Preview order </h1>
                      </div>

                      <div class='col'>
                        <OrderComplete />
                      </div>
                    </div>
                    <hr />
                    <br />
                    <PreviewOrder
                      weekOrder={weekOrder}
                      getDay={getDay}
                      setWeekOrder={setWeekOrder}
                    />
                  </div>
                </div>
              </div>
            
            : <ConfirmOrders
                weekOrder={weekOrder}
                getDay={getDay}
                style={{width:'90%'}}
                history={history}
              />
            
          }

            

              <FooterPage style={{marginTop:'500px'}}/>

        </div>
    );
  }
  
  export default OrderFood;