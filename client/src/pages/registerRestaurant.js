import React from 'react';
import './registerRestaurant.css'
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Button } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
}));


const RegisterRestaurant = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} class='centered'>
      <div>
            <h2> RESTAURANT DETAILS </h2>
            <hr/>
              <div>
                <h6> Restaurant Name: </h6>
                <input 
                    placeholder="Enter your restaurant's name"
                />
            </div>

            <div>
                <h6> Restaurant Website Link: </h6>
                <input 
                    placeholder="Enter your restaurant website link"
                />
            </div>

            <div>
                <h6> Street Address: </h6>
                <input 
                    placeholder="Enter your restaurant's street address"
                />
            </div>

            <div>
                <h6> City: </h6>
                <input 
                    placeholder="Enter your City"
                />
            </div>

            <br/>
            <h2> PERSONAL DETAILS </h2>
            <hr/>
            <div>
                <h6> First Name: </h6>
                <input 
                    placeholder="Enter your first name"
                />
            </div>

            <div>
                <h6> Last Name: </h6>
                <input 
                    placeholder="Enter your last name"
                />
            </div>

            <div>
                <h6> Email Address: </h6>
                <input 
                    placeholder="Enter your Email address"
                />
            </div>

            <div>
                <h6> Phone number: </h6>
                <input 
                    placeholder="Enter your phone number"
                />
            </div>

            <Button id='register-button'> Register </Button>


          
      </div>
    </form>
  );
}

export default RegisterRestaurant;
