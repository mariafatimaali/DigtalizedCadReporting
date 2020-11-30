module.exports = (app) => {
    const email = require('../controllers/email.controller.js');

    // Send Email
    app.post('/sendEmail', email.sendEmail);

}

// var express = require('express');
// var router = express.Router();
// const nodemailer =require('nodemailer');


// router.post('/sendEmail', function (req, res) { 
//     let transporter = nodemailer.createTransport({
//         service :'gmail',
        
//         auth:{
        
//             user:'mariaalifatima@gmail.com',
//             pass:'03452744767'
//         }
        
        
//         });
        
//         //Step2
//         let mailOptions ={
//             from :'mariaalifatima@gmail.com',
//             to :'mariaalifatima@gmail.com',
//             subject :'testing',
//             text:'hi'
//         };
        
        
//         //Step3
//         transporter.sendMail(mailOptions,function(err,data){
//             if(err){
//                 console.log('error occurs');
//             }
//             else{
//                 console.log('email sent');    }
//         })
// }); 





// async function sendMail(user, callback) {
// //Step1

// }