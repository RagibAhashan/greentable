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
import 'bootstrap/dist/css/bootstrap.min.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        GreenTable
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const LoginPage = () => {

    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div >
            

            
        <Container id='loginPage' component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={()=>{console.log(email, password); history.push("/");}}
          >
            Sign In
          </Button>

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{console.log(email, password)}}
          >
            Sign In with Google
          </Button>

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
          GreenTable
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
    </footer>
    </div>
    ) 
}

export default LoginPage;
