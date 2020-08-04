import { body } from "express-validator";

export const validatePartnerData = () => {
    return [
        // body('restaurantName').exists(),
        // body('restaurantLink', 'restaurantLink must exist and be a string.').exists(),
        // body('streetAddress', 'streetAddress must exist and be a string.').exists(),
        // body('city', 'city must exist and be a string.').exists(),
        // body('firstName', 'firstName must exist and be a string.').exists(),
        // body('lastName', 'lastName must exist and be a string.').exists(),
        // body('email', 'email must exist and be a string.').exists().isEmail(),
        // body('phoneNumber', 'phoneNumber must exist and be a string.').exists()
      ]
}