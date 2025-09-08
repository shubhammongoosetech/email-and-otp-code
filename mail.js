// require('dotenv').config();

// const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

// async function sendSMSMessage(sns, params) {
//     const command = new PublishCommand(params);
//     const message = await sns.send(command);
//         return message;
// }

// (async () => {
//     const params = {
//         Message: `Your OTP code is: ${Math.random().toString().substring(2, 8)}`,
//         PhoneNumber: '+919131379723',
//         MessageAttributes: {
//             'AWS.SNS.SMS.SenderID': {
//                 'DataType': 'String',
//                 'StringValue': 'String'
//             }
//         }
//     };

//     const sns = new SNSClient({
//         region: process.env.REGION,
//         credentials: {
//             accessKeyId: process.env.AWS_ACCESS_KEY,
//             secretAccessKey: process.env.AWS_SECRET_KEY
//         }
//     });

//     await sendSMSMessage(sns, params);
// })();

const nodemailer = require("nodemailer");

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // ✅ Correct host for Gmail
  port: 465, // ✅ Port for SSL
  secure: true, // Use SSL
  auth: {
    user: "noreply@chainpay.biz",
    pass: "vlbqkawotygfybla", // App password or OAuth token
  },
});

// Define the email options
const mailOptions = {
  from: "noreply@chainpay.biz", // Sender address
  to: "shubhammahatma21@gmail.com", // List of recipients
  subject: "Test Email", // Subject line
  text: "Hello, this is a test email!", // Plain text body
  // html: '<b>Hello, this is a test email!</b>' // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error.message}`);
  }
  console.log(`Email sent: ${info.response}`);
});
