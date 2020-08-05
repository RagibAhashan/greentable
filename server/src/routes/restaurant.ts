import { Request, Response } from 'express';
import { Firestore } from "@google-cloud/firestore";
import { validationResult } from "express-validator";
import * as EmailService from '../services/email'
import { v4 as uuidv4 } from "uuid";

export const signUp = async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors)
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const email = req.body.email;
    const name = req.body.firstName;

    console.log(email, name)
    const db = new Firestore();

    try {
        
        await db.collection('restaurants-register-process').doc().set(req.body);
        // await EmailService.sendRegistrationConfirmationEmail(email, name);

        res.status(201).send({
            message: 'Restaurant was added.'
        });
    } catch(error) {
        console.log(error)
        res.status(500).send({
            message: error.message,
            error: 'internalError'
        });
    }

}

export const addPartner = async (req: Request, res: Response) => {
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
    const password = req.body.password;

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