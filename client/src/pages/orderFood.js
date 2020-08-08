import React, { useState, useEffect } from 'react';
import './orderFood.css'
import NavBar from '../components/navbar'
import FooterPage from '../components/footerComponent'
import { Row, Col } from 'react-bootstrap';
import SelectFoodComponent from '../components/selectFoodComponent'
import PreviewOrder from '../components/previewOrder'

import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const OrderFood = () => {

    const [day, setDay] = useState(0);
    const [mondayOrders, setMondayOrder]        = useState({firstOrder: {}, secondOrder: {}});
    const [tuesdayOrders, setTuesdayOrders]     = useState({firstOrder: {}, secondOrder: {}});
    const [wednesdayOrders, setWednesdayOrders] = useState({firstOrder: {}, secondOrder: {}});
    const [thursdayOrders, setThursdayOrders]   = useState({firstOrder: {}, secondOrder: {}});
    const [fridayOrders, setFridayOrders]       = useState({firstOrder: {}, secondOrder: {}});



    // useEffect(() => {

    // }, [day])

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
    }


    const incrementDay = () => {
      console.log(day)
      const d = (day + 1)%7;
      setDay(d);
    }



    return (
        <div >
            <NavBar />

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
                          <SelectFoodComponent day={day} getDay={getDay}/>
                    </div>
                  </div>


                  <div class="col-4" style={{backgroundColor:'white'}}>
                    <div class="shadow p-3 mb-5 bg-white rounded">
                      <h1> Preview order </h1>
                      <hr />
                      <br />
                      <PreviewOrder />
                    </div>
                  </div>
                </div>
            <FooterPage />

        </div>
    );
  }
  
  export default OrderFood;