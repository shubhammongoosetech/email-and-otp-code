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


const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'mail.payfirewallcrypto.com', // Your SMTP server
  port: 465, // SMTP Port for SSL
  secure: true, // Use true for 465, false for other ports
  auth: {
    user: 'support@payfirewallcrypto.com', // Your email address
    pass: 'c,cefRp1am@C', // Your password
  },
});

// Define the email options
const mailOptions = {
  from: 'support@payfirewallcrypto.com', // Sender address
  to: 'mahatmashubham0@gmail.com', // List of recipients
  subject: 'Test Email', // Subject line
  text: 'Hello, this is a test email!', // Plain text body
  // html: '<b>Hello, this is a test email!</b>' // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error.message}`);
  }
  console.log(`Email sent: ${info.response}`);
});
