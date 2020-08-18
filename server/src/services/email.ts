import nodemailer from 'nodemailer';


const URL = 'http://localhost:3000';

export const sendRegistrationConfirmationEmail = async (email: string, name: string, user_id: string) => {
    const email_company = `Nasta <${process.env.EMAIL_USERNAME}>`;
    const emailUser     = email;
    
    const transport = 
    {
        service: 'Gmail',
        auth: 
        {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS     
        }
    }
    
    const smtpTransport = await nodemailer.createTransport(transport);
    
    const options = 
    {
        from:    email_company,
        to:      emailUser,
        subject: 'Confirm your account',
        html: `<html style='font-family: Arial, Helvetica, sans-serif; width: 60%; margin: auto;'>
                    <H1 > Dear ${name}, </H1>
                    <h3> We are eager to begin our partnership! </h3>
                    <a href='${URL}/restaurant/get-started/loginEmail?${user_id}'> Click here to confirm your account </a>
                </html>`
    }
    
    await smtpTransport.sendMail(options, (err, info) => {   
        err ? console.log(err) : console.log(info)
    });
}

export const sendRegistrationConfirmationEmailUser = async (email: string, name: string, user_id: string) => {
    const email_company = `Nasta <${process.env.EMAIL_USERNAME}>`;
    const emailUser     = email;
    
    const transport = 
    {
        service: 'Gmail',
        auth: 
        {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS     
        }
    }
    
    const smtpTransport = await nodemailer.createTransport(transport);
    
    const options = 
    {
        from:    email_company,
        to:      emailUser,
        subject: 'Confirm your account',
        html: `<html style='font-family: Arial, Helvetica, sans-serif; width: 60%; margin: auto;'>
                    <H1 > Dear ${name}, </H1>
                    <h3> We are eager to begin our partnership! </h3>
                    <a href='${URL}/user/get-started/loginEmail?${user_id}'> Click here to confirm your account </a>
                </html>`
    }
    
    await smtpTransport.sendMail(options, (err, info) => {   
        err ? console.log(err) : console.log(info)
    });
}