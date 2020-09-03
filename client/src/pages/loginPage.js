import React, { useEffect, useState } from 'react';
import Wave from '../assets/img/wave.png'
import './loginPage.css'
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

const LoginPage = (props) => {
    const { setLoggedIn, getStarted, setUserInformation, setIsLoggedIn } = props;

    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      const userName = localStorage.getItem('EmailAddress');
      console.log('userName', userName);
      if(userName) {
        setEmail(userName);
      }

    }, [])
  
    const signIn = async () => {
      try {
          const dataPackage = {
              "email": email,
              "password": password,
          }
          const data = JSON.parse(JSON.stringify(dataPackage));
          const response = await axios.post('http://localhost:4000/user/sign-in-user/', data);
          console.log('response.status', response.status);
          
          if(getStarted) {
            setLoggedIn(true);
            localStorage.setItem('EmailAddress', email);
            setUserInformation(response.data);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(true);
            history.push('/');
          }
        } catch (error) {
          window.alert('Wrong Email or Password.')
          console.log(error);
        }
  }


    return (
        <div >
            

            
        <Container id='loginPage' component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
            {getStarted ? <div> <h1> You're almost there! </h1> <h5> Sign in and get your orders </h5> </div> :
            <div>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
          }
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
            defaultValue={localStorage.getItem('EmailAddress')}
            onChange={(ev) => {setEmail(ev.target.value)}}
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
            style={{marginBottom:'5%'}}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={async () => await signIn()}
          >
            Sign In
          </Button>

          <br /><br />
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up-client" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
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

export default LoginPage;
