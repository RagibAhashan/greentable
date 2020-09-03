import React, { useEffect, useState } from 'react';
import NavBarLoggedIn from '../../components/Navbars/navBarLoggedIn';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MealWeekComponent from '../../components/mealWeekBar/mealWeek';
import RestaurantMeals from '../../components/restaurantMeals/restaurantMeals';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
        maxWidth: 445,
        borderRadius: 0,
        border: 'none',
        borderBottom: '1px solid black',
        '&:hover': {
            borderBottom: '1px solid #13eba2',
        }
    },
  paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  media: {
    height: 180,
  },
}));



const DashBoard = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, []);

    const history = useHistory();
    const classes = useStyles();
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedRestaurant, setSelectedRestaurant] = useState('');

    const FakeRestaurant = {
        'id': 'f4494b15-b037-452c-933c-f7e959dcda11',
        'logoImage': 'https://ih0.redbubble.net/image.222605779.1524/flat,1000x1000,075,f.jpg',
        'email': 'ahashanragib@gmail.com',
        'RestaurantName': 'Boustan',
        'RestaurantType': ['Middle Eastern', 'Healthy'],
        'Foods': {
            'Meals': [
                {'name': 'Shawarma', 'price': '$12.00', 'Description': 'Rice, Potatoes, Salad and Beaf', 'URL': 'https://nutritioninthekitch.com/wp-content/uploads/2018/04/0D8A0541.jpg'},
                {'name': 'Shawarma Miste', 'price': '$13.00', 'Description': 'Rice, Potatoes, Salad, Beaf & Chicken', 'URL': 'https://media-cdn.tripadvisor.com/media/photo-s/0e/7b/94/37/chicken-shawarma-plate.jpg'},
                {'name': 'Sandwhich', 'price': '$6.00', 'Description': 'Middle Eastern Chicken Sandwhich', 'URL': 'https://feelgoodfoodie.net/wp-content/uploads/2018/05/Beef-Shawarma-Wrap-9-1.jpg'},
                {'name': 'Kababs', 'price': '$8.00', 'Description': 'Rice, Salad and Kababs', 'URL': 'https://i1.wp.com/jerusalem-shawarma.ca/wp-content/uploads/2018/11/PHOTO-2018-11-09-12-05-32-8.jpg?fit=960%2C640'},
            ],

            'Drinks': [
                {'name': 'Pepsi', 'price': '$1.00'},
                {'name': 'Coke', 'price': '$2.00'},
                {'name': 'Nestle', 'price': '$1.50'}
            ]
        }
    };

    const [weekOrder, setWeekOrder] = useState({
        Monday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Tuesday:   {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Wednesday: {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Thursday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Friday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Saturday:  {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
        Sunday:    {first: {restaurant: '', food: '', type: ''},  second: {restaurant: '', food: '', type: ''}, location: '', time: ''},
    });

    const ShowRestaurant = ({name, cuisine, urlImage}) => {
        return (
            <Card
                className={classes.root}
                variant="outlined" disableRipple
                onClick={() => {
                    history.push(`/menu/${name}`)
                    setSelectedRestaurant({name})
                }}
            >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={urlImage}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {cuisine}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return (
        <div>
            <NavBarLoggedIn />

            <div style={{width:'85%', margin:'auto'}}>
            
            <MealWeekComponent
                setSelectedDay={setSelectedDay}
                weekOrder={weekOrder}
                selectedDay={selectedDay}
            />

            <br />
            <div style={{textAlign:'center', marginTop:'10px', margin: 'auto'}}>
                {selectedDay ? 
                
                <h1 data-aos='fade-in'>
                    Select your <span style={{color:'#ff5649'}}>{selectedDay}</span> meal
                </h1>
                : 
                
                <div style={{color:'white', marginTop:'auto', backgroundColor: '#e8ba5a', height: '70px'}}> 
                   <h1> Select a which day you would like to add a meal!</h1>
                </div>
                
                
                }
            </div>
            <br />

            { !selectedRestaurant ?
            <Grid container spacing={5} style={{ marginTop:'10px' }} data-aos='fade-in'>

                <Grid item xs={6} sm={3}>
                    <ShowRestaurant
                        name='Boustan'
                        cuisine='Middle Eastern'
                        urlImage='https://hellokelowna.com/wp53/wp-content/uploads/2018/12/s1.jpg'
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ShowRestaurant
                        name='Thai Express'
                        cuisine='Asian'
                        urlImage='https://www.englishclub.com/images/vocabulary/food/thai/thai-food.jpg'
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ShowRestaurant
                        name='KFC'
                        cuisine='American'
                        urlImage='https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2020/04/15/kfc-reopens-11-restaurants-for-delivery-only/3331532-1-eng-GB/KFC-reopens-11-restaurants-for-delivery-only_wrbm_large.png'
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ShowRestaurant
                        name='Poké Bol'
                        cuisine='Asian'
                        urlImage='https://media.restomontreal.ca/blog/603_2019-03-07-1267_news.jpg'
                    />
                </Grid>
            </Grid>

            :
                <RestaurantMeals
                    restaurant={FakeRestaurant}
                    setSelectedRestaurant={setSelectedRestaurant}
                    selectedDay={selectedDay}
                />
            }


            </div>
        </div>
    )
}

export default DashBoard;