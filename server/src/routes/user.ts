import { Request, Response } from 'express';
import { Firestore } from "@google-cloud/firestore";
import { validationResult } from "express-validator";
import * as EmailService from '../services/email'
import { v4 as uuidv4 } from "uuid";

const bcrypt = require('bcrypt');
const saltRounds = 10;


export const requestRegistrationEmail = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors)
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const email = req.body.email;
    const name  = req.body.firstName;

    const user_info = req.body;
    user_info.password = await bcrypt.hash(req.body.password, saltRounds);


    const db = new Firestore();

    try {
        const userDocRef = await db.collection("users").doc(email).get();

        if (userDocRef.exists) {
            return res.status(404).send({
                message: 'This account already exists'
            });
        } else {
            const user_id = uuidv4();
            await db.collection("user-registration").doc(user_id).set(user_info);
            await EmailService.sendRegistrationConfirmationEmailUser(email, name, user_id);

            res.status(201).send({
                message: 'User email confirmation was sent.'
            });
        }
            
    } catch(error) {
        console.log(error)
        res.status(500).send({
            message: error.message,
            error: 'internalError'
        });
    }
}


export const getConfimationUser = async (req: Request, res: Response) => {

    const user_id = req.params.id;
    const db = new Firestore();

    try {
        const userDocRef: any = await db.collection("user-registration").doc(user_id).get();

        if (!userDocRef.exists) {
            return res.status(404).send({
                message: 'User not found'
            });
        } else {

            return res.status(200).send({
                user_info: {
                    firstName: userDocRef.data().firstName,
                    email: userDocRef.data().email
                }
            });
        }

    } catch(error) {
        console.log(error)
        res.status(500).send({
            message: error.message,
            error: 'internalError'
        });
    } 
}


export const deleteQueueUser = async (req: Request, res: Response) => {

    const db = new Firestore();
    const USER_ID = req.params.id;

    try {
        const userDocRef = await db.collection("user-registration").doc(USER_ID).get();

        if (!userDocRef.exists) {
            return res.status(404).send({
                message: 'User not found'
            });
        } else {

            await db.collection("user-registration").doc(USER_ID).delete();
            const user_data: any = userDocRef.data()


            await db.collection("users").doc(user_data.email).set(user_data)

            return res.status(200).send({
                message: 'User has been activated!'
            });
        }

    } catch(error) {
        console.log(error)
        res.status(500).send({
            message: error.message,
            error: 'internalError'
        });
    } 
}

export const signIn = async (req: Request, res: Response) => {
    const email    = req.body.email;
    const password = req.body.password;
    
    const db = new Firestore();
    const docRef = await db.collection('users').doc(email).get();

    if(!docRef.exists) {
        return res.status(404).send({
            message: 'Account does not exists.'
        })
    } else {
        const data: any = docRef.data();
        const hashPassword = data.password;
        const match = await bcrypt.compare(password, hashPassword)
        data.password = 'notrealpassword';

        if (match) {
            res.status(200).send({
                passMatched: true,
                userData: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phoneNumber: data.phoneNumber,
                    email: data.email
                }
            });
        } else {
            res.status(401).send({
                passMatched: false
            });
        }
    }
}

export const addMealPlan = async (req: Request, res: Response) => {
    const email = req.params.email;
    const db = new Firestore();
    const WEEK_MS = 604800000;
    const DAY_MS = 86400000;
    const orderWeek = new Date((parseInt(((new Date().getTime() + WEEK_MS)/WEEK_MS).toFixed()))*WEEK_MS - DAY_MS*3).toISOString().substr(0,10);
    try {
        await db.collection('users').doc(email).collection('orders')
        .doc(orderWeek).set(req.body);

        res.status(200).send({
            message: 'Order was added!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Something went wrong'
        })
    }
}