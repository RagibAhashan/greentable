import { Request, Response } from 'express';
import { Firestore } from "@google-cloud/firestore";
import { validationResult } from "express-validator";

export const addPartner = async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors)
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const db = new Firestore();

    try {
        await db.collection('restaurants').doc().set(req.body);
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