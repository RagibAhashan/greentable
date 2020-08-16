import React, { useEffect, useState } from 'react';
import Wave from '../assets/img/wave.png'
import './loginPage.css'
import { Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextValidator} from 'react-material-ui-form-validator';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const UserSignUp = () => {

    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

  
    const signUp = async () => {
        console.log(email, password, firstName, lastName, phoneNumber);
        const dataPackage = {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
        }
        console.log(dataPackage)
        const data = JSON.parse(JSON.stringify(dataPackage));
        try {
            await axios.post('http://localhost:4000/user/', data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div >
            

            
        <Container id='loginPage' component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type='email'
            onChange={(ev) => {setEmail(ev.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="First name"
            name="firstName"
            autoFocus
            onChange={(ev) => {setFirstName(ev.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Last name"
            name="lastName"
            autoComplete="email"
            autoFocus
            onChange={(ev) => {setLastName(ev.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            type='number'
            fullWidth
            id="email"
            label="Phone number"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(ev) => {setPhoneNumber(ev.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(ev) => {setPassword(ev.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm password"
            type="password"
            id="password"
            error={(password !== confirmPass)}
            autoComplete="current-password"
            onChange={(ev) => {setConfirmPass(ev.target.value)}}
            style={{marginBottom:'5%'}}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={!(email && password&&confirmPass&& firstName&& lastName&& phoneNumber) || (password !== confirmPass)}
            onClick={async ()=>{ await signUp(); history.push('/') }}
          >
            Sign up
          </Button>

        </form>
      </div>

    </Container>

    <footer className="footer"> 
      <div id='copyright'>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Nasta
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    </footer>
    </div>
    ) 
}

export default UserSignUp;
