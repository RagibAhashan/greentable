import React, { useState, useEffect } from 'react';
import './orderFood.css'
import NavBar from '../components/navbar'
import FooterPage from '../components/footerComponent'
import { Row, Col, Button } from 'react-bootstrap';
import SelectFoodComponent from '../components/selectFoodComponent'
import PreviewOrder from '../components/previewOrder'


const OrderFood = () => {

    const [day, setDay] = useState('monday');
    const [mondayOrders, setMondayOrder]        = useState({firstOrder: {}, secondOrder: {}});
    const [tuesdayOrders, setTuesdayOrders]     = useState({firstOrder: {}, secondOrder: {}});
    const [wednesdayOrders, setWednesdayOrders] = useState({firstOrder: {}, secondOrder: {}});
    const [thursdayOrders, setThursdayOrders]   = useState({firstOrder: {}, secondOrder: {}});
    const [fridayOrders, setFridayOrders]       = useState({firstOrder: {}, secondOrder: {}});



    useEffect(() => {

    }, [])





    return (
        <div >
            <NavBar />
            {/* <section class='view-screen'> */}

                <div class="row" style={{height:'100%', width:'97%', margin:'auto'}}>
                  <div class="col-8" style={{backgroundColor:'white', height:'100%'}}>
                  <div className='shadow p-3 mb-5 bg-white rounded'>
                        <div class="d-flex justify-content-center" >
                            <div class="d-flex justify-content-between"> <Button className="rounded-circle" style={{marginRight:'30px'}}> {'<'}</Button></div>
                              <h3> Monday </h3>
                            <div class="d-flex justify-content-between"> <Button className="rounded-circle" style={{marginLeft:'30px'}}> {'>'}</Button></div>
                        </div>
                        <hr />
                          <SelectFoodComponent />
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


            {/* </section> */}
            <FooterPage />





        </div>
    );
  }
  
  export default OrderFood;