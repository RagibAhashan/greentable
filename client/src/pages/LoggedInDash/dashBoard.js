import React, { useEffect, useState } from 'react';
import NavBarLoggedIn from '../../components/Navbars/navBarLoggedIn';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MealWeekComponent from '../../components/mealWeekBar/mealWeek';


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
    const classes = useStyles();
    const [selectedDay, setSelecterDay] = useState('');

    useEffect(() => {
        console.log(selectedDay);
    }, [selectedDay])

    const ShowRestaurant = ({name, cuisine, urlImage}) => {
        return (
            <Card className={classes.root} variant="outlined" disableRipple>
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

            <div style={{width:'80%', margin:'auto'}}>
            <MealWeekComponent setSelecterDay={setSelecterDay} />
            <h1 style={{textAlign:'center', marginTop:'10px'}}> {selectedDay ? `Select your ${selectedDay} meal`: ''} </h1>

            <Grid container spacing={5} style={{ marginTop:'10px' }}>

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
            </div>
        </div>
    )
}

export default DashBoard;