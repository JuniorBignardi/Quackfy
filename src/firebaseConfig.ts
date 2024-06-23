// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
    authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASEPROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASESTORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();