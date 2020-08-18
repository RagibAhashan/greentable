import { Router } from 'express';

import * as Restaurant from './restaurant'
import * as RestaurantValidator from './middlewares/restaurantValidation';

import * as User from './user';

import { json } from 'body-parser';


const router = Router();
const jsonParser = json();


// RESTAURANT REQUESTS.
router.post('/restaurant/sign-in-restaurant/', jsonParser, User.signIn);
router.post('/restaurant/', RestaurantValidator.validatePartnerData(), jsonParser, Restaurant.requestRegistrationEmail);
router.get('/restaurant/sign-up-user/:id', jsonParser, Restaurant.getConfimationUser);
router.post('/restaurant/sign-up-restaurant-owner', jsonParser, Restaurant.signUpUser);


// USER REQUESTS.
router.post('/user/sign-in-user/', jsonParser, User.signIn);
router.post('/user/', jsonParser, User.requestRegistrationEmail);
router.get('/user/sign-up-user/:id', jsonParser, User.getConfimationUser);
router.delete('/user/sign-up-user/:id', jsonParser, User.deleteQueueUser);

export default router;