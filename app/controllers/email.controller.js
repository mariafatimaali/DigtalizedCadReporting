
const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
    var transporter = nodemailer.createTransport({
        host: '10.200.48.69',
        port: '25',
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: 'ibm.bpm@hbl.com',
        to: 'falak.mughal@hbl.com, maria.fatima@hbl.com',
        cc: 'akmal.riaz@hbl.com',
        subject: 'TESTING CAD EMAIL Service',
        text: 'Subject: Condition / Covenants Going to be Expired as on ________________ This is to inform you that the following condition/covenant of the customer is going to be expired on the dates mentioned below, as per terms of approval Name of Customer" "     Detail of Condition/Covenant ""	   Due Date ""'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send('{"message": "error"}');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('{"message": "success"}');
            
        }
    });
};

// exports.sendEmail = async function (to, cc, subject, emailBody, attachments, type, logRequest) {
//     var sendEmailObject = { status: "", message: "" }
//     // var password = await security.securityMeta('ftakey', config.emailcredential.password, 'decrypt');
//     //logger.debug("Email Password "+ password);
//     //password = 'Microsoft@12345!';
//     return new Promise((resolve, reject) => {
//         try {


//             //             host: '10.200.48.69',
//             // port: '25', bpm.configuration@domestic.hbl.com
//             // username: 'sq.fta@domestic.hbl.com',
//             // password: hbl@1234
//             // emailaddress: 'sq.fta@hbl.com'

//             // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
//             var transporter = nodemailer.createTransport({
//                 host: '10.200.48.69',
//                 port: '25',
//                 secure: false,
//                 tls: {
//                     rejectUnauthorized: false
//                 }
//                 // auth: {
//                 //     user: 'bpm.configuration@domestic.hbl.com',
//                 //     pass: 'hbl@1234'
//                 // },
//                 // emailaddress: 'maria.fatima@hbl.com'
//             });
//             var mailOptions = {
//                 from:
//                     "<" +
//                     config.emailcredential.emailaddress +
//                     ">",
//                 to: to,
//                 cc: cc,
//                 subject: subject,
//                 attachments: attachments
//             };
//             type == 'text' ? mailOptions['text'] = emailBody : mailOptions['html'] = emailBody
//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     // logRequest.responsecode = 97;
//                     // logRequest.request_response = "Error When Sending Email "+error;
//                     // logRequest.request_in_out = helper.global.request_out;
//                     // logs.logit_In_DB(logRequest);
//                     sendEmailObject.status = "01";
//                     sendEmailObject.message = "sendEmail " + error.message
//                     //logit('e','sendEmail Error',"Email not sent" + error.message);
//                     console.log("Email Sending Error " + JSON.stringify(sendEmailObject))
//                     resolve(sendEmailObject);
//                 } else {
//                     logRequest.responsecode = 0;
//                     logRequest.request_response = "Email Sent";
//                     logRequest.request_in_out = helper.global.request_out;
//                     logs.logit_In_DB(logRequest);
//                     sendEmailObject.status = "00";
//                     sendEmailObject.message = info.response;
//                     console.log(sendEmailObject)
//                     resolve(sendEmailObject);
//                 }
//             });
//         } catch (error) {
//             console.log('maria')
//             sendEmailObject.status = "99";
//             sendEmailObject.message = error.message;
//             logit('e', 'sendEmail Exception', "Email not sent" + error.message);
//             resolve(sendEmailObject);
//         }
//     });
// }
