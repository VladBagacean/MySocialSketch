// backend/firebase.js

const admin = require('firebase-admin');

const serviceAccount = require('C:\Users\vladb\Desktop\CVWebsite\Back-End\cv-website-af478-firebase-adminsdk-e0mea-b4fa41f03d.json'); // replace with your actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/cv-website-af478/database/cv-website-af478-default-rtdb/data', // replace with your actual Firebase project URL
});

module.exports = admin;