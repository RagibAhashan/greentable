import { Request, Response } from 'express';
import { Firestore } from "@google-cloud/firestore";
import { validationResult } from "express-validator";
import nodemailer from 'nodemailer';

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

        /**
         const email_company = `Green Table <${process.env.EMAIL_USERNAME}>`;
         const emailUser     = 'Hossain.ajwad@gmail.com, ahashanragib@gmail.com';
         
         const transport = 
         {
             service: 'Gmail',
             auth: 
             {
                 user: process.env.EMAIL_USERNAME,
                 pass: process.env.EMAIL_PASS     
                }
            }
            
            const smtpTransport = nodemailer.createTransport(transport);
            
            const options = 
            {
                from:    email_company,
                to:      emailUser,
                subject: 'Testing email for start up',
                html: `This was sent from the server <br/> <a href='https://polydessin-a4593.web.app/'> GreenTable </a>`
            }
            
            smtpTransport.sendMail(options, (err, info) => {   
                err ? console.log(err) : console.log(info)
            });
         */


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