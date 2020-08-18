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


    const db = new Firestore();

    try {
        const userDocRef = await db.collection("restaurants").doc(email).get();

        if (userDocRef.exists) {
            return res.status(404).send({
                message: 'This email already exists'
            });
        } else {
            const user_id = uuidv4();
            await db.collection("restaurants-registration").doc(user_id).set(req.body);
            await EmailService.sendRegistrationConfirmationEmail(email, name, user_id);

            res.status(201).send({
                message: 'Restaurant was added.'
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
        const userDocRef = await db.collection("restaurants-registration").doc(user_id).get();

        if (!userDocRef.exists) {
            return res.status(404).send({
                message: 'User not found'
            });
        } else {
            return res.status(200).send({
                user_info: userDocRef.data()
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


export const signUpUser = async (req: Request, res: Response) => {
    
    const db = new Firestore();
    const user_id = req.body.user_id;
    const password = await bcrypt.hash(req.body.password, saltRounds);

    try {
        const userDocRef = await db.collection("restaurants-registration").doc(user_id).get();

        if (!userDocRef.exists) {
            return res.status(404).send({
                message: 'User not found'
            });
        } else {

            await db.collection("restaurants-registration").doc(user_id).delete();
            const user_data: any = userDocRef.data()
            user_data['password'] = password;

            await db.collection("restaurants").doc(user_data.email).set(user_data)

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
    const docRef = await db.collection('restaurants').doc(email).get();

    if(!docRef.exists) {
        return res.status(404).send({
            message: 'Account does not exists.'
        })
    } else {
        const data: any = docRef.data();
        const hashPassword = data.password;
        const match = await bcrypt.compare(password, hashPassword)
        res.status(200).send({
            passMatched: match
        })
    }
}