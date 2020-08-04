import { Router } from 'express';

import * as Restaurant from './restaurant'
import * as RestaurantValidator from './middlewares/restaurantValidation';
import { json } from 'body-parser';


const router = Router();
const jsonParser = json();


router.post('/restaurant/', RestaurantValidator.validatePartnerData(), jsonParser, Restaurant.addPartner);



export default router;