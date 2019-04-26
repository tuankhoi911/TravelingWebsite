// generated by @ng-toolkit/serverless
'use strict';
const server = require('./dist/server');
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

const http = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = "/" + request.url;
  }
  return server.app(request, response);
});

// function for mail
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().mailservice.username,
    pass: functions.config().mailservice.password,
  }
});


const sendNotification = functions.firestore
  .document('/contact/{value}').onCreate((snap, context) => {
    const data = snap.data();
    sendEmail(data);


  });

const APP_NAME = 'Cloud Storage for Firebase quickstart';

const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  // [END onCreateTrigger]
  // [START eventAttributes]
  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendEmail(data);
});

function sendEmail(data) {
  const mailOptions = {
    from: functions.config().mailservice.username,
    to: 'phuongbinhtourist@gmail.com',
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Thông tin khách hàng ${data.email}`;
  mailOptions.text = `Họ và tên khách hàng: ${data.name}, Email: ${data.email}, Số điện thoại: ${data.phone}, Điểm khởi hành: ${data.arrival}, Tour du lịch đến: ${data.destination}, Thông điệp: ${data.message}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New welcome email sent to:', 'phuongbinhtourist@gmail.com');
  });
}

module.exports = {
  http,
  sendNotification
}
